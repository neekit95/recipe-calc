import { fillers } from '../../utils/fillers.ts';
import style from './dropdown.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { setSelectedFiller } from '../../redux/fillings-slice';

interface DropdownProps {
  onSelect: () => void;
}

const Dropdown = ({ onSelect }: DropdownProps) => {
	const dispatch = useAppDispatch();

	const handleSelect = (filler: string) => {
		dispatch(setSelectedFiller(filler as keyof typeof fillers));
		onSelect();
	};

	return (
		<div className={style.container}>
			{Object.entries(fillers).map(([key]) => (
				<button key={key} onClick={() => handleSelect(key)} className={style.button}>
					{key}
				</button>
			))}
		</div>
	);
};

export default Dropdown;