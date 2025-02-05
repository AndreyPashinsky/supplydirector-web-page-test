import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <form className="input">
      <TextField
        id="date"
        variant="outlined"
        label="Дата получения"
        type="date"
        defaultValue="2017-05-24"
        className="input"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}