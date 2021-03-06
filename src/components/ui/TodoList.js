import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/TodoList.scss';

const resolveClassName = ({completed}) => (
   `todoList__item ${completed ? 'todoList__item_completed' : ''}`
);
const TodoList = ({todos = [], toggleCompletedState = f => f}) => (
   <div className="todoList">
      {
         !todos.length
            ? <p>No Todos.</p>
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