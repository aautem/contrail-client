// import axios from 'axios';
import { createAction } from 'redux-actions';
import * as app from './app';

export const actions = {
  SET_USER: 'user/SET_USER',
  OPEN_MODAL: 'user/OPEN_MODAL',
  CLOSE_MODAL: 'user/CLOSE_MODAL',
  LOADING: 'user/LOADING',
  LOADED: 'user/LOADED',
  ERROR: 'user/ERROR',
};

export const setUser = createAction(actions.SET_USER, (payload) => payload);
export const openModal = createAction(actions.OPEN_MODAL);
export const closeModal = createAction(actions.CLOSE_MODAL);

const loading = createAction(actions.LOADING);
const loaded = createAction(actions.LOADED);
const error = createAction(actions.ERROR, (payload) => payload);