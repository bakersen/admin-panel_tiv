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
  
}));

export default function MyAvatar({name,className}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={name} src="/broken-image.jpg" className={className} />
    </div>
  );
}