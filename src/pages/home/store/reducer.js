import types from './types'
import {fromJS} from "immutable"

const defaultState = fromJS({
  list: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ARTICLE_LIST:
      return state.set('list', action.list)
    default:
      return state
  }
}
