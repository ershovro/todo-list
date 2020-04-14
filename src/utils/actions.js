import c from './constants';

const generateRandomId = (a = 0, b = 10000000000) => (
   Math.floor( a + Math.random() * ( Math.abs(b - a) + 1) )
);

export const filterTodos = (filter = '') => ({
   type: c.FILTER_TODOS,
   filter
});

export const addTodo = (text) => ({
   type: c.ADD_TODO,
   id: generateRandomId(),
   completed: false,
   text
});

export const toggleCompletedTodo = (id) => ({
   type: c.TOGGLE_COMPLETED_TODO,
   id
});