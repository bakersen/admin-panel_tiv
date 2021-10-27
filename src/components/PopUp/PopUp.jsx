/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import usePosts from '../helpers/usePosts.jsx'



export default function PopUp(props) {

    const {posts} = usePosts(`http://localhost:8000/posts/${props.id}`);

    // const [itemData, setItemData] = React.useState([])

    // React.useEffect(()=> {
    //     axios.get(`${baseURL}/${props.id}`).then((response) => {
    //         setItemData(response.data);
    //     });      
    // }, []);



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
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}