import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ITweetsState, TWEETS_LOADING_STATE } from './types';

const tweetsState: ITweetsState = {
  tweets: [],
  loadingState: TWEETS_LOADING_STATE.EMPTY,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: tweetsState,
  reducers: {
    setLoadingState: (state: Draft<ITweetsState>, action: PayloadAction<any>) => {
      state.loadingState = action.payload;
    },
    setTweets: (state: Draft<ITweetsState>, action: PayloadAction<any>) => {
      state.tweets = action.payload;
    },
    fetchTweets: () => {
      //
    },
  },
});

export const { setLoadingState, setTweets, fetchTweets } = tweetsSlice.actions;

export default tweetsSlice.reducer;
