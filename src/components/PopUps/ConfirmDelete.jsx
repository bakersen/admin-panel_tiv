import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useFetch from '../helpers/useFetch.jsx'
import './PopUps.css'


export default function ConfirmDelete(props) {
    
    const {deleteItem} = useFetch(`http://localhost:8000/posts/${props.id}`);

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >

        <Modal.Header>
                <h3>Are you sure you want to delete post?</h3>
        </Modal.Header>
        <Modal.Footer>
            <Button size="sm" variant="outline-secondary" onClick={props.onHide}>No, I dont want</Button>
            <Button size="sm" onClick={()=>deleteItem()}>Delete</Button>
        </Modal.Footer>

        </Modal>
    );
}