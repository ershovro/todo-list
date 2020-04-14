import c from '../utils/constants';

export const todo = (state = {}, action = {type: null}) => {
   switch (action.type) {
      case c.ADD_TODO:
         return {
            id: action.id,
            text: action.text,
            completed: action.completed
         };
      case c.TOGGLE_COMPLETED_TODO:
         if (state.id === action.id) {
            return {
               ...state,
               completed: !state.completed
            };
         }
      default: return state;
   }
};

export const todos = (state = [], action = {type: null}) => {
   switch (action.type) {
      case c.ADD_TODO:
         return [
            ...state,
            todo({}, action)
         ];
      case c.TOGGLE_COMPLETED_TODO:
         return [
            ...state.map( item => {
               if (item.id === action.id) {
                  return todo(item, action)
               } else {
                  return item;
               }
            })
         ]
      case c.REMOVE_TODO:
         return state.filter( item => item.id !== action.id );
      default:
         return state;
   }
};

export const filter = (state = 'all', action = {type: null}) => {
   switch (action.type) {
      case c.FILTER_TODOS:
         return action.filter;
      default:
         return state;
   }
};