import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useFetch from '../helpers/useFetch.jsx'
import Close from '@material-ui/icons/Close';
import './PopUps.css'


export default function EditPopup(props) {
    
    const {posts, editItem} = useFetch(`http://localhost:8000/posts/${props.id}`);

    const [body, setBody] = React.useState('')

    React.useEffect(()=>{
        setBody(posts.body)
    }, [posts.body])

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
            <Form className="edit-content">
                <Form.Control as="textarea" name="body" onChange={(e)=>setBody(e.target.value)} value={body} placeholder="" />
                 <Button size="sm" type="button" onClick={()=>editItem(body)}>Save Post</Button>
            </Form>
        </Modal.Body>
         <Modal.Footer>
           
         </Modal.Footer>
        </Modal>
    );
}