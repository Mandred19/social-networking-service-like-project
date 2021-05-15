import {configureStore, ConfigureStoreOptions, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import tweetsReducer from './tweets';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const options: ConfigureStoreOptions = {
  reducer: {
    tweets: tweetsReducer,
  },
  middleware: [...getDefaultMiddleware({thunk: false}), ...middlewares],
  devTools: process.env.NODE_ENV !== 'production',
};

const store = configureStore(options);

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
