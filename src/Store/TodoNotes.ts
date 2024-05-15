import { createNotes, PayloadAction } from '@reduxjs/toolkit';

type Todo = {

}

type TodosState = {

}

const initialState: TodosState = {

}

const todoNotes = createNotes({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {

        },
        toggleComplete(state, action: PayloadAction<string>) {


        },
        removeTodo(state, action: PayloadAction<string>) {

        }
    },
});

export const { addTodo, toggleComplete, removeTodo } = todoNotes.actions;

export default todoNotes.reducer;