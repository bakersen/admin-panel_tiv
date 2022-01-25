import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  bgcolor: {
    color: '#fff',
    backgroundColor: '#7B9985',
    width: theme.spacing(16),
    height: theme.spacing(16),
    fontSize:'4rem'
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
