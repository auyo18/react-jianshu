import types from './types'
import {fromJS} from "immutable"

const defaultState = fromJS({
  list: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_ARTICLE_LIST:
      return state.set('list', fromJS(action.list))
    case types.GET_MORE_ARTICLE_LIST:
      console.log(fromJS(action.list))
      return state.set('list', state.get('list').concat(fromJS(action.list)))
    default:
      return state
  }
}
