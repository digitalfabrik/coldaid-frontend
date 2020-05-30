import store from './store'

export const LANGUAGE_LOCAL_STORAGE_KEY = 'language'
const BASE_API = 'http://130.149.22.44:8000/api'
const API = {
  shelters: 'accommodations/',
}
const requestIndex = 0

export const setLanguage = async (state, newValue) => {
  localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, newValue)
  return { language: newValue }
}

export const loadShelters = async state => {
  return await loadData(state, 'shelters', API.shelters)
}

export const loadAdviceInformation = async state => {
  // TODO switch from path to url if backend api is ready fore it
  return await loadData(state, 'adviceInformation', null, 'http://localhost:8000/api/augsburg/de-de/page/?url=augsburg/de-de/willkommen/kontakt-zu-app-team-augsburg')
}

export const createResetErrorState = storeKey => state => {
  updateLoadingState(storeKey, false, true)
}

async function loadData(state, storeKey, path, url) {
  updateLoadingState(storeKey, true)
  try {
    // const response = await fetch(url ?? `${BASE_API}/${state.region}/${state.language}/${path}`)
    // const data = await response.json()
    // const upToDateState = store.getState()

    throw Error('hallo')
    // store.setState({
    //   [storeKey]: { ...upToDateState[storeKey], data, loadingError: false }
    // })
  } catch (error) {
    console.log(error)
    const upToDateState = store.getState()
    if (!upToDateState[storeKey].isRequestPending) {
      store.setState({
        [storeKey]: { ...upToDateState[storeKey], loadingError: true }
      })
    }
  } finally {
    updateLoadingState(storeKey, false)
  }
}

const updateLoadingState = (storeKey, isRequestPending, resetError) => {
  console.log(resetError)
  let isLoading = isRequestPending
  const upToDateState = store.getState()
  console.log(resetError ? false : upToDateState[storeKey].loadingError)
  if (!isRequestPending) {
    for (let [key, storeItem] of Object.entries(upToDateState)) {
      if (key !== storeKey && storeItem.hasOwnProperty('isRequestPending')) {
        isLoading = isLoading || storeItem.isRequestPending
      }
    }
  }
  store.setState({
    isLoading: isLoading,
    [storeKey]: {
      ...upToDateState[storeKey],
      loadingError: resetError ? false : upToDateState[storeKey].loadingError,
      isRequestPending: isRequestPending,
    },
  })
}
