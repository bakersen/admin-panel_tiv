import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {Grid, Typography, ButtonBase,Avatar, Divider,Paper } from '@material-ui/core';
import { deepOrange} from '@material-ui/core/colors';
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
          <MyAvatar name={`${row?.author.firstname} ${row?.author.lastname}`} className={classes.bgcolor}/>
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
    <Divider />
    <Grid container spacing={12}>
         
         <Grid item xs= {3} sm container>
           <Grid >
             <Grid>
               <Typography  gutterBottom style={{fontWeight:'100', margin:'20px',fontSize:'16px'}}>
               {row.details}
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
          
             
          {data.map((data,index)=> {
              const commentsData = data.details
              const commentsAuthor = `${data.author.firstname} ${data.author.lastname}`
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
                    
                  })}
        
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
      <p onClick={toggleDrawer(anchor, true)} role='button'> {(!row.title)?row.details:row.title} </p>
      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  ))}
</div>





        )
 }; 














//  <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
     
   
  
//     >
     

//         <Divider/>
       
        
                
            
//               <div style={{display:'Flex'}}>
//                   <Delete color="primary" /> Delete Event
//               </div>
       
     
//     </div>
    
  
   

//         return(
             
    