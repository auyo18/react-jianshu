import {fromJS} from "immutable"
import types from './types'
import {getArticleList} from "../../../api/article"

export const getArticle = () => {
  return async dispatch => {
    let {data} = await getArticleList()
    dispatch({
      type: types.GET_ARTICLE_LIST,
      list: fromJS(data)
    })
  }
}
