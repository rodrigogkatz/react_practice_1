import React from 'react';

function Modal(){
  return <div className='modal'>
    <p>Are you sure you want to delete this?</p>
    <button className='yes-btn'>Yes</button>
    <button className='btn'>No</button>
  </div>;
}

export default Modal;
