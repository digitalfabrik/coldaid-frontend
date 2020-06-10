import createStore from 'unistore'
import { LANGUAGE_LOCAL_STORAGE_KEY } from './actions'
import { DEFAULT_LANGUAGE } from '../components/navigation/languagePicker/LanguagePicker'

export const storeKeys = {
  language: 'language',
  region: 'region',
  isLoading: 'isLoading',
  shelters: 'shelters',
  adviceInformation: 'adviceInformation',
  healthRelatedInformation: 'healthRelatedInformation',
  legalInformation: 'legalInformation',
  kaeltebus: 'kaeltebus',
}

export const initialState = {
  [storeKeys.language]: localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) ?? DEFAULT_LANGUAGE.code,
  [storeKeys.region]: 'berlin',
  [storeKeys.isLoading]: false,
  [storeKeys.shelters]: { data: [], loadingError: false, pendingRequestsId: null, abortController: null },
  [storeKeys.adviceInformation]: { data: null, loadingError: false, pendingRequestsId: null, abortController: null },
  [storeKeys.healthRelatedInformation]: {
    data: null,
    loadingError: false,
    pendingRequestsId: null,
    abortController: null,
  },
  [storeKeys.legalInformation]: { data: null, loadingError: false, pendingRequestsId: null, abortController: null },
  [storeKeys.kaeltebus]: { requestSuccess: false, requestError: false, pendingRequestsId: null },
}

const createUnistore = () => {
  return createStore(initialState)
}

const store = createUnistore()
export default store
