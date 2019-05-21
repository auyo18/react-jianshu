import types from './types'
import axios from "axios"

const actions = {
  initList() {
    return async dispatch => {
      let {data} = await axios.get('./data.json')
      dispatch({
        type: types.INIT_LIST,
        list: data.data
      })
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
  }
}

export default actions
