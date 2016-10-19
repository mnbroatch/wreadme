import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../API';

function* worker(action) {
  const removedTale = yield API.removeOneTale(action.taleId);
  yield put(Actions.removeTaleSuccess(removedTale));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.REMOVE_TALE, worker);
  }
}

export default watcher;
