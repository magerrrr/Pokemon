import React from 'react';
import './style.css';
import { getEvolutionChain } from '../../services/pokemon';
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from 'react-redux';

function PokemonEvolution({pokemon}) {
  const dispatch = useDispatch();
  
  const onShowEvolutions = (pokemon) => {
    dispatch(
      getEvolutionChain(pokemon.id)
    )
  }

  const showEvolution = item => () => onShowEvolutions(item)

  return( 
    <Popup trigger={
      <div className='pokemonEvoButton-container' >
        <button className='pokemonEvoButton' onClick={showEvolution(pokemon)}>
          Show Evolutions
        </button>
      </div>
    } modal
    >
        <EvoInfo />
    </Popup> 
  )
}

function EvoInfo () {
  const data = useSelector(
    state => state.evolutionChain
  );

  return(
    <div className="modal">
      <div className='container-evolution'>
      <h1 className='wrapper__title'>Pokemon evolution</h1>
      <div className='wrapper-evolution'>
        <div className='wrapper-big'>
          <div className='wrapper-big__empty-big-w-wrapper'></div>
          <div className='wrapper-big__non-empty-big-w-wrapper'>
            <div className='pokemon-wrapper'>
              <img className='pokemon-wrapper__photo' alt='Pokemon'src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data[0].id}.png`}></img>
              <p className='pokemon-wrapper__number'>{`#${data[0].id}`}</p>
              <p className='pokemon-wrapper__name'>{data[0].name}</p>
              <div className='pokemon-wrapper__type'></div>
            </div>
            <div className='wrapper-small__with-arrow-right-wrapper'>
              <p className='arrow'>&#10137;</p>
              <p className='arrow-text'></p>
            </div>
            <div className='pokemon-wrapper'>
              <img className='pokemon-wrapper__photo' alt='Pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data[1].id}.png`}></img>
              <p className='pokemon-wrapper__number'>{`#${data[1].id}`}</p>
              <p className='pokemon-wrapper__name'>{data[1].name}</p>
              <p className='pokemon-wrapper__type'></p>
            </div>
          </div>
          <div className='wrapper-big__empty-big-w-wrapper'></div>
        </div>
        <div className='wrapper-small'>
          <div className='wrapper-small__with-diag-arrow-up-wrapper'>
            <p className='arrow'>&#10138;</p>
          </div>
          <div className='wrapper-small__empty-wrapper'></div>
          <div className='wrapper-small__with-diag-arrow-down-wrapper'>
            <p className='arrow'>&#10136;</p>
          </div>
        </div>
        <div className='wrapper-small'>
          <div className='pokemon-wrapper'>
            <img className='pokemon-wrapper__photo' alt='Pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data[2].id}.png`}></img>
            <p className='pokemon-wrapper__number'>{`#${data[2].id}`}</p>
            <p className='pokemon-wrapper__name'>{data[2].name}</p>
            <p className='pokemon-wrapper__type'></p>
          </div>
          <div className='wrapper-small__empty-wrapper'></div>
          <div className='pokemon-wrapper'>
            <img className='pokemon-wrapper__photo' alt='Pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data[2].id}.png`}></img>
            <p className='pokemon-wrapper__number'>{`#${data[2].id}`}</p>
            <p className='pokemon-wrapper__name'>{data[2].name}</p>
            <p className='pokemon-wrapper__type'></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PokemonEvolution;
