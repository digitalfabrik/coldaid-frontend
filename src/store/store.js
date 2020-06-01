import createStore from 'unistore'
import { LANGUAGE_LOCAL_STORAGE_KEY } from './actions'
import { DEFAULT_LANGUAGE } from '../components/navigation/languagePicker/LanguagePicker'

export const storeKeys = {
  language: 'language',
  region: 'region',
  isLoading: 'isLoading',
  shelters: 'shelters',
  adviceInformation: 'adviceInformation',
}

export const initialState = {
  [storeKeys.language]: localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) ?? DEFAULT_LANGUAGE.code,
  [storeKeys.region]: 'berlin',
  [storeKeys.isLoading]: false,
  [storeKeys.shelters]: { data: [], loadingError: false, pendingRequestsId: null, abortController: null },
  [storeKeys.adviceInformation]: { data: null, loadingError: false, pendingRequestsId: null, abortController: null },
}

const createUnistore = () => {
  return createStore(initialState)
}

const store = createUnistore()
export default store
