import React from 'react';
import TodoList from "../../../src/components/ui/TodoList";
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


describe('<TodoList /> ui component', () => {

   describe('Rendering ui', () => {

      it('Renders Correctly', () => {
         compose(expect, toJSON, enzyme.shallow)(
            <TodoList todos={_testTodos} />
         ).toMatchSnapshot();
      });

      it('Renders div with class .todoList', () => {
         expect(
            enzyme.mount( <TodoList /> ).
            find('div.todoList').
            length
         ).toBe(1)
      });

      it('rendering without to-do list', () => {
         expect(
            enzyme.mount( <TodoList /> ).
            find('p').text()
         ).toBe('No Todos. (Add a todo)')
      });

      it('clicking on an todo does not cause an error', () => {
         const wrapper = enzyme.mount(  <TodoList todos={_testTodos}/> );

         wrapper.find('.todoList__item').first().simulate('click');
      });

   });

});
