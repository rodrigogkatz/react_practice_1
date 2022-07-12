import React from 'react';

function Todo(props){

  //nested function inside Todo() function
  function deleteHandler(){
    console.log(`Clicked todo id ${props.title} to be deleted`);
  }

  return <div className='card'>
    <div className='card-title'>
      <h2>{props.title}</h2>
    </div>
    <div className='divider'></div>
    <div className='card-description'>{props.text}</div>
    <div className='actions'>
      <button className='btn' onClick={deleteHandler}>Delete</button>
    </div>
  </div>;

}

export default Todo;
