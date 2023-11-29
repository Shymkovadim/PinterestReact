/* eslint-disable jsx-a11y/alt-text */
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom"

export const Header: React.FC = () => {
    return <div>
        <div className="header">

            <img className="header__logo" src={logo} alt="Pinterest"  ></img>
            <NavLink className="header__btn" to='/home'>Главная</NavLink>
            <NavLink className="header__btn" to='/create'>Создать</NavLink>
            <input type="text" className="header__search" name="" id="" placeholder="Поиск..."></input>

        </div>
    </div>

}