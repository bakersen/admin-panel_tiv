import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import Moment from 'react-moment';



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


export default function SimpleTabs(props) {

  const {startups} = props
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
          <Tab label="Startup Info" {...a11yProps(0)} style={{textTransform:'none', fontSize:'18px', marginRight:'0'}} />
          <Tab label="About" {...a11yProps(1)} style={{textTransform:'none', fontSize:'18px'}}/>
          <Tab label="What We Do" {...a11yProps(2)} style={{textTransform:'none', fontSize:'18px'}}/>
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container fluid spacing={1}>
          <Grid item xs={6}>
              <div>
                <Typography style={{fontWeight:'700'}}>
                    Incorporation Date: 
                </Typography>
                <Typography>
                    {startups.dateCreated}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Start Date: 
                </Typography>
                <Typography>                     
                  {startups.employeeNum}                                         
                </Typography>
                 
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                  Email Address: 
                </Typography>
                <Typography>
                   {startups.email}    
                </Typography>
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Telephone: 
                </Typography>
                <Typography>
                   {startups.telephone}                   
                </Typography>
              </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div dangerouslySetInnerHTML={{__html:startups.about}}></div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div dangerouslySetInnerHTML={{__html:startups.whatWeDo}}></div>
      </TabPanel>
    </div>
   </React.Fragment>
  );
}
