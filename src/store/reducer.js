import types from './types'

const defaultState = {
  value: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case types.CHANGE_VALUE:
      newState.value = action.value
      return newState
    case types.SET_LIST:
      newState.list.unshift(newState.value)
      newState.value = ''
      return newState
    case types.DELETE_TODO:
      newState.list.splice(action.index, 1)
      return newState
    default:
      return state
  }
}
