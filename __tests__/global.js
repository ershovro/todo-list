import React from 'react';
import deepFreeze from 'deep-freeze';


global._testTodos = deepFreeze([
   {
      id: "0",
      title: "wake up",
      isCompleted: true
   },
   {
      id: "1",
      title: "to drink coffee",
      isCompleted: true
   },
   {
      id: "2",
      title: "work",
      isCompleted: false
   }
] )