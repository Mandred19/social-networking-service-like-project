import {all} from 'redux-saga/effects';
import {tweetsSaga} from './tweetsSaga';

export default function* rootSaga() {
  yield all([tweetsSaga()]);
}
