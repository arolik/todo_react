import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: {
            allTasks: [],
            completeTasks: [],
            remowedTasks: []
        }
    },
    reducers: {
        addTodo(state, action){
            state.todos.allTasks.push({
                id: action.payload.newId,
                date: new Date().toISOString(),
                text: action.payload.text,
                complete: false
            })
        },
        completeTodo(state, action){
            state.todos.allTasks.map((todo) => {
                if(todo.id === Number(action.payload.id)){
                    todo.complete = true;
                    state.todos.completeTasks.push(todo);
                }
                return todo;
            });
        }
    }
})

export const { addTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
