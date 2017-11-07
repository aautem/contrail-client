import getInitialState from '../initial-state';
import { actions } from '../actions/app';

const initialState = getInitialState().app;

export default function reducer(state = initialState, action) {

  if (action.type === actions.SET_CONFIG) {
    return Object.assign({}, state, { config: action.payload });
  }
  
  if (action.type === actions.CHANGE_PAGE) {
    return Object.assign({}, state, { page: action.payload });
  }

  if (action.type === actions.LOADING) {
    return Object.assign({}, state, { loading: true, loaded: false, error: null });
  }

  if (action.type === actions.LOADED) {
    return Object.assign({}, state, { loading: false, loaded: true, error: null });
  }

  if (action.type === actions.ERROR) {
    return Object.assign({}, state, { loading: false, loaded: false, error: action.payload });
  }

  return state;
};