import React,{ useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import api from '../helpers/jobs_api'
import { DeleteOutline } from '@material-ui/icons';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
const [jobs, setJobs] = useState([])
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id) => {
    try {
        await api.delete(`/jobs/${id}`);
        const newJobs = jobs.filter(job => job.id !== id);
        setJobs(newJobs);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

  return (
    <div>
      <DeleteOutline variant="outlined" onClick={handleClickOpen} role='button'>
        Open dialog
      </DeleteOutline>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Delete Job?
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom style={{color:"red"}}>
          Are you sure you want to delete this Job
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{textTransform:'none',fontWeight:'lighter'}}>
            Cancel
          </Button>
          <Button onClick={() => handleDelete()} style={{backgroundColor:"#ff9015",textTransform:'none',color:'white',fontWeight:'lighter'}} autoFocus>
            Delete
        </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}