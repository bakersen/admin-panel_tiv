import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function useNotifications(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=> {
   
      return (
        <div className={classes.root}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              This is a success message!
            </Alert>
          </Snackbar>
        </div>
      );
    
  }, [open, classes.root])

  const handleMsg = () => {
    setOpen(true)
    console.log(open)
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return handleMsg

  
}
