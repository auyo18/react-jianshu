import {getHotQuery} from "../../../api/search"
import types from './actionTypes'

export async function getHotQueryAction() {
  let {data} = await getHotQuery()
  return {
    type: types.SET_HOT_QUERY,
    list: data
  }
}
