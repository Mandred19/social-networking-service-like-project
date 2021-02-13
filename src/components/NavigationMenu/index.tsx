import React, { FC, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';

import theme from '../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexFlow: 'column nowrap',
    },
    button: {},
  }),
);

const navRouteList = [
  { to: '/home', id: 'home', title: 'Home', icon: <HomeOutlinedIcon /> },
  { to: '/explore', id: 'explore', title: 'Explore', icon: <SearchOutlinedIcon /> },
  { to: '/notifications', id: 'notifications', title: 'Notifications', icon: <NotificationsNoneOutlinedIcon /> },
  { to: '/messages', id: 'messages', title: 'Messages', icon: <EmailOutlinedIcon /> },
  { to: '/bookmarks', id: 'bookmarks', title: 'Bookmarks', icon: <BookmarkBorderOutlinedIcon /> },
  { to: '/lists', id: 'lists', title: 'Lists', icon: <ListAltOutlinedIcon /> },
  { to: '/profile', id: 'profile', title: 'Profile', icon: <PersonOutlineOutlinedIcon /> },
  { to: '/more', id: 'more', title: 'More', icon: <MoreOutlinedIcon /> },
];

const renderNavRouteList = () => {
  const classes = useStyles();
  const route = useLocation();

  return navRouteList.map((item) => {
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
    <section className={classes.list}>
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
