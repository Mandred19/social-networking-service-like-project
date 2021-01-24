import React from 'react';

import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

import theme from '../../theme';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      height: '100%',
    },
    infoBlock: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: `${theme.palette.background.paper}`,
      padding: theme.spacing(1),
      position: 'relative',
      overflow: 'hidden',
    },
    infoBlockIcon: {
      display: 'inline-block',
      top: '-30vh',
      right: '-50vh',
      maxWidth: 'none',
      width: 'auto',
      height: '170vh',
      userSelect: 'none',
      position: 'absolute',
    },
    infoBlockList: {
      listStyle: 'none',
      position: 'relative',
    },
    infoBlockListItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: `${theme.palette.text.secondary}`,
      marginBottom: theme.spacing(4),
    },
    infoBlockListItemIcon: {
      color: `${theme.palette.text.secondary}`,
      marginRight: theme.spacing(2),
    },
    actionsBlock: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      padding: theme.spacing(1),
    },
    actionBlockWrapper: {
      width: '100%',
      maxWidth: 360,
    },
    buttonsBlockColumn: {
      display: 'flex',
      flexFlow: 'column nowrap',
    },
    button: {
      marginBottom: theme.spacing(2),
    },
  }),
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Authorization = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <section className={classes.infoBlock}>
        <TwitterIcon color={'primary'} className={classes.infoBlockIcon} />

        <ul className={classes.infoBlockList}>
          <li className={classes.infoBlockListItem}>
            <SearchOutlinedIcon fontSize={'large'} className={classes.infoBlockListItemIcon} />
            <Typography variant={'h6'}>Follow your interests.</Typography>
          </li>

          <li className={classes.infoBlockListItem}>
            <PeopleOutlineIcon fontSize={'large'} className={classes.infoBlockListItemIcon} />
            <Typography variant={'h6'}>Hear what people are talking about.</Typography>
          </li>

          <li className={classes.infoBlockListItem}>
            <ChatBubbleOutlineIcon fontSize={'large'} className={classes.infoBlockListItemIcon} />
            <Typography variant={'h6'}>Join the conversation.</Typography>
          </li>
        </ul>
      </section>

      <section className={classes.actionsBlock}>
        <div className={classes.actionBlockWrapper}>
          <TwitterIcon color={'primary'} fontSize={'large'} style={{ marginBottom: theme.spacing(3) }} />

          <Typography variant={'h4'} style={{ marginBottom: theme.spacing(5) }}>
            See what’s happening in the world right now
          </Typography>

          <Typography variant={'subtitle2'} style={{ marginBottom: theme.spacing(2) }}>
            Join Twitter today.
          </Typography>

          <div className={classes.buttonsBlockColumn}>
            <Button variant={'contained'} color={'primary'} fullWidth className={classes.button}>
              Sign up
            </Button>

            <Button variant={'outlined'} fullWidth className={classes.button}>
              Log in
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Authorization;
