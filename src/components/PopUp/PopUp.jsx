import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useFetch from '../helpers/useFetch.jsx'


export default function PopUp(props) {

    const {posts} = useFetch(`http://localhost:8000/posts/${props.id}`);

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Description</h4>
            <p>
            {posts.body}
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button size="sm" onClick={props.delete}>Delete Post</Button>
            <Button size="sm" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}