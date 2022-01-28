import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'Flex',
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
        color:'white',
        fontWeight:'700',
        boxShadow:'none',
        '&:hover':{
            backgroundColor: 'primary'
        }
  }
}));

export default function Refresh(props) {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <Typography style={{marginBottom:'10px'}} variant="h5" id="tableTitle" component="div">
          Failed to load {props.name}
      </Typography>  
    </div>
    <div className={classes.root}>
       <Link to='reload' style={{textDecoration:'none'}}>
       <Button className={classes.button} size="small" variant="contained" color="primary">
            RETRY
      </Button>
      </Link>
    </div>
    </>
  );
}
