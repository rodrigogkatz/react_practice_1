import React from 'react';

function Backdrop(props){
  //as backdrop is a custom made component we have to create its properties...
  //for example I created clickAnyWhereButModal 
  return <div className='backdrop' onClick={props.clickAnyWhereButModal}></div>;
}

export default Backdrop;
