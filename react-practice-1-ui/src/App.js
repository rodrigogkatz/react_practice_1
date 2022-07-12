//react should always be imported in a particular file which uses JSX
import React from 'react';
import Todo from './components/Todo';

//returning JSX
function App(){
  return <div>
  <h1>My TODO'S</h1>
    <Todo />
    <Todo />
    <Todo />

  </div>;
}

//the export allows the function to be used in other files
export default App;
