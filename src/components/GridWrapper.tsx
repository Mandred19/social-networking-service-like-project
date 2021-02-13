import React, { PropsWithChildren, ReactElement } from 'react';

import { createStyles, Grid, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: '100%',
      flex: 1,
    },
  }),
);

const GridWrapper = ({ FirstColumn, SecondColumn, ThirdColumn }: PropsWithChildren<any>): ReactElement => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container className={classes.container}>
        <Grid item xl={3} lg={2} className={classes.container}>
          <FirstColumn />
        </Grid>

        <Grid item xl={5} lg={6} className={classes.container}>
          <SecondColumn />
        </Grid>

        <Grid item xl={4} lg={4} className={classes.container}>
          <ThirdColumn />
        </Grid>
      </Grid>
    </Container>
  );
};

export default GridWrapper;
