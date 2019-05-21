import types from './types'

const actions = {
  changeValue(value) {
    return {
      type: types.CHANGE_VALUE,
      value
    }
  },
  setList() {
    return {
      type: types.SET_LIST
    }
  },
  deleteTodo(index) {
    return {
      type: types.DELETE_TODO,
      index
    }
  }
}

export default actions
