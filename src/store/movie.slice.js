import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    movies:[],
}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,

    reducers:{
            addMovies:(state,{payload}) =>{
                state.movies = payload
    extraReducers:{}
});

export const {addMovies} = movieSlice.actions
export default movieSlice.reducer