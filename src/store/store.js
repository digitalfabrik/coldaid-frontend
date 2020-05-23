import createStore from 'unistore'
import devtools from 'unistore/devtools'

export const initialState = {
  testvalue: 1
}

const createUnistore = () => {
  const store = devtools(createStore(initialState))

  // store.subscribe(state => console.log(state)) // log on every state update
  return store
}

const store = createUnistore()
export default store
