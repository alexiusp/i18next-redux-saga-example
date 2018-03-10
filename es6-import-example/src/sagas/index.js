import { take, fork } from 'redux-saga/effects'
import { START } from '../constants/actionTypes';


function* initWatcher() {
  try {
    while(true) {
      const action = yield take(START);
      console.log('I see START action', action);
    }
  } finally {
    console.log('initWatcher terminated')
  }
}

export default function* rootSaga() {
  yield fork(initWatcher)
}
