import React from 'react';
import './style.css';
import { getMoves, getEvolutionChain } from '../../services/pokemon';
import Popup from "reactjs-popup";
import { useSelector, useDispatch } from 'react-redux';

function PokemonInfo({pokemon}) {
  const dispatch = useDispatch();
  const onShowEvolutions = (pokemon) => {
    dispatch(
      getEvolutionChain(pokemon.id)
    )
  }
  return(
    <Popup trigger={
      <div className='pokemonInfoButton-container'>
        <button className='pokemonInfoButton' onClick={() => onShowEvolutions(pokemon)}>
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
  useSelector(
    state => state.evolutionChain
  );
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