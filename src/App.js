import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import NavBar from './components/Navbar';
import CardsContainer from './components/CardsContainer/CardsContainer';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
  const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=964';
  
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, []);

  const showAllPokemons = async () => {
    setLoading(true);
    let data = await getAllPokemon(allPokemonsUrl);
    await loadingPokemon(data.results);
    setLoading(false);
  }

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;

    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  return (
    <>
    <NavBar />
    <div className='btn'>
      <button onClick={showAllPokemons}>Get all Pokemons</button>
    </div>
    <div className='btn'>
      <button onClick={prev}>Previous 20 items</button>
      <button onClick={next}>Next 20 items</button>
    </div>
    <div>
      {loading ? (
        <h1 className='loader'>Loading... Please wait</h1>
        ) : (
          <>
            <div className='grid-container'>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
          </>
        )}
    </div>
    <div className='btn'>
      <button onClick={prev}>Previous 20 items</button>
      <button onClick={next}>Next 20 items</button>
    </div>
    </>
  );
}

export default App;