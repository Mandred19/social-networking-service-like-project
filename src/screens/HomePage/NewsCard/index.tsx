import React, { FC, ReactElement } from 'react';

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';

import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ReplyAllOutlinedIcon from '@material-ui/icons/ReplyAllOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import theme from '../../../theme';
import { betweenChildrenMixin } from '../../../theme/styleMixins';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: '100%',
    },
    cardWrapper: {
      borderRadius: 0,
    },
    cardContent: {
      padding: `0 ${theme.spacing(2)}px 0 94px`,
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
      marginTop: theme.spacing(1),
      borderRadius: theme.spacing(1),
    },
    cardActions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    actionButtonWrapper: {
      display: 'flex',
      alignItems: 'center',
      ...betweenChildrenMixin({ marginRight: theme.spacing(0.5) }),
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
    <Card className={classes.cardWrapper}>
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

      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textPrimary" component="p">
          {tweet.text}
        </Typography>

        <CardMedia image={tweet.mediaUrl} title="mediaTitle" className={classes.cardMedia} />

        <CardActions className={classes.cardActions}>{renderActionButtons(2)}</CardActions>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
