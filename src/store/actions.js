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

async function loadData(state, storeKey, path) {
  incrementPendingRequests()
  try {
    const response = await fetch(`${BASE_API}/${state.region}/${state.language}/${path}`)
    const data = await response.json()
    return { [storeKey]: data }
  } catch (error) {
    console.error(error)
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
