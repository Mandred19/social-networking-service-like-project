import React from 'react';

import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
  },
  infoBlock: {
    padding: 8,
    flex: 1,
  },
  actionsBlock: {
    padding: 8,
    flex: 1,
  },
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Authorization = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <section className={classes.infoBlock}>
        <ul>
          <li>Follow your interests.</li>
          <li>Hear what people are talking about.</li>
          <li>Join the conversation.</li>
        </ul>
      </section>

      <section className={classes.actionsBlock}>
        <Typography variant={'h4'}>See what’s happening in the world right now</Typography>

        <Typography variant={'body1'}>Join Twitter today.</Typography>

        <Button>Sign up</Button>

        <Button>Log in</Button>
      </section>
    </section>
  );
};

export default Authorization;
