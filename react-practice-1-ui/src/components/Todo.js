import React, { useState } from 'react';
//useStage is a function exposed by the react library which we can use in our component functions
//we then register new states we want to use in our application
//this is called react Hook

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
  const [modalIsOpen, setModalIsOpen] = useState(false); //always return an array of two elements
  //modalIsOpen => stores the true/false
  //setModalIsOpen => function that allow us to trigger a changing stage function of that current value

  //nested function inside Todo() function
  function deleteHandler(){
    console.log(`Clicked todo id ${props.title} to be deleted`);
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
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
    {modalIsOpen ? <Modal onSure={closeModalHandler} onNotSure={closeModalHandler} /> : null}
    {modalIsOpen ? <Backdrop clickAnyWhereButModal={closeModalHandler}/> : null}

  </div>;

}

export default Todo;
