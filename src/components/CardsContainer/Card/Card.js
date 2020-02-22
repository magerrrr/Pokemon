import React from 'react';
import './style.css';
import pokemonType from '../../../helpers/pokemonTypes';
import PokemonInfo from '../../PokemonInfo/PokemonInfo';

function Card({ item }) {
  return (
    <div className='Card'>
      <div className='Card__name'>{item.name}</div>
      <div className='Card__img'>
        <img src={item.sprites.front_default} alt=''/>
      </div>
      <div className='Card__types'>
        {item.types.map((type,i) => {
          return (
            <div
              className='Card__type'
              key={i}
              style={{ backgroundColor: pokemonType[type.type.name] }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className='Card__info'>
        <div className='Card__info-two'>
          <div className='Card__data Card__data--weight'>
            <p className='title'>Weight:</p>
            <p>{item.weight}</p>
          </div>
          <div className='Card__data Card__data--height'>
            <p className='title'>Height:</p>
            <p>{item.height}</p>
          </div>
        </div>  
        <div className='Card__data Card__data--ability'>
          <p className='title'>Ability:</p>
          <p>{item.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;