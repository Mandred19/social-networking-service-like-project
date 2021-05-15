import React, {ChangeEvent, FC, FormEvent, ReactElement, useState} from 'react';

import {Avatar, Button, createStyles, IconButton, makeStyles, TextField, Theme} from '@material-ui/core';
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

  const [newTwit, setNewTwit] = useState<string>('');

  const renderUserAvatar = () => {
    return userAvatar ? (
      <Avatar src={userAvatar} aria-label="recipe">
        R
      </Avatar>
    ) : (
      <Avatar aria-label="recipe">
        <AccountCircleOutlinedIcon fontSize="large"/>
      </Avatar>
    );
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setNewTwit(e.target.value);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO Отправка нового твита
    console.warn(newTwit);
    setNewTwit('');
  };

  return (
    <section className={classes.wrapper}>
      <div className={classes.avatarWrapper}>{renderUserAvatar()}</div>

      <form onSubmit={formSubmitHandler} className={classes.formWrapper}>
        <div className={classes.formWrapperText}>
          <TextField
            onChange={inputChangeHandler}
            value={newTwit} id={'new-twit-input'}
            multiline
            placeholder={'What`s happening?'}
            rowsMax={10}
            variant={'outlined'}
            fullWidth/>
        </div>

        <div className={classes.formWrapperFooter}>
          <div className={classes.formWrapperFooterMediaButtons}>
            <IconButton aria-label={'Media'} title={'Media'}>
              <PanoramaOutlinedIcon color={'primary'}/>
            </IconButton>
          </div>

          <Button type={'submit'} variant={'contained'} color={'primary'} disabled={!newTwit.length}>
            Tweet
          </Button>
        </div>
      </form>
    </section>
  );
};

export default NewTweet;
