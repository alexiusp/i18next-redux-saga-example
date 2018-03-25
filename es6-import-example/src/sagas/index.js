import { take, fork } from 'redux-saga/effects'
import {
  I18NEXT_CHANGE_LANGUAGE
} from 'i18next-redux-saga';


function* langWatcher() {
  try {
    while(true) {
      const action = yield take(I18NEXT_CHANGE_LANGUAGE);
      console.log('I see I18NEXT_CHANGE_LANGUAGE action', action);
      // you can do whatever you want regarding language change action here
    }
  } finally {
    console.log('langWatcher terminated')
  }
}

export default function* rootSaga() {
  yield fork(langWatcher)
}
