import types from './types'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  hotQueryList: [],
  count: 10,
  page: 0,
  totalPage: 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_HOT_QUERY:
      let totalPage = Math.ceil(action.list.size / state.get('count'))
      return state.set('hotQueryList', action.list).set('totalPage', totalPage)
    case types.CHANGE_PAGE:
      let page = (state.get('page') + 1) % state.get('totalPage')
      return state.set('page', page)
    default:
      return state
  }
}
