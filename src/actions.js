import {
  SET_LOADING,
  SET_NEXT_URL,
  SET_PREV_URL,
  SET_ITEMS,
  SET_EVOLUTION_CHAIN
} from "./helpers/actionsTypes"

export function setLoading(boolean) {
  return {
    type: SET_LOADING,
    payload: boolean
  }
}

export function setNextUrl(url) {
  return {
    type: SET_NEXT_URL,
    payload: url
  }
}

export function setPrevUrl(url) {
  return {
    type: SET_PREV_URL,
    payload: url
  }
}

export function setItems(itemsArray) {
  return {
    type: SET_ITEMS,
    payload: itemsArray,
  }
}

export function setEvolutionChain(evolution) {
  return {
    type: SET_EVOLUTION_CHAIN,
    payload: evolution,
  }
}