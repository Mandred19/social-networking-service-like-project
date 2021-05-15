import React, {ChangeEvent, Dispatch, FC, FormEvent, ReactElement, SetStateAction, useState} from 'react';

import {Link} from 'react-router-dom';

import theme from '../../theme';

import {Button, createStyles, makeStyles, TextField, Theme, Typography} from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexFlow: 'column nowrap',
      height: '100%',
      width: '100%',
      maxWidth: 540,
      padding: theme.spacing(2),
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'column nowrap',
    },
    form: {
      marginBottom: theme.spacing(2),
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    input: {
      marginBottom: theme.spacing(2),
    },
    returnBlock: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

const AuthorizationLogIn: FC = (): ReactElement => {
  const classes = useStyles();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>, setStateHandler: Dispatch<SetStateAction<string>>): void => {
    setStateHandler(e.target.value);
  };

  const logIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.warn(login, password);
    setLogin('');
    setPassword('');
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <TwitterIcon color={'primary'} fontSize={'large'} style={{marginBottom: theme.spacing(3)}}/>

        <Typography variant={'h5'} className={classes.title}>
          Log in to Tweet
        </Typography>
      </div>

      <form onSubmit={logIn} className={classes.form} autoComplete="off">
        <TextField
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputChangeHandler(e, setLogin)}
          value={login}
          type={'text'}
          variant={'outlined'}
          className={classes.input}
          autoFocus
          fullWidth
          label={'Phone, email, or username'}
          placeholder={'Phone, email, or username'}/>

        <TextField
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputChangeHandler(e, setPassword)}
          value={password}
          type={'password'}
          variant={'outlined'}
          className={classes.input}
          fullWidth
          label={'Password'}
          placeholder={'Password'}/>

        <Button type={'submit'} variant={'contained'} color={'primary'} fullWidth>
          Log in
        </Button>
      </form>

      <div className={classes.returnBlock}>
        <Link to={'/sign-up'} className={'router-link'}>
          <Typography color={'primary'} variant={'body1'}>
            Sign up for Tweet
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default AuthorizationLogIn;
