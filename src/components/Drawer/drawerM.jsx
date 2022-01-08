
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from './Avta';
import Tabs from './Tabs_M';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Delete';
// import Block from '@mui/icons-material/Block';
// import DeleteDialogue from '../users/DeleteDialogue'


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
      h3:{
        color:'black',
        fontWeight:'700'
      }
  },
}));

export default function TemporaryDrawer({members}) {

 


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

  <Grid container>
      <Paper className={classes.paper}>
         <Grid item xs={12} className={classes.toprow}>
          <Avatar name={members?.firstname}/>
          <div style={{paddingTop:'2%', marginBottom:'7%'}}>
              <Typography component="div" variant="h4" style={{fontWeight:'700', marginBottom:'3%'}}>
                  {members?.firstname} {members?.lastname}
              </Typography>
              <div style={{display:'Flex'}}>
                  <Delete color="primary" /> Suspend Member
                  <Delete color="primary" members={members.userId}/> Delete Member
                
              </div>
          </div>
         </Grid>
          <Grid item xs={12} className={classes.toprow}>
              <Tabs members={members}/>
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
          <span className={classes.link} onClick={toggleDrawer(anchor, true)}>{members.firstname} {members.lastname}</span>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

