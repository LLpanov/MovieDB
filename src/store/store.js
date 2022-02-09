import {configureStore} from "@reduxjs/toolkit";
import movieSlice from "./movie.slice";

export const store = configureStore({
    reducer: moviesReducer




});
