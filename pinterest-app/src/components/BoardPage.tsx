import { useSelector } from "react-redux"
import { AppStorage } from "../redux/store"
import { useLocation } from "react-router-dom"
import { Board } from "../types"
import { Pin } from "./Pin"

export const BoardPage: React.FC = () => {
    const { boards } = useSelector((store: AppStorage) => store.pages.board)

    const location = useLocation();
    const { state } = location;
    const arrBoardPins: Board | undefined = boards.find(board => board.name === state.from);

    return <div>
        <h2 className="board__title">{state.from}</h2>
        <div className="pinPage__wrapper">

            {arrBoardPins?.pin.map((pin) => { return <Pin pin={pin} key={pin.id} /> })}
        </div>
    </div>
}