import Types from '../Actions/Types';

const INITIAL_STATE = {
  allTales: [],
  topTales: [],
};

const getAllTalesSuccess = (state, action) =>
  Object.assign({}, state, {
    allTales: action.tales,
  });

const getTopTalesSuccess = (state, action) =>
  Object.assign({}, state, {
    topTales: action.tales,
  });

const createTaleSuccess = (state, action) =>
  Object.assign({}, state, {
    allTales: state.allTales.concat(action.tale),
  });

const editTaleSuccess = (state, action) => {
  const newState = state.allTales.slice();
  const index = state.allTales.findIndex(el => el._id === action.tale._id);
  newState[index] = action.tale;
  return Object.assign({}, state, {
    allTales: newState,
  })
};

const removeTaleSuccess = (state, action) =>
  Object.assign({}, state, {
    allTales: state.allTales.filter(el => el._id !== action.tale._id),
  });

const ACTION_HANDLERS = {
  [Types.GET_ALL_TALES_SUCCESS]: getAllTalesSuccess,
  [Types.GET_TOP_TALES_SUCCESS]: getTopTalesSuccess,
  [Types.CREATE_TALE_SUCCESS]: createTaleSuccess,
  [Types.EDIT_TALE_SUCCESS]: editTaleSuccess,
  [Types.REMOVE_TALE_SUCCESS]: removeTaleSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);


function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
