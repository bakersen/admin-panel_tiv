import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import api from '../helpers/jobs_api'
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import './temporarydrawer.css';
import JobTabs from '../tabs/JobTabs.jsx';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import CreateIcon from '@material-ui/icons/Create';
import { green } from '@material-ui/core/colors';
import { Check, Close } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
  custom: {
    marginTop: "40px",
    fontWeight: 'bold'
  },
  bgcolor: {
    color: '#fff',
    backgroundColor: green[500],
    width: theme.spacing(15),
    height: theme.spacing(15),
    fontSize: '3rem'

  }
}));



function Title({ job }) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [title, setTitle] = React.useState(job.jobTitle);

  if (isEdit) {
    return <div>
      <input value={title} onChange={(e) => {
        setTitle(e.target.value)
      }} />
      <Close onClick={() => {
        setTitle(job.jobTitle)
        setIsEdit(false)
      }}>Cancel </Close>
      <Check onClick={() => {
        // update title api call
        const body = {
          jobID: job.id,
          job: {
            id: job.id,
            title: title,
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
        job.jobTitle = title
        setIsEdit(false)
      }}>Save </Check>
    </div>
  }


  return <div>
    {job.jobTitle}

    <CreateIcon onClick={() => setIsEdit(true)}>Edit </CreateIcon>
  </div>
}

export default function TemporaryDrawer({ job, isDrawerOpen, setDrawerState, editjob, setEditJob, handleEdit }) {
  // const theme = useTheme();


  const classes = useStyles();
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open)
  };

  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role="presentation"

    >
      <div className={classes.root}>

        <Grid container spacing={12}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <div className={classes.root}>
                <Avatar
                  alt={job.jobTitle} src="/static/images/avatar/1.jpg" className={classes.bgcolor} />
              </div>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid >
              <Grid item xs>
                <Typography variant="h5" gutterBottom className={classes.custom}>
                  <Title job={job} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </div>
      {/* <List>
        <h3>
          <Avatar >
            {job.initials}
          </Avatar>
          <span>&nbsp;</span>
          <Title job={job} />
        </h3>
      </List> */}

      <List>
        <JobTabs job={job} editjob={editjob} setEditJob={setEditJob} handleEdit={handleEdit} />
      </List>
    </div>
  );
  if (isDrawerOpen !== true) {
    return <div />;
  }

  return (
    <div className={classes.root}>
      {<React.Fragment key='right'>
        <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>}
    </div>
  );
}