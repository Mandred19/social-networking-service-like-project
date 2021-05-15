import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ITweet, TWEETS_LOADING_STATE} from './types';
import {RootState} from '../index';

const tweetsAdapter = createEntityAdapter<ITweet>({
  selectId: (item: ITweet): string => item._id || '',
});

const tweetsState = tweetsAdapter.getInitialState({
  loadingState: TWEETS_LOADING_STATE.EMPTY,
});

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: tweetsState,
  reducers: {
    setLoadingState: (state: RootState, action: PayloadAction<TWEETS_LOADING_STATE>): void => {
      state.loadingState = action.payload;
    },
    setTweets: (state: RootState, action: PayloadAction<ITweet[]>): void => {
      tweetsAdapter.upsertMany(state, action.payload);
    },
    fetchTweets: () => {
      //
    },
  },
});

export const {setLoadingState, setTweets, fetchTweets} = tweetsSlice.actions;

export const {selectAll: getAllTweets} = tweetsAdapter.getSelectors((state: RootState) => {
  return state.tweets;
});

export default tweetsSlice.reducer;
