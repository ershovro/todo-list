import React from 'react';
import deepFreeze from 'deep-freeze';


global._testTodos = deepFreeze([
   {
      id: "0",
      text: "wake up",
      completed: true
   },
   {
      id: "1",
      text: "to drink coffee",
      completed: true
   },
   {
      id: "2",
      text: "work",
      completed: false
   }
] )