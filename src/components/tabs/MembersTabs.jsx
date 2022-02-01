import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';
import API from '../helpers/API'
import MomentUtils from '@date-io/moment';
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreateIcon from '@material-ui/icons/Create';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    textTransform:'none'
  },
  paper: {
    padding: theme.spacing(2),
    color: 'black',
    boxShadow:'none',
  },
}));

function Date(props) {

   const {members} = props

  const [isEdit, setIsEdit] = React.useState(false);
  const [selectedDate, handleDateChange] = React.useState(members.startDateTime);
  const [isShown, setIsShown] = React.useState(false);

  if(isEdit) {
    return ( 
    <React.Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
          <DateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
      <CloseIcon onClick={() => {
          setIsEdit(false)
      }} />
      <CheckCircleIcon onClick={()=>{
        const body = {
          id: members.id,
          startDateTime: selectedDate
        }

        const handleEdit = async(id) => {
          try {
              await API.patch(`http://localhost:8000/members/${id}`, body)
          } catch (err) {
            console.log(err.response.status)
          }
        }

        handleEdit(members.id)
        setIsEdit(false)
      }} />

    </React.Fragment> )   
  }

  return (
    <React.Fragment>
      <span
       onMouseEnter={() => setIsShown(true)}
      //  onMouseLeave={() => setIsShown(false)}
      >
      <Moment format="Do-MMMM-YYYY">
          {members.startDateTime}
      </Moment>
       
      </span>

      {
        isShown && <CreateIcon onClick={()=>setIsEdit(true)} />
      }
      
    </React.Fragment>

  )
}

export default function SimpleTabs(props) {

  const {members} = props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   

  return (
    <React.Fragment>    
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#fff', boxShadow:'none'}}>
        <Tabs 
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        style={{color:'black', indicator:'blue'}}
        >
          <Tab label="Account" {...a11yProps(0)} style={{textTransform:'none', fontSize:'18px', marginRight:'20px'}} />
          <Tab label="Profile Info" {...a11yProps(1)} style={{textTransform:'none', fontSize:'18px'}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container fluid spacing={1}>
          <Grid item xs={6}>
              <div>
                <Typography style={{fontWeight:'700'}}>
                    Email Address: 
                </Typography>
                <Typography>
                    {members.email}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Date Joined: 
                </Typography>
                <Typography>                     
                    {members.dateJoined}                                               
                </Typography>
                 
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                  Categories: 
                </Typography>
                <Typography>
                    {members.categories}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Interests: 
                </Typography>
                <Typography>
                      {members.interests}                 
                </Typography>
              </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
    </div>
   </React.Fragment>
  );
}
