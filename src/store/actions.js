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
  // TODO switch from url to path if backend api is live
  return await loadData(
    state,
    storeKeys.adviceInformation,
    null,
    `${BASE_API}/augsburg/${state.language}/page/?url=augsburg/${state.language}/willkommen/kontakt-zu-app-team-augsburg`)
}

export const loadHealthRelatedInformation = async state => {
  // TODO switch from url to path if backend api is ready for it
  return await loadData(state,
    storeKeys.healthRelatedInformation,
    null,
    `${BASE_API}/augsburg/${state.language}/page/?url=augsburg/${state.language}/willkommen/uber-die-app-integreat-augsburg`)
}

export const loadLegalInformation = async state => {
  // TODO switch from url to path if backend api is ready for it
  return await loadData(state,
    storeKeys.legalInformation,
    null,
    `${BASE_API}/augsburg/${state.language}/page/?url=augsburg/${state.language}/willkommen/wissenswertes-uber-augsburg`)
}

