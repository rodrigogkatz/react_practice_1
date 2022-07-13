import React from 'react';

function Modal(props){

  function sureHandler(){
    props.onSure();
  }

  function notSureHandler(){
    props.onNotSure();
  }

  return <div className='modal'>
    <p>Are you sure you want to delete this?</p>
    <button className='yes-btn' onClick={sureHandler}>Yes</button>
    <button className='btn' onClick={notSureHandler}>No</button>
  </div>;
}

export default Modal;
