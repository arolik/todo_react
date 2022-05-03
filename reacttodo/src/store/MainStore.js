import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";


let store = configureStore({
    reducer: {
        todos: TodoSlice
    }
})

export default store;