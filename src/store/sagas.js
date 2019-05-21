import {put, takeEvery} from 'redux-saga/effects'
import axios from "axios"
import types from './types'
import actions from './actions'

function* mySaga() {
  yield takeEvery(types.SAGAS, getData)
}

function* getData() {
  let {data} = yield axios.get('./data.json')
  yield put(actions.initList(data.data))
}

export default mySaga
