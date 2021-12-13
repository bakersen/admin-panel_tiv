import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'Flex',
    alignItems:'center',
    justifyContent:'center'
  },
}));

export default function Loader(props) {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <CircularProgress />
    </div>
    <div className={classes.root}>
      <span style={{marginTop:'15px'}}>{props.name}</span>
    </div>
    </>
  );
}
