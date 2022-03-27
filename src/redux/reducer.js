const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const addTodoReducer = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		// add Todo
		addTodos: (state, action) => {
			state.push(action.payload);
			return state;
		},
		// remove Todo
		removeTodos: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
		// update Todo
		updateTodos: (state, action) => {
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						item: action.payload.item
					};          
				}
				return todo;
			});
		},
		// completed Todo
		completeTodos: (state, action) => {
			return state.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						completed: true
					};
				}
				return todo;
			});
		},
	},
});

export const { 
	addTodos, 
	removeTodos, 
	updateTodos, 
	completeTodos 
} = addTodoReducer .actions;
export const reducer = addTodoReducer.reducer;
