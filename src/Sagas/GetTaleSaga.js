import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../API';

function* worker(action) {
  const tale = yield API.getOneTale(action.taleId);
  yield put(Actions.getTaleSuccess(tale));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.GET_TALE, worker);
  }
}

export default watcher;
