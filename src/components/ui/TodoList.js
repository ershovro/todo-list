import React from 'react';
import PropTypes from 'prop-types';

const resolveClassName = ({isCompleted}) => (
   `todoList__item ${isCompleted ? 'todoList__item_completed' : ''}`
);
const TodoList = ({todos = [], toggleCompletedState = f => f}) => (
   <div className="todoList">
      {
         !todos.length
            ? <p>No Todos. (Add a todo)</p>
            : <ul>
               { todos.map( todo =>
                  <li
                     key={todo.id}
                     className={ resolveClassName(todo) }
                     onClick={ () => toggleCompletedState(todo.id) }>
                     {todo.text}
                  </li>
               ) }
              </ul>
      }
   </div>
);

TodoList.propTypes = {
   todos: PropTypes.array,
   toggleCompletedState: PropTypes.func
};

export default TodoList;