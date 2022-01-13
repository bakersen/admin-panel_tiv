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



function TabPanel(props) {
  const { children, value, index, ...other } = props
  

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
  },
}));

export default function SimpleTabs(props) {
  const members = props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#fff', boxShadow:'none'}}>
        <Tabs 
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        style={{color:'black', indicator:'blue'}}
        >
          <Tab label="ACCOUNT" {...a11yProps(0)} />
          <Tab label="PROFILE INFO" {...a11yProps(1)} />
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
                {members.email !== null && members.email !== "" ? members.email : "Not provided"}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={6}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Date Joined: 
                </Typography>
                <Typography>
                   <Moment format="Do-MMM-YYYY">
                       {members.dateCreated}
                  </Moment>  
                  {/* {members.dateCreated} */}
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
                  {/* <Moment format="Do-MMM-YYYY">
                      {events.endDateTime}
                  </Moment>                      */}
                  {members.skills}
                </Typography>
              </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Tech Stack: 
                </Typography>
                <Typography>
                  {/* <Moment format="Do-MMM-YYYY">
                      {events.endDateTime}
                  </Moment>                      */}
                  {members.stacks}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={12}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Skills: 
                </Typography>
                <Typography>
                  {/* <Moment format="Do-MMM-YYYY">
                      {events.endDateTime}
                  </Moment>                      */}
                  {members.skills}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={12}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Social Links: 
                </Typography>
                <Typography>
                  {/* <Moment format="Do-MMM-YYYY">
                      {events.endDateTime}
                  </Moment>                      */}
                  {members.stacks}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={12}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Networks: 
                </Typography>
                <Typography>
                  {/* <Moment format="Do-MMM-YYYY">
                      {events.endDateTime}
                  </Moment>                      */}
                  {members.networks}
                </Typography>
              </div>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid item xs={12}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Education Background: 
                </Typography>
                <Typography>
                                    
                  {members.networks}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={12}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Employment History: 
                </Typography>
                <Typography>
                                    
                  {members.networks}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={12}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   Projects Worked On: 
                </Typography>
                <Typography>
                                    
                  {members.networks}
                </Typography>
              </div>
          </Grid>
          <Grid item xs={12}>
             <div>
                <Typography style={{fontWeight:'700'}}>
                   FreeLance Hours: 
                </Typography>
                <Typography>
                                    
                  {members.networks}
                </Typography>
              </div>
          </Grid>
      </TabPanel>
    </div>
  );
}