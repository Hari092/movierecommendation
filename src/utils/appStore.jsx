import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import movieInfoReducer from "./MovieInfoSlice";

const appStore =configureStore({
    reducer: {
       user:userReducer,
       movie: movieReducer,
       gpt:gptReducer,
       movieinfo:movieInfoReducer,
    }
})

export default appStore;