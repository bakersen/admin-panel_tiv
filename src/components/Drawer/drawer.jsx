import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {Grid, Typography, ButtonBase,Avatar, Divider,Paper } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import MyAvatar from "./avatar";
import axios from "axios";


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


export default function TemporaryDrawer({row}) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [data,setData] = useState([]);

  const url = `https://profiles-test.innovationvillage.co.ug/api/blog/comments?PostId= ${row.id}`;

  useEffect(()=> {
    axios.get(url)
    
        .then((response) => {
            
        setData(response.data.comments)
      
            
            
        })
        .catch((err)=> setError(err))
}, [url, data]);



const [state, setState] = React.useState({
    
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <Grid container>
      <Paper className={classes.paper}>
         <Grid item xs={12} className={classes.toprow}>
          <MyAvatar name={`${row?.author.firstname} ${row?.author.lastname}`}/>
          <div style={{paddingTop:'2%', marginBottom:'7%'}}>
              <Typography component="div" variant="h4" style={{fontWeight:'700', marginBottom:'3%'}}>
              {`${row?.author.firstname} ${row?.author.lastname}`}
              </Typography>
              <div style={{display:'Flex'}}>
                  <Delete color="primary" /> Delete Event
              </div>
          </div>
         </Grid>
         
      </Paper>
  </Grid>

        <Divider/>
        <Grid container spacing={12}>
         
          <Grid item xs= {3} sm container>
            <Grid >
              <Grid>
                {row.avatar}
                <Typography variant="h5" gutterBottom style={{fontWeight:'700', margin:'20px'}}>
                {row.details}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider/>
        <Grid container spacing={12}>
          <Grid item xs={3}>
            <ButtonBase className={classes.image}>
                <div className={classes.root}>
                  <Avatar 
                    alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large}  />
                </div>
            </ButtonBase>
          </Grid>
          <Grid item xs= {3} sm container>
            <Grid >
              <Grid>
                <Typography variant="h4" gutterBottom>
               { data.map((data, index)=>{
  const commentsData = data.details
  return(
    //console.log(commentsData)
      commentsData
  )
})}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={row.id}>
          <p onClick={toggleDrawer(anchor, true)} role='button'> {(!row.title)?row.details:row.title} </p>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
