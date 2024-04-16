import { createSlice } from "@reduxjs/toolkit";

const MovieinfoSlice= createSlice({
    name:"movieinfo",
    initialState:{
        showMovieInfo: false,
    },
    reducers:{
        toggleMovieInfo: (state) => {
            state.showMovieInfo =!state.showMovieInfo;
        },
    }
        
})

export default MovieinfoSlice.reducer;
export const {toggleMovieInfo}=MovieinfoSlice.actions;