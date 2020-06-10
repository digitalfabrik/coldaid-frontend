import { loadData, updateLoadingState } from './loadData'
import store, { storeKeys } from './store'
import axios from 'axios'

export const LANGUAGE_LOCAL_STORAGE_KEY = 'language'
export const BASE_API = 'http://130.149.22.44:8000/api'
const API = {
  shelters: 'accommodations/',
  kaeltebusRequest: 'requests/new/',
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
    `http://localhost:8000/api/augsburg/${state.language}/page/?url=augsburg/${state.language}/willkommen/kontakt-zu-app-team-augsburg`)
}

export const loadHealthRelatedInformation = async state => {
  // TODO switch from url to path if backend api is ready for it
  return await loadData(state,
    storeKeys.healthRelatedInformation,
    null,
    `http://localhost:8000/api/augsburg/${state.language}/page/?url=augsburg/${state.language}/willkommen/uber-die-app-integreat-augsburg`)
}

export const loadLegalInformation = async state => {
  // TODO switch from url to path if backend api is ready for it
  return await loadData(state,
    storeKeys.legalInformation,
    null,
    `http://localhost:8000/api/augsburg/${state.language}/page/?url=augsburg/${state.language}/willkommen/wissenswertes-uber-augsburg`)
}

export const requestKaeltebus = async (state, data) => {
  store.setState({
    [storeKeys.kaeltebus]: {
      ...state[storeKeys.kaeltebus],
      pendingRequestsId: 'kaeltebusRequest',
      requestError: false,
      requestSuccess: false,
    },
  })
  updateLoadingState()
  try {
    await axios.post(`http://localhost:8000/api/${API.kaeltebusRequest}`, { data: JSON.stringify(data) })
    const upToDateState = store.getState()
    store.setState({
      [storeKeys.kaeltebus]: { ...upToDateState[storeKeys.kaeltebus], requestSuccess: true, pendingRequestsId: null },
    })
  } catch (error) {
    const upToDateState = store.getState()
    store.setState({
      [storeKeys.kaeltebus]: { ...upToDateState[storeKeys.kaeltebus], requestError: true, pendingRequestsId: null },
    })
  } finally {
    updateLoadingState()
  }
}

