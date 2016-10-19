import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../API';

function* worker(action) {
  //  1) create chapter 1
  //  2) create tale with reference to chapter 1

  const chapterToAdd = {
    text: action.tale.body,
    title: 'chapter 1',
    number: 1,
    author: '5802ccb0ba7b6e0dd2cdb0df',
    rating: 0,
  };
  const addedChapter = yield API.addOneChapter(chapterToAdd);

  const taleToAdd = {
    title: action.tale.title,
    author: addedChapter.author,
    chapters: [addedChapter._id.toString()],
    rating: 0,
  };

  const addedTale = yield API.addOneTale(taleToAdd);
  yield put(Actions.createTaleSuccess(addedTale));
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.CREATE_TALE, worker);
  }
}

export default watcher;
