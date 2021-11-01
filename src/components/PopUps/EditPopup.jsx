import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useFetch from '../helpers/useFetch.jsx'
import Close from '@material-ui/icons/Close';
import './PopUps.css'


export default function EditPopup(props) {
    
    const {posts} = useFetch(`http://localhost:8000/posts/${props.id}`);

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header >
             <Modal.Title id="contained-modal-title-vcenter">
                Edit Post
            </Modal.Title>
            <div className="close"><Close onClick={props.onHide}/></div>
        </Modal.Header>
        <Modal.Body>
            <div className="edit-content">
                <Form.Control as="textarea" value={posts.body} placeholder=""/>
            </div>
        </Modal.Body>
         <Modal.Footer>
            <Button size="sm" onClick={props.edit}>Save Post</Button>
         </Modal.Footer>
        </Modal>
    );
}