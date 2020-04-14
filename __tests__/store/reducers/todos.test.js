import { todos } from '../../../src/store/reducers';
import c from '../../../src/utils/constants';
import deepFreeze from 'deep-freeze';

describe('todos Reducer', () => {

   it('ADD_TODO success', () => {
      const state = _testTodos;
      const action = {
         type: c.ADD_TODO,
         id: 4,
         text: 'walk',
         completed: false
      };

      deepFreeze(state);
      deepFreeze(action);
      expect( todos(state, action).length ).toBe(4);
   });

   it('TOGGLE_COMPLETED_TODO success', () => {
      const state = _testTodos;
      const action = {
         type: c.TOGGLE_COMPLETED_TODO,
         id: 0
      };

      deepFreeze(state);
      deepFreeze(action);
      expect( todos(state, action)[0].completed ).toBe(true);
   });
});
