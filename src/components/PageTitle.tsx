import React, { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { createStyles, makeStyles, Paper, Typography } from '@material-ui/core';

import { navRouteList, navRouteItem } from '../helpers/navRouteList';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
    },
  }),
);

const PageTitle: FC = (): ReactElement => {
  const classes = useStyles();
  const route = useLocation();

  const pageTitle = (): navRouteItem | undefined => {
    return navRouteList.find((item: navRouteItem) => item.to === route.pathname);
  };

  return (
    <Paper className={classes.wrapper}>
      <Typography variant={'h5'}>{pageTitle()?.title}</Typography>
    </Paper>
  );
};

export default PageTitle;
