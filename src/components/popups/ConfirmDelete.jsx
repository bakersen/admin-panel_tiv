import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import api from '../api/Jobs'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DeleteOutline } from '@material-ui/icons';
import './confirmDelete.css'
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    bulkDelete: {
        display:'Flex',
        alignItems:'center',
        width:'200px'    
    }
  }));
  

export default function ConfirmDelete(props) {


    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [open, setOpen] = React.useState(false);
    const [jobs, setJobs] = useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { selected} = props 
    const handleDelete = async (id) => {
        try {
            await api.delete(`/jobs/${id}`);
            const newJobs = jobs.filter(job => job.id !== id);
            setJobs(newJobs);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const classes = useStyles()

    if (!open) {
        
        return <Typography className={classes.bulkDelete} variant="p"  id="tableTitle"><DeleteOutline role='button' onClick={handleClickOpen} />Delete {selected?.length > 1 ? "jobs" : "job?"}</Typography>
 
    }

    return <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Delete Job?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete this Job
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="light" style={{ textTransform: 'none' }}>
                    Cancel
                </Button>
                <Button onClick={() => handleDelete()} style={{ backgroundColor: "#ff9015", textTransform: 'none', color: 'white' }} autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>;
}
