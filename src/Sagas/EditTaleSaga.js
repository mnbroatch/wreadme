import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import API from '../API';
import Actions from '../Actions/Creators';
import Types from '../Actions/Types';

function* worker(action) {
  const newTale = yield API.editOneTale(action.editedTale);
  yield put(Actions.editTaleSuccess(newTale));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.EDIT_TALE, worker);
  }
}

export default watcher;
