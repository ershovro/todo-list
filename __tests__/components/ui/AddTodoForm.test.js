import React from 'react';
import AddTodoForm from "../../../src/components/ui/AddTodoForm";
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


describe('<AddTodoForm /> ui component', () => {

   describe('Rendering ui', () => {

      /*it('Renders Correctly', () => {
         compose(expect, toJSON, enzyme.shallow)(
            <AddTodoForm />
         ).toMatchSnapshot();
      });*/

      it('Renders form with class .addTodoForm', () => {
         expect(
            enzyme.mount( <AddTodoForm /> ).
            find('form.addTodoForm').
            length
         ).toBe(1)
      });

      it('Renders 1 form', () => {
         expect(
            enzyme.mount( <AddTodoForm /> ).
            find('form').
            length
         ).toBe(1)
      });

      it('Submitting default does not cause error', () => {
         const wrapper = enzyme.mount(  <AddTodoForm /> );

         wrapper.find('input').first().value = 'Wake up';
         wrapper.find('form').simulate('submit');
      });

   });

   describe('Adding new todo', () => {
      const _oneNewTodo = jest.fn();
      const wrapper = enzyme.mount(  <AddTodoForm oneNewTodo={_oneNewTodo}/> );

      wrapper.find('input[type="text"]').instance().value = 'Wake up';
      wrapper.find('form').simulate('submit');

      it('Invoke onSubmit handler', () => {
         expect(_oneNewTodo).toBeCalled();
      });

      it('Invoke onSubmit handler with correct arguments', () => {
         expect(_oneNewTodo).toBeCalledWith('Wake up');
      });

      it('Reset the text value', () => {
         expect( wrapper.find('[type="text"]').instance().value ).
         toBe('')
      });

   });
});
