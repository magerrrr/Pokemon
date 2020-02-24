import React from 'react';
import './style.css';

function ButtonWithTitle({ title, buttonText, clickHandler}) {
  return(
    <>
      <h3 className='header-text'>{title}</h3>
      <div className='button-container'>
        <button onClick={clickHandler}>
          {buttonText}
        </button>
      </div>
    </>
  )
}

export default ButtonWithTitle;