import { fork } from 'redux-saga/effects';
import Startup from './StartupSaga';
import GetTopTales from './GetTopTalesSaga';
import GetTale from './GetTaleSaga';
import CreateTale from './CreateTaleSaga';
import EditTale from './EditTaleSaga';
import RemoveTale from './RemoveTaleSaga';

export default function* rootSaga() {
  yield fork(Startup);
  yield fork(GetTopTales);
  yield fork(GetTale);
  yield fork(CreateTale);
  yield fork(EditTale);
  yield fork(RemoveTale);
}
