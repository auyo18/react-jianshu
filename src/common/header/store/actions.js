import {getHotQuery} from "../../../api/search"
import {fromJS} from 'immutable'
import types from './types'

export function getHotQueryAction() {
  return async dispatch => {
    let {data} = await getHotQuery()
    dispatch({
      type: types.SET_HOT_QUERY,
      list: fromJS(data)
    })
  }
}

export function getChangePageAction() {
  return {
    type: types.CHANGE_PAGE
  }
}
