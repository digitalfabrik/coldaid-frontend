import store, { initialState } from './store'

export const resetState = state => initialState

export const setTestValue = (state, newValue) => ({ testvalue: newValue })

// async actions
export const loadData = async state => {
  store.setState({ isLoading: true })

  try {
    const res = await fetch(`someUrl`)
    const data = await res.json()

    return {
      dataInState: data,
      isLoading: false
    }
  } catch (err) {
    console.error(err)
  }
}
