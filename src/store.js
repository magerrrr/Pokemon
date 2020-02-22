import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const initialState = {
  items: [],
  nextUrl: '',
  prevUrl: '',
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      console.log('in REDUCER I have: ', action.payload);
      return {
        ...state, items: [...action.payload]
      };
    case 'SET_NEXT_URL':
      return {
        ...state, nextUrl: action.payload
      };
    case 'SET_PREV_URL':
      return {
        ...state, prevUrl: action.payload
      };
    case 'SET_LOADING':
      console.log('setLoading', action.payload);
      return {
        ...state, isLoading: action.payload
      };
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