import React, { FC, ReactElement } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import theme from '../../theme';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const HomePageNewsLine: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <section>
      <div>HomePageNewsLine</div>
    </section>
  );
};

export default HomePageNewsLine;
