import React from 'react';
import './style.css';
import { getMoves } from '../../services/pokemon';
import Popup from "reactjs-popup";

function PokemonInfo({pokemon}) {
  return(
    <Popup trigger={
      <div className='pokemonInfoButton-container'>
        <button className='pokemonInfoButton'>
          Show moves
        </button>
      </div>
    } modal
    >
      <MovesInfo moves={
        getMoves(pokemon)
      }
      />
    </Popup> 
  )
}

function MovesInfo ({moves}) {
  return(
    <div className="modal">
      <h1>
        Pokemon's moves:
      </h1>
      {moves.map((element, i) => {
        return (
          <p key={i}>{element}</p>
        )
      })}
    </div>
  )
}

export default PokemonInfo;