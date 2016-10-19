import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../API';

function* worker() {
  const tales = yield API.getAllTales();
  yield put(Actions.getAllTalesSuccess(tales));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.GET_ALL_TALES, worker);
  }
}

export default watcher;
