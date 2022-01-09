import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import { DeleteOutline } from '@material-ui/icons';
import './confirmdelete.css';

export default function ConfirmDelete({job, handleDelete}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
           <DeleteOutline 
            onClick={handleShow} 
            role='button'
            />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{job.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='confirm-msg'>Are you sure want to delete this job?</Modal.Body>
                <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Cancel
                </Button>
                <Button  style={{backgroundColor:"#ff9015"}} onClick={() => handleDelete(job.id)}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal> 
        </>
    )
}
