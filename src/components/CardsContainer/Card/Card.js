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
      <h3 className='Card__baseStatsTitle'>Pokemon data:</h3>
        <div className='Card__info-PokemonData'>
          <div className='Card__data Card__data--ability'>
            <p className='title'>Weight:</p>
            <p className='baseStat'>{item.weight}</p>
          </div>
          <div className='Card__data Card__data--ability'>
            <p className='title'>Height:</p>
            <p className='baseStat'>{item.height}</p>
          </div>
          <div className='Card__data Card__data--ability'>
            <p className='title'>Ability:</p>
            <p className='baseStat'>{item.abilities[0].ability.name}</p>
          </div>
          <div className='Card__data Card__data--ability'>
            <p className='title'>Species:</p>
            <p className='baseStat'>{item.species.name}</p>
          </div>
        </div>
        <h3 className='Card__baseStatsTitle'>Base stats:</h3>
        <div className='Card__baseStats'>
          <div className='Card__data--baseStats'>
            <p className='title'>HP:</p>
            <p className='baseStat'>{item.stats[5].base_stat}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Attack:</p>
            <p className='baseStat'>{item.stats[4].base_stat}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Defense:</p>
            <p className='baseStat'>{item.stats[3].base_stat}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Sp. Atc:</p>
            <p className='baseStat'>{item.stats[2].base_stat}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Sp. Def:</p>
            <p className='baseStat'>{item.stats[1].base_stat}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Speed:</p>
            <p className='baseStat'>{item.stats[0].base_stat}</p>
          </div>
        </div>
        <PokemonInfo pokemon={item}/>
      </div>
    </div>
  );
}

export default Card;