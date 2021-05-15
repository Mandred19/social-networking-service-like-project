import React, {FC, ReactElement, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {createStyles, makeStyles, Theme} from '@material-ui/core';

import Preloader from '../../components/Preloader';
import PageTitle from '../../components/PageTitle';
import NewTweet from '../../components/NewTweet';
import NewsCard from './NewsCard';

import {fetchTweets, getAllTweets} from '../../store/tweets';
import {ITweet} from '../../store/tweets/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: '100%',
      display: 'flex',
      flexFlow: 'column nowrap',
    },
    list: {
      height: '100%',
    },
    preloader: {
      margin: '0 auto',
    },
  }),
);

const HomePageNewsLine: FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(getAllTweets);

  useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  const renderTweets = () => {
    return tweets.map((item: ITweet) => {
      return <NewsCard {...item} key={item._id}/>;
    });
  };

  return (
    <section className={classes.wrapper}>
      <PageTitle/>

      <NewTweet/>

      {tweets.length ? <div className={classes.list}>{renderTweets()}</div> : <Preloader/>}
    </section>
  );
};

export default HomePageNewsLine;
