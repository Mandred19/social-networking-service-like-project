import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import PageTitle from '../../components/PageTitle';
import NewsCard from './NewsCard';

import theme from '../../theme';
import { fetchTweets } from '../../store/tweets';
import { ITweet, ITweetsState } from '../../store/tweets/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: '100%',
    },
  }),
);

const HomePageNewsLine: FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tweets = useSelector((state: ITweetsState) => state.tweets); // TODO Разобраться с использованием селектора

  useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  const renderTweets = () => {
    return tweets.tweets.map((item: ITweet) => {
      return <NewsCard {...item} key={item._id} />;
    });
  };

  return (
    <section className={classes.wrapper}>
      <PageTitle />

      {renderTweets()}
    </section>
  );
};

export default HomePageNewsLine;
