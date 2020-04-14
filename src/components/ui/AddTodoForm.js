import React from 'react';

const AddTodoForm = ({ oneNewTodo = f => f }) => {
   const _onSubmitHandler = (e) => {
      e.preventDefault();
      oneNewTodo(_input.value);
      _input.value = '';
      _input.focus();
   };
   let _input;

   return (
      <form onSubmit={_onSubmitHandler} className="addTodoForm">
         <input
            ref={input => _input = input}
            type="text"
            required
         />
         <input
            type="submit"
            value="Add todo"
         />
      </form>
   );
};


export default AddTodoForm;