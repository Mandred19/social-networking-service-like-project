import React, { FC, ReactElement } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import theme from '../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      borderLeft: '1px solid #999',
      height: '100%',
    },
  }),
);

const SupportingBlock: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <div>SupportingBlock</div>
    </section>
  );
};

export default SupportingBlock;
