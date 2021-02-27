import React, { FC, ReactElement } from 'react';

import { CircularProgress, createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(2),
      margin: '0 auto',
    },
  }),
);

const Preloader: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <CircularProgress color={'primary'} />
    </section>
  );
};

export default Preloader;
