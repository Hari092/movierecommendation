import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        popularMovies:null,
        topMovies:null,
        upComingMovies:null,
        topSeries:null,
        clip:null,
        movieDetails:null,
        caste:null

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopMovies:(state,action)=>{
            state.topMovies = action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies = action.payload;
        },
        addTopSeries:(state,action)=>{
            state.topSeries = action.payload;
        },
        addClip:(state,action)=>{
            state.clip = action.payload;
        },
        addMovieDetails:(state,action)=>{
            state.movieDetails=action.payload;
        },
        addCasteAndCrew:(state,action)=>{
            state.caste=action.payload;
        }

    }
});
export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopMovies,addUpComingMovies,addTopSeries,addClip,addMovieDetails,addCasteAndCrew}=movieSlice.actions;

export default movieSlice.reducer;