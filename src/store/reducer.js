import types from './types'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let newState = {...state}
  switch (action.type) {
    case types.INIT_LIST:
      newState.list = action.list
      return newState
    case types.CHANGE_INPUT_VALUE:
      newState.inputValue = action.inputValue
      return newState
    case types.CHANG_LIST:
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case types.DELETE_TODO:
      newState.list.splice(action.index, 1)
      return newState
    default:
      return state
  }
}
