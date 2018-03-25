import {
  I18NEXT_INIT,
  I18NEXT_READY,
  I18NEXT_CHANGE_LANGUAGE,
  I18NEXT_CHANGE_LANGUAGE_READY
} from 'i18next-redux-saga';

import { defaultLanguage } from '../constants/globals';

const initState = {
  loading: 0,
  lang: defaultLanguage,
};

export default function appReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case I18NEXT_INIT:
      return {
        ...state,
        loading: state.loading + 1,
      };
    case I18NEXT_READY:
    case I18NEXT_CHANGE_LANGUAGE_READY:
      return {
        ...state,
        loading: state.loading - 1,
      };
    case I18NEXT_CHANGE_LANGUAGE:
      return {
        ...state,
        loading: state.loading + 1,
        lang: payload || defaultLanguage,
      };
    default:
      return state;
  }
}
