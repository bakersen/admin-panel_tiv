import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {Grid, Typography, ButtonBase,Avatar, Divider,Paper } from '@material-ui/core';
import { deepOrange} from '@material-ui/core/colors';
import Delete from '@material-ui/icons/Delete';
import MyAvatar from "./PostsAvatar";
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
  large: {
    backgroundColor: deepOrange,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  bgcolor: {
    color: 'orange',
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize:'3rem'
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
  comments:{
    

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

//   const url = `http://localhost:8000/posts/${row.id}`;

//   useEffect(()=> {
//     axios.get(url)
    
//         .then((response) => {
            
//         setData(response.data)
      
            
            
//         })
//         .catch((err)=> setError(err))
// }, [url, data]);



const [state, setState] = React.useState({
    
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const commentsData = row.Comments;
   const commentsAuthor = `${row.firstName} ${row.lastName}`;
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
          <MyAvatar name={`${row?.firstName} ${row?.lastName}`} className={classes.bgcolor}/>
          <div style={{paddingTop:'2%', marginBottom:'7%'}}>
              <Typography component="div" variant="h4" style={{fontWeight:'700', marginBottom:'3%'}}>
              {`${row?.firstName} ${row?.lastName}`}
              </Typography>
              <div style={{display:'Flex'}}>
                  <Delete color="primary" /> Delete Post
              </div>
          </div>
         </Grid>
         
      </Paper>
  </Grid>
    <Divider />
    <Grid container spacing={12}>
         
         <Grid item xs= {3} sm container>
           <Grid >
             <Grid>
               <Typography  gutterBottom style={{fontWeight:'100', margin:'20px',fontSize:'16px'}}>
               {row.postsText}
               </Typography>
             </Grid>
           </Grid>
         </Grid>
       </Grid>
       <Divider/>
        <Grid container style={{flexDirection:'row'}}>
      <Paper className={classes.paper}>
         <Grid item xs={12} className={classes.toprow}>
         
          <div style={{paddingTop:'2%', marginBottom:'7%'}}>
           
            
                     <div >
                  <MyAvatar  name= {commentsAuthor} className={classes.large}/>
                   <Typography component="div" style={{fontWeight:'350', marginBottom:'3%', fontSize: '20px'  }}>
                    {commentsAuthor}
                    </Typography>
                   <Typography component="div"  style={{fontWeight:'100', marginBottom:'3%', fontSize: '16px'}}>
                     {commentsData}
                     </Typography>
                     </div>    
          
             
          {/* {data.map((data,index)=> {
              const commentsData = data.comments
              const commentsAuthor = `${data.firstname} ${data.lastname}`
                   return (
                     <div >
                  <MyAvatar  name= {commentsAuthor} className={classes.large}/>
                   <Typography component="div" style={{fontWeight:'350', marginBottom:'3%', fontSize: '20px'  }}>
                    {commentsAuthor}
                    </Typography>
                   <Typography component="div"  style={{fontWeight:'100', marginBottom:'3%', fontSize: '16px'}}>
                     {commentsData}
                     </Typography>
                     </div>    )
                    
                  })} */}
        
          </div>
         </Grid>
         
      </Paper>
  </Grid>
  </div>
);

return (
  <div>
  {['right'].map((anchor) => (
    <React.Fragment key={row.id}>
      <p onClick={toggleDrawer(anchor, true)} role='button'> {(!row.postsText)?row.Comments:row.postsText} </p>
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  ))}
</div>





        )
 }; 