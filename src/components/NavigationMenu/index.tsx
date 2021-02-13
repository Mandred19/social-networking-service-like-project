import React, { FC, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';

import { navRouteList, navRouteItem } from '../../helpers/navRouteList';

import theme from '../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexFlow: 'column nowrap',
      borderRight: '1px solid #999',
      height: '100%',
    },
    button: {},
  }),
);

const renderNavRouteList = () => {
  const classes = useStyles();
  const route = useLocation();

  return navRouteList.map((item: navRouteItem) => {
    return (
      <Link to={item.to} key={item.id}>
        <Button variant={'text'} color={route.pathname === item.to ? 'primary' : 'default'} size={'large'} className={classes.button} startIcon={item.icon}>
          <Typography variant={'h6'}>{item.title}</Typography>
        </Button>
      </Link>
    );
  });
};

const NavigationMenu: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <Link to={'/home'}>
        <IconButton color={'primary'} size={'medium'} className={classes.button}>
          <TwitterIcon />
        </IconButton>
      </Link>

      {renderNavRouteList()}

      <Button variant={'contained'} color={'primary'} size={'large'} className={classes.button}>
        Tweet
      </Button>
    </section>
  );
};

export default NavigationMenu;
