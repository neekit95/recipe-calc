import style from './header.module.scss';
import {useState} from "react";
import Dropdown from "../dropdown/dropdown.tsx";


const Header = () => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false)

	const toggleDropDown = () => {
		setIsDropDownOpen(!isDropDownOpen)
	}

	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<button onClick={toggleDropDown} className={style.button}>
					Выбрать начинку
				</button>

				{isDropDownOpen && (
					<div className={style.dropdown}>
						<Dropdown onSelect={toggleDropDown} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
