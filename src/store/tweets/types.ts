export enum TWEETS_LOADING_STATE {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  EMPTY = 'EMPTY',
}

export interface ITweet {
  _id?: string;
  text: string;
  user: {
    fullName: string;
    login: string;
    avatarUrl: string;
  };
  mediaUrl: string;
}

export interface ITweetsState {
  tweets: ITweet[];
  loadingState: TWEETS_LOADING_STATE;
}
