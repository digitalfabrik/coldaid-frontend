import store from './store'

export const LANGUAGE_LOCAL_STORAGE_KEY = 'language'
const BASE_API = 'http://130.149.22.44:8000/api'
const API = {
  shelters: 'accommodations/'
}

export const setLanguage = async (state, newValue) => {
  localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, newValue)
  return { language: newValue }
}

export const loadShelters = async state => {
  return await loadData(state, 'shelters', API.shelters)
}

export const loadAdviceInformation = async state => {
  // TODO switch from path to url if backend api is ready fore it
  return await loadData(state, 'adviceInformation', null, 'http://localhost:8000/api/augsburg/de-de/page/?url=augsburg/de-de/willkommen/kontakt-zu-app-team-augsburg' )
}

export const createResetErrorState = storeKey => state => {
  return { [storeKey]: { ...state[storeKey], loadingError: false }

  }
}

async function loadData(state, storeKey, path, url) {
  incrementPendingRequests()
  try {
    const response = await fetch(url ?? `${BASE_API}/${state.region}/${state.language}/${path}`)
    const data = await response.json()
    return { [storeKey]: { data, loadingError: false } }
  } catch (error) {
    const upToDateStateData = store.getState()[storeKey].data
    return { [storeKey]: { data: upToDateStateData, loadingError: true } }
  } finally {
    decrementPendingRequests()
  }
}



const incrementPendingRequests = () => {
  store.setState({
    pendingRequests: store.getState().pendingRequests + 1,
    isLoading: true,
  })
}

const decrementPendingRequests = () => {
  const newPendingRequests = store.getState().pendingRequests - 1
  if (newPendingRequests <= 0) {
    store.setState({
      pendingRequests: 0,
      isLoading: false,
    })
  } else {
    store.setState({ pendingRequests: newPendingRequests })
  }
}
