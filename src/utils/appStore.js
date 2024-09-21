import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"
import searchReducer from "./searchSlice";
import configReducer from "./configSlice"
const appStore = configureStore({
    reducer:{
        movies: moviesReducer,
        search: searchReducer,
        config: configReducer,
    }
})

export default appStore