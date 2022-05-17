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
                id: new Date().toISOString(),
                text: action.payload.text,
                complete: false,
                delete: false
            })
        },
        completeTodo(state, action){
            state.todos.allTasks.map((todo) => {
                if(todo.id === action.payload.id){
                    todo.complete = !todo.complete;
                }
                return todo;
            });
            state.todos.completeTasks = state.todos.allTasks.filter((t) => {
                return t.complete === true;
            })
        },
        deleteTodo(state, action){
            state.todos.allTasks.map((todo, i) => {
                if(todo.id === action.payload.id){
                    todo.delete = !todo.delete;
                    state.todos.remowedTasks.push(todo);
                }
                return todo;
            });
            state.todos.completeTasks.map((todo) => {
                if(todo.id === action.payload.id){
                    todo.delete = !todo.delete;
                }
                return todo;
            });
        },
        clearTasks(state, action) {
            state.todos.allTasks = state.todos.allTasks.filter(task => task.id !== action.payload.id);
            state.todos.remowedTasks = state.todos.remowedTasks.filter(task => task.id !== action.payload.id);
        }
    }
})

export const { addTodo, completeTodo, deleteTodo, clearTasks } = todoSlice.actions;

export default todoSlice.reducer;
