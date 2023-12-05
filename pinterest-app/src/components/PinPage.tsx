import { useDispatch, useSelector } from "react-redux";
import { AppStorage } from "../redux/store";
import { useEffect } from 'react'
import { receivPin } from "../redux/pages/home/pins/action";
import { Pin } from "./Pin";
import { Board } from "./Board";

export const PinPage: React.FC = () => {
    const { pins, loadingPin } = useSelector((store: AppStorage) => store.pages.home.pins)
    const { boards } = useSelector((store: AppStorage) => store.pages.board)
    const dispatch = useDispatch();
    useEffect(() => {
        if (pins.length === 0) {
            dispatch(receivPin() as any)
        }
    }, [])
    if (loadingPin) {
        return <div className="Loading"></div>
    }

    return <div>
        <Board boards={boards}></Board>
        <div className="pinPage__wrapper">
            {pins.map((pin) => { return <Pin pin={pin} key={pin.id} /> })}
        </div>
    </div >
}