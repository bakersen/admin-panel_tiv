import * as React from 'react';
import useFetch from '../fetch/useFetch.jsx'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Delete from "@material-ui/icons/Delete";
import DialogTitle from '@mui/material/DialogTitle';



export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const {deleteItem} = useFetch(`https://profiles-test.innovationvillage.co.ug/api/person/${props.userId}`);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}> */}
        <Delete onClick={handleClickOpen}/>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Member"}
        </DialogTitle>
        <DialogContent>
          Are you sure you want to Delete this registered Member ?
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={()=>deleteItem({handleClose})} autoFocus>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}