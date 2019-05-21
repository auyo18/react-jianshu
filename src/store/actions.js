import types from './types'

const actions = {
  initList(data) {
    return {
      type: types.INIT_LIST,
      list: data
    }
  },
  changeInputValue(inputValue) {
    return {
      type: types.CHANGE_INPUT_VALUE,
      inputValue
    }
  },
  changeList() {
    return {
      type: types.CHANG_LIST
    }
  },
  deleteTodo(index) {
    return {
      type: types.DELETE_TODO,
      index
    }
  },
  sagas() {
    return {
      type: types.SAGAS
    }
  }
}

export default actions
