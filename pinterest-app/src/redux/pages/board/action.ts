import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { service } from "../../../service";
import { Board, PinSaveOnBoard } from "../../../types";




export const addNewBoard = createAction<Board>('add new board')
export const pinAddOnBoard = createAction<PinSaveOnBoard>('add pin on board')
