import React, { FC, ReactElement } from 'react';

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ReplyAllOutlinedIcon from '@material-ui/icons/ReplyAllOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import theme from '../../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: '100%',
    },
    cardMedia: {
      paddingTop: '56.25%',
    },
    cardActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    actionButtonWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    actionButtonSubtitle: {},
  }),
);

const actionButtons = [
  { id: '1', label: 'reply', color: '#999', icon: <ReplyAllOutlinedIcon /> },
  { id: '2', label: 'retweet', color: '#999', icon: <RepeatOutlinedIcon /> },
  { id: '3', label: 'add to favorites', color: '#999', icon: <FavoriteBorderOutlinedIcon /> },
  { id: '4', label: 'share', color: '#999', icon: <ShareOutlinedIcon /> },
];

const NewsCard: FC = (): ReactElement => {
  const classes = useStyles();

  const renderActionButtons = (amount: number) => {
    return actionButtons.map((item) => {
      return (
        <div key={item.id} className={classes.actionButtonWrapper}>
          <IconButton aria-label={item.label}>{item.icon}</IconButton>

          <Typography variant={'subtitle2'} className={classes.actionButtonSubtitle}>
            {amount}
          </Typography>
        </div>
      );
    });
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1613037060849-110842e70cbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            aria-label="recipe"
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizOutlinedIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      <CardMedia
        image="https://images.unsplash.com/photo-1613169629286-8457b2ffad9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        title="title"
        className={classes.cardMedia}
      />

      <CardActions className={classes.cardActions}>{renderActionButtons(2)}</CardActions>
    </Card>
  );
};

export default NewsCard;
