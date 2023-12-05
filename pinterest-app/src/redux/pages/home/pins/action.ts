import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { service } from "../../../../service";
import { Board, IPin, PinSaveOnBoard } from "../../../../types";



export const pinFilter = createAction<string>('filter pin');


export const receivPin = createAsyncThunk('get Pin', () => {
    return service.getPin()
})