
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Delete from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import API from '../helpers/API'


const useStyles = makeStyles((theme) => ({
  bulkDelete: {
      display:'Flex',
      alignItems:'center',
      width:'200px'    
  }
}));

export default function AlertDialog(props) {

  const {selected} = props
    
   //Bulk select delete method 
   const handleBulkDelete = async() => {
        try {
            await selected.forEach((url)=>{
              API.delete(`/events/${url}`)
              setOpen(false);
            })
        } catch(err){
          console.log(err.response.status)
        }
    }
 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles()

  return (
    <div>

      <Typography className={classes.bulkDelete} variant="p" id="tableTitle" component="div" onClick={handleClickOpen}>
          <Delete  /> Delete {selected.length > 1 ? "Events?" : "Event?"}
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Event?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete {selected.length > 1 ? "these events?" : "this event?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Cancel
          </Button>
          <Button onClick={()=>handleBulkDelete()} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
