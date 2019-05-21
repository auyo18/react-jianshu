import {getHotQuery} from "../../../api/search"
import types from './actionTypes'

export function getHotQueryAction() {
  return async dispatch => {
    let {data} = await getHotQuery()
    dispatch({
      type: types.SET_HOT_QUERY,
      list: data
    })
  }
}

export function getChangePageAction() {
  return {
    type: types.CHANGE_PAGE
  }
}
