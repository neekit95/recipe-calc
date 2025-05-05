import style from './fillers-page.module.scss';
import { useAppSelector} from "../../../redux/hooks.ts";
import { fillers} from "../../../utils/fillings.ts";

const FillersPage = () => {
	const selected = useAppSelector(state => state.fillings.selectedFiller);
	const data = fillers[selected];

	return (
		<div className={style.container}>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default FillersPage;