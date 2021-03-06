
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Delete from '@material-ui/icons/Delete';
import useAPI from '../helpers/useAPI';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  bulkDelete: {
      display:'Flex',
      alignItems:'center',
      width:'200px'    
  }
}));

export default function AlertDialog(props) {

  const {id, selected, users} = props  

  const {deleteItem, baseURL} = useAPI(`http://localhost:8000/members/${id}`);

 
  const bulkSelected = selected.filter(element => {
    return selected[element]
  });
       
  const handleBulkDelete = () => {
      console.log(bulkSelected)
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
          <Delete  /> Delete {selected.length > 1 ? "All Members?" : "Member?"}
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
            Are you sure you want to delete {selected.length > 1 ? "these registered members?" : "this member?"}
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
