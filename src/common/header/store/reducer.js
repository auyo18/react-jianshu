import types from './actionTypes'

const defaultState = {
  hotQueryList: []
}

export default (state = defaultState, action) => {
  const muState = {...state}
  switch (action.type) {
    case types.SET_HOT_QUERY:
      console.log(action)
      return muState
    default:
      return state
  }
}
