import React, {FC, ReactElement} from 'react';

import {createStyles, makeStyles, Theme} from '@material-ui/core';

import Search from '../Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexFlow: 'column nowrap',
      borderLeft: '1px solid #999',
      height: '100%',
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(2),
      '& > *': {
        '&:not(:last-child)': {
          marginBottom: theme.spacing(1),
        },
      },
    },
  }),
);

const SupportingBlock: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <Search/>
    </section>
  );
};

export default SupportingBlock;
