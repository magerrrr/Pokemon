import React, { useEffect } from 'react';
import { showAllItems, filterItemsByType, getItemsPart } from './services/pokemon';
import NavBar from './components/Navbar';
import Selector from './components/Selector/Selector';
import ButtonWithTitle from './components/ButtonWithTitle/ButtonWithTitle';
import Pagination from './components/Pagination/Pagination';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { connect } from 'react-redux';
import { INITIAL_URL, ALL_ITEMS_URL } from './helpers/urls';
import './App.css';

function App({ state, showAllItems, filterItemsByType, getItemsPart }) {
  useEffect(() => showAllItems(INITIAL_URL), [showAllItems]);

  return (
    <div className='App'>
      <NavBar />
      <ButtonWithTitle 
        title='You can see ALL Pokemons! Click here:'
        buttonText='Get all Pokemons!'
        clickHandler={() => showAllItems(ALL_ITEMS_URL)}
      />
      <Selector onChangeHandler={filterItemsByType}/>
      <Pagination />
      <CardsContainer loading={state.isLoading} cardsDataArray={state.items} />
      <Pagination />
    </div>
  );
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = {
  showAllItems,
  filterItemsByType,
  getItemsPart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);