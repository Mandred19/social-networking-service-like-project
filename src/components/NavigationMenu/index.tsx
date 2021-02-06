import React, { FC, ReactElement } from 'react';

import { Button, createStyles, IconButton, makeStyles, Theme } from '@material-ui/core';

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
  { to: '/', id: 'home', title: 'Home', icon: <HomeOutlinedIcon /> },
  { to: '/', id: 'explore', title: 'Explore', icon: <SearchOutlinedIcon /> },
  { to: '/', id: 'notifications', title: 'Notifications', icon: <NotificationsNoneOutlinedIcon /> },
  { to: '/', id: 'messages', title: 'Messages', icon: <EmailOutlinedIcon /> },
  { to: '/', id: 'bookmarks', title: 'Bookmarks', icon: <BookmarkBorderOutlinedIcon /> },
  { to: '/', id: 'lists', title: 'Lists', icon: <ListAltOutlinedIcon /> },
  { to: '/', id: 'profile', title: 'Profile', icon: <PersonOutlineOutlinedIcon /> },
  { to: '/', id: 'more', title: 'More', icon: <MoreOutlinedIcon /> },
];

const renderNavRouteList = () => {
  const classes = useStyles();

  return navRouteList.map((item) => {
    return (
      <Button variant={'text'} color={'primary'} size={'large'} className={classes.button} startIcon={item.icon} key={item.id}>
        {item.title}
      </Button>
    );
  });
};

const NavigationMenu: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <section className={classes.list}>
      <IconButton color={'primary'} size={'medium'} className={classes.button}>
        <TwitterIcon />
      </IconButton>

      {renderNavRouteList()}

      <Button variant={'contained'} color={'primary'} size={'large'} className={classes.button}>
        Tweet
      </Button>
    </section>
  );
};

export default NavigationMenu;
