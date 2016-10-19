import { fork } from 'redux-saga/effects';
import Startup from './StartupSaga';
import GetTopTales from './GetTopTalesSaga';
import CreateTale from './CreateTaleSaga';
import EditTale from './EditTaleSaga';
import RemoveTale from './RemoveTaleSaga';

export default function* rootSaga() {
  yield fork(Startup);
  yield fork(GetTopTales);
  yield fork(CreateTale);
  yield fork(EditTale);
  yield fork(RemoveTale);
}
