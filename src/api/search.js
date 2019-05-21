import request from '../utils/request'

export function getHotQuery() {
  return request({
    url: '/hotQuery.json',
    method: 'get'
  })
}
