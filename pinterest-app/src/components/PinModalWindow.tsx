import { useDispatch, useSelector } from "react-redux"
import { AppStorage } from "../redux/store"
import { useState } from "react";
import { IPin, PinSaveOnBoard } from "../types";
import { pinAddOnBoard } from "../redux/pages/board/action";


export interface Pin {
    pin: IPin
}

export const PinModalWindow: React.FC<Pin> = ({ pin }) => {
    const [value, setValue] = useState('');
    const { boards } = useSelector((store: AppStorage) => store.pages.board);
    const dispatch = useDispatch();
    const addOnBoard = () => {
        const newPinBoard: PinSaveOnBoard = {
            nameBoard: value,
            pin: pin
        }
        dispatch(pinAddOnBoard(newPinBoard))
    }

    return <div>
        <div className="pin__modal ">
            <div className="pin__save">
                <select className="pin__select" onChange={(event) => {
                    setValue(event.target.value);
                }}>
                    {boards.map(board => { return <option value={board.name}>{board.name}</option> })}
                </select>
                <button className="btn" onClick={addOnBoard}>Сохранить</button></div>
            {/* <div className="pin__complaint">
                <select className="pin__select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button className="btn">Пожаловаться</button>
            </div> */}
        </div>
    </div >
}
