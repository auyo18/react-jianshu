import request from '../utils/request'

export function getArticleList() {
  return request({
    url: '/articleList.json',
    method: 'get'
  })
}

export function getMoreArticleList() {
  return request({
    url: '/moreArticleList.json',
    method: 'get'
  })
}
