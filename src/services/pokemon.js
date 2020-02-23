import { setLoading, setNextUrl, setPrevUrl, setItems, setEvolutionChain } from '../actions';
import { POKEMON_SPECIES } from '../helpers/urls';

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
    dispatch(setLoading(true));
    fetchItemsFromServer(url)
      .then(data => {
        return getPokemonsByType(data.pokemon)
      })
      .then(data => {
        return dispatch(setItems(data))
      })
      .then(() => dispatch(setLoading(false)))
  }
}

export const getEvolutionChain = (id) => {
  return (dispatch) => {
    fetchItemsFromServer(POKEMON_SPECIES + id)
    .then(data => {
      return fetchItemsFromServer(data.evolution_chain.url)
    })
    .then(data => {
      const evolutionChain = [
        data.chain.species,
        data.chain.evolves_to[0].species,
        data.chain.evolves_to[0].evolves_to[0].species
      ]
      return Promise.all([
        fetchItemsFromServer(evolutionChain[0].url),
        fetchItemsFromServer(evolutionChain[1].url),
        fetchItemsFromServer(evolutionChain[2].url)
      ])
    })
    .then((data) => dispatch(setEvolutionChain(data)))
  }
}

export const getItemsPart = (url) => {
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

export const getMoves = (pokemon) => {
  return pokemon.moves.map(move => move.move.name
    .toLowerCase()
    .split('-')
    .map(subStr => `${subStr[0].toUpperCase()}${subStr.slice(1)}`)
    .join(' '));
}
