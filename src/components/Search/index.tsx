import React, {ChangeEvent, FC, ReactElement, useState} from 'react';

import {createStyles, InputAdornment, makeStyles, TextField, Theme} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

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

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <TextField
      onChange={changeInputHandler}
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
