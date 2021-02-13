import React, { FC, ReactElement } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import PageTitle from '../../components/PageTitle';
import NewsCard from './NewsCard';

import theme from '../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: '100%',
    },
  }),
);

const HomePageNewsLine: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <PageTitle />

      <NewsCard />
    </section>
  );
};

export default HomePageNewsLine;
