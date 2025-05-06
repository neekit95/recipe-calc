import { useAppSelector} from "../../redux/hooks.ts";
import { fillers} from "../../utils/fillers.ts";
import { useCallback, useEffect, useState } from "react";
import * as React from "react";

export const useCakeCalculator = () => {
	const selected = useAppSelector(state => state.fillings.selectedFiller);
	const data = fillers[selected];

	const calculateCakeWeight = useCallback((eggsWeight: number) => {
		const baseWeight = data.biscuit.base.eggs;

		const biscuitWeight = [
			...Object.values(data.biscuit.base),
			...Object.values(data.biscuit.liquidIngredients),
			...Object.values(data.biscuit.dryIngredients)
		].reduce((acc, weight) => acc + weight * (eggsWeight / baseWeight), 0) * 0.85;

		const assemblyCreamWeight = Object.values(data.assemblyCream).reduce((acc, weight) => acc + weight * (eggsWeight / baseWeight), 0);
		const smoothingCreamWeight = Object.values(data.smoothingCream).reduce((acc, weight) => acc + weight * (eggsWeight / baseWeight), 0);

		const fillingWeight = [
			...Object.values(data.filling.step1),
			...Object.values(data.filling.step2),
			...Object.values(data.filling.step3)
		].reduce((acc, weight) => acc + weight * (eggsWeight / baseWeight), 0) * 0.95;

		return Math.round(biscuitWeight + assemblyCreamWeight + smoothingCreamWeight + fillingWeight);
	}, [data]);

	const initialCakeWeight = calculateCakeWeight(data.biscuit.base.eggs);

	const [eggsWeight, setEggsWeight] = useState<number | string>(data.biscuit.base.eggs);
	const [cakeWeightInput, setCakeWeightInput] = useState<number | string>(initialCakeWeight);
	const [activeInput, setActiveInput] = useState<'eggs' | 'cake' | null>(null);

	useEffect(() => {
		if (activeInput === 'eggs' && typeof eggsWeight === 'number') {
			setCakeWeightInput(calculateCakeWeight(eggsWeight));
		}
	}, [eggsWeight, activeInput, calculateCakeWeight]);

	const handleEggsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setActiveInput('eggs');
		setEggsWeight(value === '' ? '' : +value);
	};

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

	return {
		eggsWeight,
		cakeWeightInput,
		handleEggsInputChange,
		handleCakeWeightChange,
		data
	};
};