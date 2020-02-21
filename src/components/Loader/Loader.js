import React from 'react';
import './style.css';

function Loader() {
  return(
    <div className='loader-wrapper'>
      <div className='loader-container'>
        <div className='loader-roller'>
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
      <div className='loader-text'>Loading... Please wait</div>
    </div>
  )
}

export default Loader;