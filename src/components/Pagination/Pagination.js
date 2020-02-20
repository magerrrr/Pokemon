import React from 'react';
import './style.css';

function Pagination({ prev, next, loading }) {
  if (loading){
    return null
  } else {
    return(
      <div className='button-container'>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    )
  }
}

export default Pagination;