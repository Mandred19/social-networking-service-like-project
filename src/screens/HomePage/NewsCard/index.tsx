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
  }),
);

const NewsCard: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
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

      <CardMedia image="https://picspree.com/ru/photos/swiss-mountains-318243" title="title" />

      <CardActions>
        <IconButton aria-label="reply">
          <ReplyAllOutlinedIcon />
        </IconButton>

        <IconButton aria-label="retweet">
          <RepeatOutlinedIcon />
        </IconButton>

        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlinedIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
