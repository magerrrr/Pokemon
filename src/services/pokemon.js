import { setLoading, setNextUrl, setPrevUrl, setItems } from '../actions';

export async function fetchItemsFromServer(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export const showAllItems = (url) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    fetchItemsFromServer(url)
      .then(data => {
        dispatch(setNextUrl(data.next));
        dispatch(setPrevUrl(data.previous));
        return getPokemons(data.results)
      })
      .then(data => {
        dispatch(setItems(data))
      })
      .then(() => dispatch(setLoading(false)))
  }
}

export const filterItemsByType = (url) => {
  return (dispatch) => {
    console.log(url);
    dispatch(setLoading(true));
    fetchItemsFromServer(url)
      .then(data => {
        console.log(data);
        return getPokemonsByType(data.pokemon)
      })
      .then(data => {
        console.log(data);
        return dispatch(setItems(data))
      })
      .then(() => dispatch(setLoading(false)))
  }
}

export const getItemsPart = (url) => {
  console.log(url);
  if (!url) return;
  return (dispatch) => {
    dispatch(setLoading(false));
    fetchItemsFromServer(url)
      .then(data => {
        dispatch(setNextUrl(data.next));
        dispatch(setPrevUrl(data.previous));
        return getPokemons(data.results);
      })
      .then((data) => dispatch(setItems(data)))
      .then(() => dispatch(setLoading(false)))
  }
}

export const getPokemons = (pokemons) => {
  let _pokemonData = Promise.all(pokemons.map(async pokemonItem => {
    const pokemonRecord = await fetchItemsFromServer(pokemonItem.url);
    return pokemonRecord;
  }));
  return _pokemonData;
}

export const getPokemonsByType = (data) => {
  const _pokemonData = Promise.all(data.map(async element => {
    const pokemonRecord = await fetchItemsFromServer(element.pokemon.url);
    return pokemonRecord;
  }));
  return _pokemonData;
}

export const getMoves = (pokemon) => {
  return pokemon.moves.map(move => move.move.name.toUpperCase());
}