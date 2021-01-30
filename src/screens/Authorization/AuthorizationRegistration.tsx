import React, { FC, ReactElement } from 'react';

import { makeStyles, Theme, createStyles, Button, Typography, TextField } from '@material-ui/core';

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
      marginBottom: theme.spacing(2),
    },
    headerTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '100%',
      position: 'relative',
      marginBottom: theme.spacing(3),
    },
    headerTopIcon: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    inputGroup: {
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

const AuthorizationRegistration: FC = (): ReactElement => {
  const classes = useStyles();

  const signUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    console.warn(target.value);
  };

  return (
    <form onSubmit={signUp} autoComplete="off" className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.headerTop}>
          <TwitterIcon color={'primary'} fontSize={'large'} className={classes.headerTopIcon} />

          <Button type={'submit'} variant={'contained'} color={'primary'}>
            Next
          </Button>
        </div>

        <Typography variant={'h5'} className={classes.title}>
          Create your account
        </Typography>
      </div>

      <div className={classes.inputGroup}>
        <TextField type={'text'} variant={'outlined'} className={classes.input} autoFocus fullWidth label={'Name'} placeholder={'Name'} />

        <TextField type={'email'} variant={'outlined'} className={classes.input} fullWidth label={'Email'} placeholder={'Email'} />
      </div>
    </form>
  );
};

export default AuthorizationRegistration;
