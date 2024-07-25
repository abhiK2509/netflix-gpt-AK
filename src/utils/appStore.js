import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import moviesReducer from "../redux/movieSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer
        }
    }
)
export default appStore;