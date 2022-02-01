
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Delete from '@material-ui/icons/Delete';
import useFetch from '../helpers/useAPI';

export default function AlertDialog(props) {

  const {id, setState} = props  

  const {deleteItem} = useFetch(`http://localhost:5500/posts/${id}`);  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (newState) => {
    deleteItem()   
    setState({ open: true, ...newState });
    setOpen(false);
  };

  return (
    <div>
      <Delete onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Post?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Cancel
          </Button>
          <Button onClick={()=> handleDelete({
          vertical: 'top',
          horizontal: 'right',
          })} 
          color="primary" autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
