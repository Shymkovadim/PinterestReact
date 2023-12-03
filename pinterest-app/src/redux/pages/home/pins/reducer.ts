import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Board, IPin, PinsPageStore } from "../../../../types";
import { addNewBoard, pinAddOnBoard, pinFilter, receivPin } from "./action";





const defaultState: PinsPageStore = {
    pins: [],
    filterValue: '',
    loadingPin: false,
    boards: [{ name: 'car', pinsId: ['1', '2'] }, { name: 'home', pinsId: ['4', '5'] }, { name: 'des', pinsId: ['8', '9'] }]
}

export const pinReducer = createReducer<PinsPageStore>(defaultState, {
    [receivPin.pending.type]: (store) => {
        store.loadingPin = true;
    },
    [receivPin.fulfilled.type]: (store, action: PayloadAction<IPin[]>) => {
        store.loadingPin = false;
        store.pins = action.payload
    },
    [pinFilter.type]: (store, action: PayloadAction<string>) => {
        store.filterValue = action.payload;
        store.pins = store.pins.filter((pin) => pin.title.toLowerCase().includes(store.filterValue.toLowerCase()))
    },
    [pinAddOnBoard.type]: (store, action: PayloadAction<any>) => {
        store.boards.filter((board) => { return board.name === action.payload.name }).push(action.payload)

    },
    [addNewBoard.type]: (store, action: PayloadAction<Board>) => {
        store.boards.push(action.payload)
    },

})