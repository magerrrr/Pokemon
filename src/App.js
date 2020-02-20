import React, { useState, useEffect } from 'react';
import { fetchItemsFromServer } from './services/pokemon';
import NavBar from './components/Navbar';
import Selector from './components/Selector/Selector';
import ButtonWithTitle from './components/ButtonWithTitle/ButtonWithTitle';
import Pagination from './components/Pagination/Pagination';
import CardsContainer from './components/CardsContainer/CardsContainer';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [isLoading, setLoading] = useState(true);
  const INITIAL_URL = 'https://pokeapi.co/api/v2/pokemon';
  const ALL_ITEMS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=964';
  
  useEffect(() => {
    async function fetchData() {
      let response = await fetchItemsFromServer(INITIAL_URL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await getPokemons(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const showAllItems = async () => {
    setLoading(true);
    let data = await fetchItemsFromServer(ALL_ITEMS_URL);
    await getPokemons(data.results);
    setLoading(false);
  }

  const filterItemsByType = async (url) => {
    setLoading(true);
    let data = await fetchItemsFromServer(url);
    await getPokemonsByType(data.pokemon);
    setLoading(false);
  }

  const getNextItems = async () => {
    setLoading(true);
    let data = await fetchItemsFromServer(nextUrl);
    await getPokemons(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const getPrevItems = async () => {
    if (!prevUrl) return;

    setLoading(true);
    let data = await fetchItemsFromServer(prevUrl);
    await getPokemons(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const getPokemons = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await fetchItemsFromServer(pokemon.url);
        return pokemonRecord;
      })
    );
    setItems(_pokemonData);
  };

  const getPokemonsByType = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async element => {
        let pokemonRecord = await fetchItemsFromServer(element.pokemon.url);
        return pokemonRecord;
      })
    );
    setItems(_pokemonData);
  };

  return (
    <div className='App'>
      <NavBar />
      <ButtonWithTitle 
        title='You can see ALL Pokemons! Click here:'
        buttonText='Get all Pokemons!'
        clickHandler={showAllItems}
      />
      <Selector onChangeHandler={filterItemsByType}/>
      <Pagination prev={getPrevItems} next={getNextItems} loading={isLoading}/>
      <CardsContainer loading={isLoading} cardsDataArray={items} />
      <Pagination prev={getPrevItems} next={getNextItems} loading={isLoading}/>
    </div>
  );
}

export default App;