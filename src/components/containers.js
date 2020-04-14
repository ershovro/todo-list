import { connect } from 'react-redux';
import {filterTodos, toggleCompletedTodo, addTodo} from '../utils/actions';
import Filter from './ui/Filter';
import TodoList from "./ui/TodoList";
import AddTodoForm from "./ui/AddTodoForm";

export const TodoListContainer = connect(
   ({todos, filter}) => ({
      todos: todos.filter( todo => {
         switch (filter) {
            case 'completed':
               return todo.completed;
            case 'active':
               return !todo.completed;
            default:
               return true;
         }
      } )
   }),//sort
   (dispatch) => ({
      toggleCompletedState(id) {
         dispatch( toggleCompletedTodo(id) );
      }
   })
)(TodoList);

export const AddColorFormContainer = connect(
   null,
   (dispatch) => ({
      oneNewTodo(text) {
         dispatch( addTodo(text) );
      }
   })
)(AddTodoForm);

export const FilterContainer = connect(
   ({filter}) => ({filtered: filter}),
   (dispatch) => ({
      onFilterButtonClick(filter) {
         dispatch( filterTodos(filter) );
      }
   })
)(Filter);