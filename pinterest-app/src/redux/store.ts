import { BoardPageStore, PinsPageStore } from "../types"
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { pinReducer } from "./pages/home/pins/reducer"
import { BoardReducer } from "./pages/board/reducer"

export interface AppStorage {
    pages: {
        home: {
            pins: PinsPageStore,
        }
        board: BoardPageStore,
        // create: {
        //     // createPin: PinCreatePinStore
        // }

    }
}
export const store = configureStore<AppStorage>({
    reducer: combineReducers({
        pages: combineReducers({
            home: combineReducers({
                pins: pinReducer,
            }),
            board: BoardReducer,
        })
    }),

})