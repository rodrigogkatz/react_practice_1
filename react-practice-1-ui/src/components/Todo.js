import React from 'react';

function Todo(){
  return <div className='card'>
    <div className='card-title'>
      <h2>Title</h2>
    </div>
    <div className='divider'></div>
    <div className='card-description'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum </div>
    <div className='actions'>
      <button className='btn'>Delete</button>
    </div>
  </div>;
}

export default Todo;
