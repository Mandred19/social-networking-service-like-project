import React, { FC, ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { createStyles, makeStyles, Typography } from '@material-ui/core';

import { navRouteList, navRouteItem } from '../helpers/navRouteList';

import theme from '../theme';

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      borderBottom: '1px solid #999',
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
    <section className={classes.wrapper}>
      <Typography variant={'h5'}>{pageTitle()?.title}</Typography>
    </section>
  );
};

export default PageTitle;
