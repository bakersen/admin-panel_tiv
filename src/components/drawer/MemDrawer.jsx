import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD:src/components/drawer/MemDrawer.jsx
import Avatar from './MemAvatar';
import Tabs from '../tabs/MembersTab';
import Paper from '@material-ui/core/Paper';
import Delete from '@material-ui/icons/Delete';
import Block from '@material-ui/icons/Block';
import RemoveCircleOutlineTwoToneIcon from '@material-ui/icons/RemoveCircleOutlineTwoTone';
import DeleteDialogue from '../popups/DeleteDialogue'
=======
import MyAvatar from './MembersAvatar';
import Tabs from '../tabs/MembersTabs';
import Paper from '@material-ui/core/Paper';
import BlockIcon from '@material-ui/icons/Block';
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0:src/components/drawer/MembersDrawer.jsx



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

<<<<<<< HEAD:src/components/drawer/MemDrawer.jsx
export default function TemporaryDrawer({users}) {
=======
export default function MembersDrawer(props) { 

  const {members} = props

>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0:src/components/drawer/MembersDrawer.jsx

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
<<<<<<< HEAD:src/components/drawer/MemDrawer.jsx
          <Avatar name={users?.firstname}/>
          <div style={{paddingTop:'2%', marginBottom:'7%'}}>
              <Typography component="div" variant="h4" style={{fontWeight:'700', marginBottom:'3%'}}>
                  {users?.firstname} {users?.lastname}
              </Typography>
              <div style={{display:'Flex'}}>
                  <Block color="primary" /> Block
                  <RemoveCircleOutlineTwoToneIcon color="primary" /> Suspend
                  <Delete color="primary" users={users.userId}/> Delete

                
=======
          <MyAvatar name={members?.title}/>
          <div style={{paddingTop:'2%', marginBottom:'7%'}}>
              <Typography component="div" variant="h4" style={{fontWeight:'700', marginBottom:'3%'}}>
                  {members?.fullName}
              </Typography>
              <div style={{display:'Flex'}}>
                  <BlockIcon color="primary" /> Suspend Member
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0:src/components/drawer/MembersDrawer.jsx
              </div>
          </div>
         </Grid>
          <Grid item xs={12} className={classes.toprow}>
<<<<<<< HEAD:src/components/drawer/MemDrawer.jsx
              <Tabs users={users}/>
=======
              <Tabs members={members}/>
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0:src/components/drawer/MembersDrawer.jsx
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
<<<<<<< HEAD:src/components/drawer/MemDrawer.jsx
          <span className={classes.link} onClick={toggleDrawer(anchor, true)}>{users.firstname} {users.lastname}</span>
=======
          <span className={classes.link} onClick={toggleDrawer(anchor, true)}>{members.fullName}</span>
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0:src/components/drawer/MembersDrawer.jsx
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
