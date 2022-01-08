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

   const {events} = props

  const [isEdit, setIsEdit] = React.useState(false);
  const [selectedDate, handleDateChange] = React.useState(events.startDateTime);
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
          id: events.id,
          startDateTime: selectedDate
        }

        const handleEdit = async(id) => {
          try {
              await API.patch(`http://localhost:8000/events/${id}`, body)
          } catch (err) {
            console.log(err.response.status)
          }
        }

        handleEdit(events.id)
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
          {events.startDateTime}
      </Moment>
       
      </span>

      {
        isShown && <CreateIcon onClick={()=>setIsEdit(true)} />
      }
      
    </React.Fragment>

  )
}

export default function SimpleTabs(props) {

  const {events} = props
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
          <Tab label="Event Info" {...a11yProps(0)} style={{textTransform:'none', fontSize:'18px', marginRight:'20px'}} />
          <Tab label="Events Description" {...a11yProps(1)} style={{textTransform:'none', fontSize:'18px'}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container fluid spacing={1}>
          <Grid item xs={6}>
              <div>
                <Typography style={{fontWeight:'700'}}>
                    Location: 
                </Typography>
                <Typography>
                    {events.location}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Start Date: 
                </Typography>
                <Typography>                     
                    <Date events={events}/>                                                
                </Typography>
                 
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Posted By: 
                </Typography>
                <Typography>
                    {events.createdBy}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   End Date: 
                </Typography>
                <Typography>
                  <Moment format="Do-MMM-YYYY">
                      {events.endDateTime}
                  </Moment>                     
                </Typography>
              </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div dangerouslySetInnerHTML={{__html:events.details }}></div>  
      </TabPanel>
    </div>
   </React.Fragment>
  );
}
