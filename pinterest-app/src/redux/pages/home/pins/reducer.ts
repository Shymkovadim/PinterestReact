import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Board, IPin, PinSaveOnBoard, PinsPageStore } from "../../../../types";
import { pinFilter, receivPin } from "./action";





const defaultState: PinsPageStore = {
    pins: [],
    filterValue: '',
    loadingPin: false,
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


})