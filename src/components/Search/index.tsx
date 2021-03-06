import React, {FC, ReactElement, useState} from 'react';

import {createStyles, InputAdornment, makeStyles, TextField, Theme} from '@material-ui/core';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import {inputChangeEventType, inputChangeHandler} from '../../helpers/inputChangeHandler';

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
  const [search, setSearch] = useState<string>('');

  return (
    <TextField
      onChange={(e: inputChangeEventType) => inputChangeHandler(e, setSearch)}
      value={search}
      placeholder={'Search'}
      variant={'outlined'}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon/>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
