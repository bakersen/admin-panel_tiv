import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MyAvatar from './StartupsAvatar';
import Tabs from '../tabs/StartupsTabs';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: 'black',
    boxShadow:'none',
  },
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    '&:hover': {
        'textDecoration':'underline',
        'cursor':'pointer',
    },
  },
  toprow: {
    display:'Flex',
    alignItems: 'start',    
  },
  MuiTypography:{
      h4:{
        color:'black',
        fontWeight:'700'
      }
  },
}));

export default function EventsDrawer({startups}) {

 


  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <React.Fragment>
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >

  <Grid>
      <Paper className={classes.paper}>
         <Grid item xs={12} className={classes.toprow}>
          <MyAvatar name={startups?.startupName}/>
          <div style={{paddingTop:'2%', marginBottom:'7%'}}>
              <Typography component="div" variant="h4" style={{fontWeight:'700', marginBottom:'0'}}>
                  {startups?.startupName}
              </Typography>
              <Typography component="div" variant="p" style={{marginBottom:'8%', marginLeft:'1%'}}>
                  Owner: {startups?.ownersName}
              </Typography>
              <div style={{display:'Flex'}}>
                  <Delete color="primary" /> Delete Start Up
              </div>
          </div>
         </Grid>
          <Grid item xs={12} className={classes.toprow}>
              <Tabs startups={startups}/>
         </Grid>
      </Paper>
  </Grid>
     
    
      
          
    </div>
    </React.Fragment>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <span className={classes.link} onClick={toggleDrawer(anchor, true)}>{startups.startupName}</span>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
