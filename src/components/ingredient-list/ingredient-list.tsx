import React from 'react';
import { ingredientNameMap} from "../../utils/ingridient-mapper.ts";
import style from './ingredient-list.module.scss'

interface IngredientListProps {
	ingredients: Record<string, number>;
	eggsWeight:string | number;
	baseEggs: number;
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, eggsWeight, baseEggs }) => {
	return (
		<>
			{Object.entries(ingredients).map(([key, value]) => {
				const calculatedValue = value * (Number(eggsWeight) / baseEggs);
				return (
					<p key={key} className={style.p}>
						{ingredientNameMap[key] ?? key}: {' '}
						{Number.isInteger(calculatedValue) ? calculatedValue : calculatedValue.toFixed(1)} г.
					</p>
				);
			})}
		</>
	);
};

export default IngredientList;