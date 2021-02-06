import React, { FC, ReactElement } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import theme from '../../theme';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const SupportingBlock: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <section>
      <div>SupportingBlock</div>
    </section>
  );
};

export default SupportingBlock;
