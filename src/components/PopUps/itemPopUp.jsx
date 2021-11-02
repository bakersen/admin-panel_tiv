import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useFetch from '../helpers/useFetch.jsx'
import Close from '@material-ui/icons/Close';
import EditPopup from '../PopUps/EditPopup'


export default function PopUp(props) {

    const {posts} = useFetch(`http://localhost:8000/posts/${props.id}`);

    const [editShow, setEditShow] = React.useState(false);

    const handleClick = () => {      
        setEditShow(true)
    }

    const handleClose = () => {
       setEditShow(false)
    }

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header >
            <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
            </Modal.Title>
            <div className="close"><Close onClick={props.onHide}/></div>
        </Modal.Header>
        <Modal.Body>
            <p>
            {posts.body}
            </p>
        </Modal.Body>
        <Modal.Footer>
             <Button size="sm" onClick={()=> handleClick()}>Edit Post</Button>
             <Button size="sm" onClick={props.delete}>Delete Post</Button>
             
             <EditPopup show={editShow} id={props.id} onHide={handleClose}/>
        </Modal.Footer>
        </Modal>
    );
}