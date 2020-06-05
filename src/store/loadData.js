import store from './store'
import { BASE_API } from './actions'

let requestIdCounter = 0

export async function loadData(state, storeKey, path, url) {
  const pendingRequestId = state[storeKey].pendingRequestsId
  const requestId = requestIdCounter++
  setPendingRequestId(storeKey, requestId)
  updateLoadingState()
  if (pendingRequestId !== null) {
    abortPendingRequest(storeKey)
  }
  setNewAbortController(storeKey)
  try {
    const data = await getData(storeKey, path, url)
    setData(storeKey, data, requestId)
  } catch (error) {
    if (error.name === 'AbortError') {
      resetOnAbort(storeKey, requestId)
    } else {
      setError(storeKey, requestId)
    }
  } finally {
    updateLoadingState()
  }
}

const setPendingRequestId = (storeKey, requestId) => {
  const state = store.getState()
  store.setState({
    [storeKey]: {
      ...state[storeKey],
      pendingRequestsId: requestId,
    },
  })
}

const setNewAbortController = (storeKey) => {
  const state = store.getState()
  store.setState({
    [storeKey]: {
      ...state[storeKey],
      abortController: new AbortController(),
    },
  })
}

const getData = async (storeKey, path, url) => {
  const state = store.getState()
  const response = await fetch(
    url ?? `${BASE_API}/${state.region}/${state.language}/${path}`,
    { signal: state[storeKey].abortController.signal })
  return await response.json()
}

const setData = (storeKey, data, requestId) => {
  const state = store.getState()
  const pendingRequestId = state[storeKey].pendingRequestsId
  store.setState({
    [storeKey]: {
      ...state[storeKey],
      data: data,
      loadingError: false,
      pendingRequestsId: pendingRequestId !== requestId ? pendingRequestId : null,
    },
  })
}

const setError = (storeKey, requestId) => {
  const state = store.getState()
  const pendingRequestId = state[storeKey].pendingRequestsId
  store.setState({
    [storeKey]: {
      ...state[storeKey],
      loadingError: true,
      pendingRequestsId: pendingRequestId !== requestId ? pendingRequestId : null,
    },
  })
}

const resetOnAbort = (storeKey, requestId) => {
  const state = store.getState()
  const pendingRequestId = state[storeKey].pendingRequestsId
  store.setState({
    [storeKey]: {
      ...state[storeKey],
      loadingError: false,
      pendingRequestsId: pendingRequestId !== requestId ? pendingRequestId : null,
    },
  })
}

const updateLoadingState = () => {
  const state = store.getState()
  let isLoading = false
  for (let [_, storeItem] of Object.entries(state)) {
    if (storeItem.hasOwnProperty('pendingRequestsId')) {
      isLoading = isLoading || storeItem.pendingRequestsId !== null
    }
  }
  store.setState({
    isLoading: isLoading,
  })
}

export const resetRequest = (storeKey) => {
  abortPendingRequest(storeKey)
  resetLoadingError(storeKey)
}

const resetLoadingError = (storeKey) => {
  const state = store.getState()
  store.setState({
    [storeKey]: {
      ...state[storeKey],
      loadingError: false
    }
  })
}

const abortPendingRequest = storeKey => {
  const state = store.getState()
  state[storeKey].abortController.abort()
}
