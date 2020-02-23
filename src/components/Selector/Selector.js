import React from 'react';
import './style.css';
import typeName from '../../helpers/selectorValues';

function Selector({onChangeHandler}) {
  return(
    <>
      <h3 className='filterTitle'>Filter Pokemons by Type:</h3>
      <div className='filter'>
        <select onChange={(e) => onChangeHandler(e.target.value)} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>Choose a type ...</option>
          <option value={typeName.normal}>Normal</option>
          <option value={typeName.fighting}>Fighting</option>
          <option value={typeName.flying}>Flying</option>
          <option value={typeName.poison}>Poison</option>
          <option value={typeName.ground}>Ground</option>
          <option value={typeName.rock}>Rock</option>
          <option value={typeName.bug}>Bug</option>
          <option value={typeName.ghost}>Ghost</option>
          <option value={typeName.steel}>Steel</option>
          <option value={typeName.fire}>Fire</option>
          <option value={typeName.water}>Water</option>
          <option value={typeName.grass}>Grass</option>
          <option value={typeName.electric}>Electric</option>
          <option value={typeName.pyschic}>Pyschic</option>
          <option value={typeName.ice}>Ice</option>
          <option value={typeName.dragon}>Dragon</option>
          <option value={typeName.dark}>Dark</option>
          <option value={typeName.fairy}>Fairy</option>
        </select>
      </div>
    </>
  )
}

export default Selector;