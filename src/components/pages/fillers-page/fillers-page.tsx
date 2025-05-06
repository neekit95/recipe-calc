import style from './fillers-page.module.scss';
import { useCakeCalculator} from "../../../lib/hooks/use-cake-calculator.ts";
import {ingredientNameMap} from "../../../utils/ingridient-mapper.ts";

const FillersPage = () => {
	const {
		eggsWeight,
		cakeWeightInput,
		handleEggsInputChange,
		handleCakeWeightChange,
		data
	} = useCakeCalculator();

	return (
		<div className={style.container}>
			<div className={style.top}>
				<p>Вес яиц:</p>
				<input
					value={eggsWeight}
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
			<div className={style.result}>
				<h2>Бисквит</h2>
				<h3>База:</h3>
				{Object.entries(data.biscuit.base).map(([key, value]) => (
					<p key={key}>{ingredientNameMap[key] ?? key}: {Math.round(value * (+eggsWeight / data.biscuit.base.eggs))}</p>
				))}
				<h3>Жидкие ингредиенты:</h3>
				{Object.entries(data.biscuit.liquidIngredients).map(([key, value]) => (
					<p key={key}>{ingredientNameMap[key] ?? key}: {Math.round(value * (+eggsWeight / data.biscuit.base.eggs))}</p>
				))}
				<h3>Сухие ингредиенты:</h3>
				{Object.entries(data.biscuit.dryIngredients).map(([key, value]) => (
					<p key={key}>{ingredientNameMap[key] ?? key}: {Math.round(value * (+eggsWeight / data.biscuit.base.eggs))}</p>
				))}

				<h2>Крем для сборки</h2>
				{Object.entries(data.assemblyCream).map(([key, value]) => (
					<p key={key}>{ingredientNameMap[key] ?? key}: {Math.round(value * (+eggsWeight / data.biscuit.base.eggs))}</p>
				))}

				<h2>Крем для выравнивания</h2>
				{Object.entries(data.smoothingCream).map(([key, value]) => (
					<p key={key}>{ingredientNameMap[key] ?? key}: {Math.round(value * (+eggsWeight / data.biscuit.base.eggs))}</p>
				))}

				<h2>Начинка</h2>
				<h3>Шаг 1:</h3>
				{Object.entries(data.filling.step1).map(([key, value]) => (
					<p key={key}>{ingredientNameMap[key] ?? key}: {Math.round(value * (+eggsWeight / data.biscuit.base.eggs))}</p>
				))}
				<h3>Шаг 2:</h3>
				{Object.entries(data.filling.step2).map(([key, value]) => (
					<p key={key}>{ingredientNameMap[key] ?? key}: {Math.round(value * (+eggsWeight / data.biscuit.base.eggs))}</p>
				))}
				<h3>Шаг 3:</h3>
				{Object.entries(data.filling.step3).map(([key, value]) => (
					<p key={key}>{ingredientNameMap[key] ?? key}: {Math.round(value * (+eggsWeight / data.biscuit.base.eggs))}</p>
				))}
			</div>
		</div>
	);
};

export default FillersPage;