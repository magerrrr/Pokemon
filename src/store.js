import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import {
  SET_ITEMS,
  SET_NEXT_URL,
  SET_PREV_URL,
  SET_LOADING,
  SET_EVOLUTION_CHAIN
} from './helpers/actionsTypes';

const initialState = {
  items: [],
  nextUrl: '',
  prevUrl: '',
  isLoading: false,
  evolutionChain: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state, items: [...action.payload]
      };
    case SET_NEXT_URL:
      return {
        ...state, nextUrl: action.payload
      };
    case SET_PREV_URL:
      return {
        ...state, prevUrl: action.payload
      };
    case SET_LOADING:
      return {
        ...state, isLoading: action.payload
      };
    case SET_EVOLUTION_CHAIN:
      return {
        ...state, evolutionChain: [...action.payload]
      }
      default:
        return state;
  }
};

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
);

export default store;