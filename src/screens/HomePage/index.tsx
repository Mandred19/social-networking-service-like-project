import React, {FC, ReactElement} from 'react';

import {createStyles, makeStyles, Theme} from '@material-ui/core';

import GridWrapper from '../../components/GridWrapper';
import NavigationMenu from '../../components/NavigationMenu';
import HomePageNewsLine from './HomePageNewsLine';
import SupportingBlock from '../../components/SupportingBlock';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const HomePage: FC = (): ReactElement => {
  const classes = useStyles();

  return <GridWrapper FirstColumn={NavigationMenu} SecondColumn={HomePageNewsLine} ThirdColumn={SupportingBlock}/>;
};

export default HomePage;
