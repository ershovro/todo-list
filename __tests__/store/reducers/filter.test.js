import { filter } from '../../../src/store/reducers';
import c from '../../../src/utils/constants';
import deepFreeze from 'deep-freeze';

describe('filter Reducer', () => {

   it('FILTER_TODOS success', () => {
      const state = 'all';
      const action = {
         type: c.FILTER_TODOS,
         filter: 'active'
      };

      deepFreeze(state);
      deepFreeze(action);
      expect( filter(state, action) ).toBe('active');
   });

});
