import {call, put, takeEvery} from 'redux-saga/effects';

import {TWEETS_API} from '../../service/api/tweetsApi';
import {TWEETS_LOADING_STATE} from '../../tweets/types';
import {fetchTweets, setLoadingState, setTweets} from '../../tweets';

function* fetchTweetsRequest(): any {
  try {
    yield put(setLoadingState(TWEETS_LOADING_STATE.PENDING));
    const response = yield call(TWEETS_API.loadAllTweets);
    yield put(setTweets(response));
    yield put(setLoadingState(TWEETS_LOADING_STATE.SUCCESS));
  } catch (e) {
    yield put(setLoadingState(TWEETS_LOADING_STATE.FAILED));
  }
}

export function* tweetsSaga() {
  yield takeEvery(fetchTweets().type, fetchTweetsRequest);
}
