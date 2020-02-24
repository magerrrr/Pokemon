import React from 'react';
import './style.css';
import pokemonType from '../../../helpers/pokemonTypes';
import PokemonInfo from '../../PokemonInfo/PokemonInfo';
import PokemonEvolution from '../../PokemonEvolution/PokemonEvolution';
import { HP, ATTACK, DEFENSE, SP_ATTACK, SP_DEFENSE, SPEED } from '../../../helpers/pokemonBaseStats';

function Card({ item }) {

  const getWeight = (pokemon) => {
    const kg = pokemon.weight / 10
    const lbs = pokemon.weight / 5.22;
    return `${lbs.toFixed(1)} lbs (${Math.floor(kg).toFixed(1)} kg)`;
  }

  const getHeight = (pokemon) => {
    const meters = pokemon.height / 10
    const realFeet = (pokemon.height*3.28084);
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return `${inches}'${feet}" (${meters.toFixed(1)} m)`;
  }

  const getBaseStat = (pokemon, baseStat) => {
    return `${pokemon.stats[baseStat].base_stat}`
  }

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
            <p className='baseStat'>{getWeight(item)}</p>
          </div>
          <div className='Card__data Card__data--ability'>
            <p className='title'>Height:</p>
            <p className='baseStat'>{getHeight(item)}</p>
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
            <p className='baseStat'>{getBaseStat(item, HP)}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Attack:</p>
            <p className='baseStat'>{getBaseStat(item, ATTACK)}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Defense:</p>
            <p className='baseStat'>{getBaseStat(item, DEFENSE)}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Sp. Atc:</p>
            <p className='baseStat'>{getBaseStat(item, SP_ATTACK)}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Sp. Def:</p>
            <p className='baseStat'>{getBaseStat(item, SP_DEFENSE)}</p>
          </div>
          <div className='Card__data--baseStats'>
            <p className='title'>Speed:</p>
            <p className='baseStat'>{getBaseStat(item, SPEED)}</p>
          </div>
        </div>
        <PokemonInfo pokemon={item}/>
        <PokemonEvolution pokemon={item}/>
      </div>
    </div>
  );
}

export default Card;