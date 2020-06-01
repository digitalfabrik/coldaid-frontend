import { loadData } from './loadData'
import { storeKeys } from './store'

export const LANGUAGE_LOCAL_STORAGE_KEY = 'language'
export const BASE_API = 'http://130.149.22.44:8000/api'
const API = {
  shelters: 'accommodations/',
}

export const setLanguage = async (state, newValue) => {
  localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, newValue)
  return { [storeKeys.language]: newValue }
}

export const loadShelters = async state => {
  return await loadData(state, storeKeys.shelters, API.shelters)
}

export const loadAdviceInformation = async state => {
  // TODO switch from path to url if backend api is live
  return await loadData(
    state,
    storeKeys.adviceInformation,
    null,
    `http://localhost:8000/api/augsburg/${state.language}/page/?url=augsburg/${state.language}/willkommen/kontakt-zu-app-team-augsburg`)
}
