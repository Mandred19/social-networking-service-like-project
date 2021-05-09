import React, { FC, ReactElement } from 'react';

import { Avatar, Button, createStyles, IconButton, makeStyles, TextField, Theme } from '@material-ui/core';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexFlow: 'row nowrap',
      padding: theme.spacing(2),
      paddingBottom: 0,
      borderBottom: '1px solid #999',
    },
    avatarWrapper: {
      height: '100%',
      display: 'flex',
      flex: '0 1 auto',
      marginRight: theme.spacing(2),
    },
    formWrapper: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flex: '1 1 100%',
      flexFlow: 'column nowrap',
    },
    formWrapperText: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flex: 1,
      padding: `${theme.spacing(1)}px 0`,
    },
    formWrapperFooter: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexFlow: 'row nowrap',
      padding: `${theme.spacing(1)}px 0`,
      borderTop: '1px solid #999',
    },
    formWrapperFooterMediaButtons: {
      width: '100%',
      display: 'flex',
      flexFlow: 'row nowrap',
    },
  }),
);

const NewTweet: FC = (): ReactElement => {
  const classes = useStyles();
  /* TODO добавить получение аватара пользователя */
  const userAvatar = '';

  const renderUserAvatar = () => {
    return userAvatar ? (
      <Avatar src={userAvatar} aria-label="recipe">
        R
      </Avatar>
    ) : (
      <Avatar aria-label="recipe">
        <AccountCircleOutlinedIcon fontSize="large" />
      </Avatar>
    );
  };

  return (
    <section className={classes.wrapper}>
      <div className={classes.avatarWrapper}>{renderUserAvatar()}</div>

      <form className={classes.formWrapper}>
        <div className={classes.formWrapperText}>
          <TextField id={'new-twit-input'} multiline placeholder={'What`s happening?'} rowsMax={15} variant={'outlined'} fullWidth />
        </div>

        <div className={classes.formWrapperFooter}>
          <div className={classes.formWrapperFooterMediaButtons}>
            <IconButton aria-label={'Media'}>
              <PanoramaOutlinedIcon />
            </IconButton>
          </div>

          <Button type={'submit'} variant={'contained'} color={'primary'}>
            Tweet
          </Button>
        </div>
      </form>
    </section>
  );
};

export default NewTweet;
