import {configureStore} from "@reduxjs/toolkit"
import apiSlice from "./apiSlice"

export const reduxApi = configureStore({
    reducer: apiSlice
})