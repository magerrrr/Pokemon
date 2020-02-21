import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { getItemsPart } from '../../services/pokemon';

function Pagination({ state, getItemsPart }) {
  if (state.isLoading){
    return null
  } else {
    return(
      <div className='button-container'>
        <button onClick={() => getItemsPart(state.prevUrl)}>Previous</button>
        <button onClick={() => getItemsPart(state.nextUrl)}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = { 
  getItemsPart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);