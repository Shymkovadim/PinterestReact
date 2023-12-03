/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react"
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addNewBoard, pinFilter, receivPin } from "../redux/pages/home/pins/action";


export const Header: React.FC = () => {
    const [value, setValue] = useState('');
    const [valueBoard, setValueBoard] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(pinFilter(value));
        if (value === '') {
            dispatch(receivPin() as any)
        }
    }, [value])


    const addBoard = () => {

        const newBoard = {
            name: valueBoard,
            pinsId: []
        };
        if (valueBoard.length > 1) {
            dispatch(addNewBoard(newBoard))

            setValueBoard('')
        }
    }

    return <div>
        <div className="header">

            <img className="header__logo" src={logo} alt="Pinterest"  ></img>
            <NavLink className="header__btn" to='/'>Главная</NavLink>
            <NavLink className="header__btn" to='/create'>Создать</NavLink>
            <input type="text" className="header__search" value={value} placeholder="Поиск по #..." name="" id="" onChange={(event: any) => { setValue(event.target.value) }}></input>
            <input type="text" className="header__search" value={valueBoard} placeholder="название доски" name="" id="" onChange={(event: any) => { setValueBoard(event.target.value) }}></input>
            <button className="btn" onClick={addBoard}>+</button>
        </div>
    </div>

}