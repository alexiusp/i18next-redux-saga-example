import {
  I18NEXT_INIT,
  I18NEXT_READY
} from 'i18next-redux-saga';

const initState = {
  loading: 0,
};

export default function appReducer(state = initState, action) {
  const { type } = action;
  switch (type) {
    case I18NEXT_INIT:
      return {
        ...state,
        loading: state.loading + 1,
      };
    case I18NEXT_READY:
    return {
      ...state,
      loading: state.loading - 1,
    };
    default:
    return state;
}
}
