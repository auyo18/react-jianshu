const defaultState = {
  focus: false
}

export default (state = defaultState, action) => {
  const muState = Object.create(state)
  switch (action.type) {
    case 'CHANGE_FOCUS':
      muState.focus = !muState.focus
      return muState
    default:
      return state
  }
}
