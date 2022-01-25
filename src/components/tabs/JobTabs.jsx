import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import { Check, Close,Create } from '@material-ui/icons';
import api from '../helpers/jobs_api'
import TextField from '@material-ui/core/TextField';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',

  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Requirements({ job }) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [requirements, setRequirements ]= React.useState(job.qualifications);

  if (isEdit) {
    return <div>
      <input value={requirements} onChange={(e) => {
        setRequirements(e.target.value)
      }} />
      <Close onClick={() => {
        setRequirements(job.qualifications)
        setIsEdit(false)
      }}>Cancel </Close>
      <Check onClick={() => {
        // update title api call
        const body = {
          jobID: job.id,
          job: {
            id: job.id,
            requirements: requirements,
          }
        }
        const handleEdit = async (id) => {
          try {
            await api.put(`/jobs/application/update`, body);

          } catch (err) {
            console.log(`Error: ${err.message}`);
          }
        }
        handleEdit(job.id)
        job.qualifications = requirements
        setIsEdit(false)
      }}>Save </Check>
    </div>
  }


  return <div>
    {job.qualifications}
    <Create onClick={() => setIsEdit(true)}>Edit </Create>
  </div>
}


function Deadline({ job }) {
  const [isDateEdit, setIsDateEdit] = React.useState(false);
  const [deadline, setDeadline ]= React.useState(job.deadline);
  const classes = useStyles();

  if (isDateEdit) {
    return <div>
      {/* <input value={deadline} onChange={(e) => {
        setDeadline(e.target.value)
      }} /> */}
      <form className={classes.container} noValidate>
      <TextField
        value={deadline} onChange={(e) => {
          setDeadline(e.target.value)
        }} 
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
      <Close onClick={() => {
        setDeadline(job.deadline)
        setIsDateEdit(false)
      }}>Cancel </Close>
      <Check onClick={() => {
        // update title api call
        const body = {
          jobID: job.id,
          job: {
            id: job.id,
            deadline: deadline,
          }
        }
        const handleEdit = async (id) => {
          try {
            await api.put(`/jobs/application/update`, body);

          } catch (err) {
            console.log(`Error: ${err.message}`);
          }
        }
        handleEdit(job.id)
        job.deadline = deadline
        setIsDateEdit(false)
      }}>Save </Check>
    </div>
  }


  return <div>
    {job.deadline}
    <Create onClick={() => setIsDateEdit(true)}>Edit </Create>
  </div>
}




export default function CustomizedTabs({job}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
      <Tabs 
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        style={{color:'black', indicator:'blue'}}
        >
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0} >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <h6>Job Catergory</h6>
              <li>
                {job.jobCatergory}
              </li>
            </Grid>
            <Grid item xs={12} sm={6}>
            <h6>Job Posting</h6>
              <li>
               {job.date}
              </li>
            </Grid>
            <Grid item xs={12} sm={6}>
            <h6>Job type</h6>
              <li>
                {job.jobType}
              </li>
            </Grid>
            <Grid item xs={12} sm={6}>
            <h6>Application deadline</h6>
                <li>
                  <Deadline job={job} />
                </li>
            </Grid>
            <Grid item xs={12} sm={6}>
            <h6>Salary range</h6>
              <li>
              {job.salaryRange || '-'}
              </li>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
            <Grid item xs={12} >
              <h6>Job Description</h6>
              <li>
                {job.jobDescription}
              </li>
            </Grid>
            <Grid item xs={12} >
            <h6>Requirements</h6>
              <Typography >
                <Requirements job={job} />
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}