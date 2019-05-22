import types from './types'
import {getArticleList,getMoreArticleList} from "../../../api/article"

export const getArticle = () => {
  return async dispatch => {
    let {data} = await getArticleList()
    dispatch({
      type: types.GET_ARTICLE_LIST,
      list: data
    })
  }
}

export const getMoreArticle = () => {
  return async dispatch => {
    let {data} = await getMoreArticleList()
    dispatch({
      type: types.GET_MORE_ARTICLE_LIST,
      list: data
    })
  }
}
