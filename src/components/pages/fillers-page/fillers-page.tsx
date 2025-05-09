import style from './fillers-page.module.scss';
import { useCakeCalculator } from "../../../lib/hooks/use-cake-calculator.ts";
import IngredientList from "../../ingredient-list/ingredient-list.tsx";
import {fillerNameMap} from "../../../utils/ingridient-mapper.ts";

const FillersPage = () => {
	const {
		eggsWeight,
		cakeWeightInput,
		handleEggsInputChange,
		handleCakeWeightChange,
		data,
		selected
	} = useCakeCalculator();

	return (
		<div className={style.container}>
			<h1>{fillerNameMap[selected] ?? selected}</h1>
			<div className={style.top}>
				<p>Вес яиц:</p>
				<input
					value={eggsWeight}
					onChange={handleEggsInputChange}
					type="number"
					className={style.input}
				/>
				/
				<p>Вес торта:</p>
				<input
					value={cakeWeightInput}
					onChange={handleCakeWeightChange}
					type="number"
					className={style.input}
				/>
			</div>

			<div className={style.result}>
				<div className={style.division}>
					<h2>Бисквит</h2>
					<h3>База:</h3>
					<IngredientList
						ingredients={data.biscuit.base}
						eggsWeight={eggsWeight}
						baseEggs={data.biscuit.base.eggs}
					/>
					<h3>Жидкие ингредиенты:</h3>
					<IngredientList
						ingredients={data.biscuit.liquidIngredients}
						eggsWeight={eggsWeight}
						baseEggs={data.biscuit.base.eggs}
					/>
					<h3>Сухие ингредиенты:</h3>
					<IngredientList
						ingredients={data.biscuit.dryIngredients}
						eggsWeight={eggsWeight}
						baseEggs={data.biscuit.base.eggs}
					/>
				</div>

				<div className={style.division}>
					<h2>Крем для сборки</h2>
					<IngredientList
						ingredients={data.assemblyCream}
						eggsWeight={eggsWeight}
						baseEggs={data.biscuit.base.eggs}
					/>
				</div>

				<div className={style.division}>
					<h2>Крем для выравнивания</h2>
					<IngredientList
						ingredients={data.smoothingCream}
						eggsWeight={eggsWeight}
						baseEggs={data.biscuit.base.eggs}
					/>
				</div>

				<div className={style.division}>
					<h2>Начинка</h2>
					<h3>Шаг 1:</h3>
					<IngredientList
						ingredients={data.filling.step1}
						eggsWeight={eggsWeight}
						baseEggs={data.biscuit.base.eggs}
					/>
					<h3>Шаг 2:</h3>
					<IngredientList
						ingredients={data.filling.step2}
						eggsWeight={eggsWeight}
						baseEggs={data.biscuit.base.eggs}
					/>
					<h3>Шаг 3:</h3>
					<IngredientList
						ingredients={data.filling.step3}
						eggsWeight={eggsWeight}
						baseEggs={data.biscuit.base.eggs}
					/>
				</div>


				{data.impregnation && (
					<div className={style.division}>
						<h2>Пропитка</h2>
						<IngredientList
							ingredients={data.impregnation}
							eggsWeight={eggsWeight}
							baseEggs={data.biscuit.base.eggs}
						/>
					</div>
				)}

			</div>
		</div>
	);
};

export default FillersPage;