import React from 'react';
import '../stylesheets/App.scss';
import {TodoListContainer, AddColorFormContainer, FilterContainer} from './containers';

const App = () => (
   <div className="app">
      <AddColorFormContainer />
      <TodoListContainer />
      <FilterContainer />
   </div>
);


export default App;