import React, {ReactElement} from 'react';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';

export interface navRouteItem {
  to: string;
  id: string;
  title: string;
  icon: ReactElement;
}

export const navRouteList: navRouteItem[] = [
  {to: '/home', id: 'home', title: 'Home', icon: <HomeOutlinedIcon/>},
  {to: '/explore', id: 'explore', title: 'Explore', icon: <SearchOutlinedIcon/>},
  {to: '/notifications', id: 'notifications', title: 'Notifications', icon: <NotificationsNoneOutlinedIcon/>},
  {to: '/messages', id: 'messages', title: 'Messages', icon: <EmailOutlinedIcon/>},
  {to: '/bookmarks', id: 'bookmarks', title: 'Bookmarks', icon: <BookmarkBorderOutlinedIcon/>},
  {to: '/lists', id: 'lists', title: 'Lists', icon: <ListAltOutlinedIcon/>},
  {to: '/profile', id: 'profile', title: 'Profile', icon: <PersonOutlineOutlinedIcon/>},
  {to: '/more', id: 'more', title: 'More', icon: <MoreOutlinedIcon/>},
];
