import axios from 'axios';

import { ITweetsState } from '../../tweets/types';

export const TWEETS_API = {
  async loadAllTweets(): Promise<ITweetsState['tweets']> {
    const res = await axios.get('https://trycode.pw/c/ZZ15F.json');
    return res.data;
  },
};
