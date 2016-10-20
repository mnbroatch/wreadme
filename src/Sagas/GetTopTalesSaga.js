import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import API from '../API';

function* worker() {
  const talesWithoutSnippets = yield API.getTopTales();
  const tales = yield addSnippetsToTales(talesWithoutSnippets);
  console.log('tales', tales)
  yield put(Actions.getTopTalesSuccess(tales));
}

function addSnippetToOneTale(tale) {
  return API.getSnippet(tale._id)
    .then(snippet => Object.assign({}, tale, {snippet}));
}

function addSnippetsToTales(taleArray) {
  let snippetPromiseArray = taleArray.map(addSnippetToOneTale);
  return Promise.all(snippetPromiseArray);
}

function* watcher() {
  for (;;) {
    yield* takeEvery(Types.GET_TOP_TALES, worker);
  }
}

export default watcher;
