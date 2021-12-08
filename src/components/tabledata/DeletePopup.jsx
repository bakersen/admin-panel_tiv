import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useFetch from '../helpers/useFetch.jsx'

export default function DeletePopup(props) {

    const {deleteItem} = useFetch(`http://localhost:8000/events/${props.id}`);

    return (
        <>
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered

        >
        <Modal.Header>
          <Modal.Title>Delete Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span style={{color:'red'}}>Are you sure you want to delete this event</span>
            </Modal.Body>
        <Modal.Footer>
            <span style={{marginRight:'3%'}}onClick={props.onHide}>
                Cancel
            </span>
            <Button variant="primary" onClick={()=>deleteItem()}>
                Delete
            </Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

