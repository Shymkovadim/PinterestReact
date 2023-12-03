import { PinsPageStore } from "../types"
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { pinReducer } from "./pages/home/pins/reducer"

export interface AppStorage {
    pages: {
        home: {
            pins: PinsPageStore,
            // pinModalWindow: {
            //     // saveOnBoard: PinSaveOnBoardStore,
            //     // pinComplain: PinComplainStore
            // }

        }
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
            })
        })
    }),

})