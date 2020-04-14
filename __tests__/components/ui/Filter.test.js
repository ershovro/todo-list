import React from 'react';
import Filter from "../../../src/components/ui/Filter";
import enzyme from 'enzyme';
import { JSDOM } from 'jsdom';
import toJSON from 'enzyme-to-json'
import { compose } from 'redux';
import Adapter from 'enzyme-adapter-react-16';


const { window } = new JSDOM(`...`);
const { document } = (new JSDOM(`...`)).window;

enzyme.configure({ adapter: new Adapter() });
global.window = window;
global.document = document;


describe('<Filter /> ui component', () => {

   describe('Rendering ui', () => {

      /*it('Renders Correctly', () => {
         compose(expect, toJSON, enzyme.shallow)(
            <AddTodoForm />
         ).toMatchSnapshot();
      });*/

      it('Renders div with class .filter', () => {
         expect(
            enzyme.mount( <Filter /> ).
            find('div.filter').
               length
         ).toBe(1)
      });

      it('Clicking default does not cause error', () => {
         const wrapper = enzyme.mount(  <Filter /> );

         wrapper.find('.filter__button').simulate('click');
      });

   });

   describe('Filter button click', () => {
      const _click = jest.fn();
      const wrapper = enzyme.mount(  <Filter onFilterButtonClick={_click}/> );

      wrapper.find('div.filter__button').first().simulate('click');

      it('Invoke onSubmit handler', () => {
         expect(_click).toBeCalled();
      });

      it('Invoke onSubmit handler with correct arguments', () => {
         expect(_click).toBeCalledWith('All');
      });

   });
});
