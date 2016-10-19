import { combineReducers } from 'redux';
import tales from './TaleReducer';

const appReducer = combineReducers({
  tales,
});

const rootReducer = (state, action) =>
  appReducer(state, action);


export default rootReducer;
