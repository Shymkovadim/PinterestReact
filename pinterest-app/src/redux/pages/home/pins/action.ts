import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { service } from "../../../../service";
import { Board, IPin } from "../../../../types";



export const pinFilter = createAction<string>('filter pin');
export const addNewBoard = createAction<Board>('add new board')
export const pinAddOnBoard = createAction<Board>('add pin on board')

export const receivPin = createAsyncThunk('get Pin', () => {
    return service.getPin()
})