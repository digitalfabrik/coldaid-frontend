import createStore from 'unistore'
import { LANGUAGE_LOCAL_STORAGE_KEY } from './actions'
import { DEFAULT_LANGUAGE } from '../components/navigation/languagePicker/LanguagePicker'

export const initialState = {
  language: localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) ?? DEFAULT_LANGUAGE.code,
  region: 'berlin',
  pendingRequests: 0,
  isLoading: false,
  shelters: [],
  adviceInformation: { data: null, loadingError: false },

}

const createUnistore = () => {
  return createStore(initialState)
}

const store = createUnistore()
export default store
