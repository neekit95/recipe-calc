import style from './fillers-page.module.scss';
import { useAppSelector } from "../../../redux/hooks.ts";
import { fillers } from "../../../utils/fillers.ts";
import React, {useEffect, useState, useCallback} from "react";

const FillersPage = () => {
	const selected = useAppSelector(state => state.fillings.selectedFiller);
	const data = fillers[selected];

	const calculateCakeWeight = useCallback((eggsWeight: number) => {
		const biscuitWeight = [
			...Object.values(data.biscuit.base),
			...Object.values(data.biscuit.liquidIngredients),
			...Object.values(data.biscuit.dryIngredients)
		].reduce((acc, weight) => acc + weight * (eggsWeight / data.biscuit.base.eggs), 0) * 0.85;

		const assemblyCreamWeight = Object.values(data.assemblyCream).reduce((acc, weight) => acc + weight * (eggsWeight / data.biscuit.base.eggs), 0);
		const smoothingCreamWeight = Object.values(data.smoothingCream).reduce((acc, weight) => acc + weight * (eggsWeight / data.biscuit.base.eggs), 0);

		const fillingWeight = [
			...Object.values(data.filling.step1),
			...Object.values(data.filling.step2),
			...Object.values(data.filling.step3)
		].reduce((acc, weight) => acc + weight * (eggsWeight / data.biscuit.base.eggs), 0) * 0.95;

		return Math.round(
			biscuitWeight +
			assemblyCreamWeight +
			smoothingCreamWeight +
			fillingWeight
		);
	}, [data]);

	const initialCakeWeight = calculateCakeWeight(data.biscuit.base.eggs);

	const [eggsWeight, setEggsWeight] = useState<number | string>(data.biscuit.base.eggs);
	const [cakeWeightInput, setCakeWeightInput] = useState<number | string>(() => calculateCakeWeight(data.biscuit.base.eggs));
	const [activeInput, setActiveInput] = useState<'eggs' | 'cake' | null>(null);



	const handleEggsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setActiveInput('eggs');
		setEggsWeight(value === '' ? '' : +value);
	}

	useEffect(() => {
		if (activeInput === 'eggs' && typeof eggsWeight === 'number') {
			setCakeWeightInput(calculateCakeWeight(eggsWeight));
		}
	}, [eggsWeight, activeInput, calculateCakeWeight]);

	const handleCakeWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setActiveInput('cake');
		if (value === '') {
			setCakeWeightInput('');
			return;
		}
		const newCakeWeight = +value;
		setCakeWeightInput(newCakeWeight);
		const ratio = newCakeWeight / initialCakeWeight;
		setEggsWeight(Math.round(data.biscuit.base.eggs * ratio));
	};

	return (
		<div className={style.container}>
			<div className={style.top}>
				<p>
					Вес яиц:
				</p>
				<input
					value={typeof eggsWeight === 'number' ? eggsWeight : eggsWeight}
					onChange={handleEggsInputChange}
					type='number'
					className={style.input}
				/>
				/
				<p>Вес торта:</p>

				<input
					value={cakeWeightInput}
					onChange={handleCakeWeightChange}
					type='number'
					className={style.input}
				/>
			</div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default FillersPage;