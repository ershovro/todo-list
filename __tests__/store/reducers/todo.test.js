import { todo } from '../../../src/store/reducers';
import c from '../../../src/utils/constants';
import deepFreeze from 'deep-freeze';

describe('todo Reducer', () => {

   it('ADD_TODO success', () => {
      const state = {};
      const action = {
         type: c.ADD_TODO,
         id: 0,
         text: 'wake up',
         completed: false
      };

      deepFreeze(state);
      deepFreeze(action);
      expect( todo(state, action) )
         .toEqual({
            id: action.id,
            text: action.text,
            completed: action.completed
         });
   });

   it('TOGGLE_COMPLETED_TODO success', () => {
      const state = {
         id: 0,
         text: 'wake up',
         completed: false
      };
      const action = {
         type: c.TOGGLE_COMPLETED_TODO,
         id: 0
      };

      deepFreeze(state);
      deepFreeze(action);
      expect( todo(state, action) )
         .toEqual({
            id: state.id,
            text: state.text,
            completed: !state.completed
         })
   });
});
