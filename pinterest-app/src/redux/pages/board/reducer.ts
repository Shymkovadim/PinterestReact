import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Board, BoardPageStore, IPin, PinSaveOnBoard, PinsPageStore } from "../../../types";
import { addNewBoard, pinAddOnBoard } from "./action";





const defaultState: BoardPageStore = {
    activBoard: null,
    loadingPin: false,
    boards: [{
        name: "home", pin: [{
            id: 18,
            src: '/images/a2.jpg',
            title: 'design',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',

        }]
    }]
}

export const BoardReducer = createReducer<BoardPageStore>(defaultState, {

    [pinAddOnBoard.type]: (store, action: PayloadAction<PinSaveOnBoard>) => {
        store.boards.forEach((board) => { if (board.name === action.payload.nameBoard) { return board.pin.push(action.payload.pin) } })

    },
    [addNewBoard.type]: (store, action: PayloadAction<Board>) => {
        store.boards.push(action.payload)
    },

})