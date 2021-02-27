import React, { FC, ReactElement } from 'react';

import { createStyles, InputAdornment, makeStyles, TextField, Theme } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import theme from '../../theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      borderLeft: '1px solid #999',
      height: '100%',
      paddingLeft: theme.spacing(2),
    },
  }),
);

const Search: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth={true}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
