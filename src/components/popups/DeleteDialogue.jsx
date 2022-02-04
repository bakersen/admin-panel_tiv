import * as React from 'react';
import useFetch from '../fetch/useFetch.jsx'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Delete from "@material-ui/icons/Delete";
import DialogTitle from '@material-ui/core/DialogTitle';



export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  
//   const {deleteItem} = useFetch(`https://profiles-test.innovationvillage.co.ug/api/person/${props.userId}`);
  const {deleteItem} = useFetch(`http://localhost:8000/members/${props.userId}`);

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
          Are you sure you want to Delete this Member ?
          
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
           Cancel
          </Button>
          <Button onClick={()=>deleteItem({handleClose})} color = "primary" autoFocus>
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}