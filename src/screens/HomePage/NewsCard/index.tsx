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

const NewsCard: FC = (tweet: any): ReactElement => {
  const classes = useStyles();
  const { user } = tweet;

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
          <Avatar src={user.avatarUrl} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizOutlinedIcon />
          </IconButton>
        }
        title={user.fullName}
        subheader="Subheader"
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {tweet.text}
        </Typography>
      </CardContent>

      <CardMedia image={tweet.mediaUrl} title="mediaTitle" className={classes.cardMedia} />

      <CardActions className={classes.cardActions}>{renderActionButtons(2)}</CardActions>
    </Card>
  );
};

export default NewsCard;
