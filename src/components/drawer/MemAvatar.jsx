import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
// import { orange } from '@mui/material/colors';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  bgcolor: {
    color: '#fff',
    backgroundColor: green[500],
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize:'3rem'
  },
}));

export default function MyAvatar({name}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={name} src="/broken-image.jpg" className={classes.bgcolor} />
    </div>
  );
}
