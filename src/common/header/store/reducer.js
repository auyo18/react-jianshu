import types from './actionTypes'

const defaultState = {
  hotQueryList: [],
  count: 10,
  page: 0
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case types.SET_HOT_QUERY:
      newState.hotQueryList = action.list
      return newState
    case types.CHANGE_PAGE:
      newState.page = (newState.page + 1) % 4
      return newState
    default:
      return state
  }
}
