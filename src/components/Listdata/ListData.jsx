import React from 'react'
import PopUp from '../PopUp/PopUp'
import { Col, Row, Button} from 'react-bootstrap';
import Truncate from 'react-truncate'
import Moment from 'react-moment';
import useFetch from '../helpers/useFetch.jsx'
import axios from 'axios'


export default function ListData(props) {

    const {posts, baseURL} = useFetch(`http://localhost:8000/posts/${props.id}`);

    const [modalShow, setModalShow] = React.useState(false);

    const[newData, setDelete] = React.useState(posts)

    const handleClick = () => {
        setModalShow(true)
    }

    const handleClose = () => {
        setModalShow(false)
    }

    const deletePost = () => {
        axios.delete(baseURL)
        .then(()=>{
            setDelete(posts)
            alert("Post deleted successfully")
            console.log(posts)
        })
    }


    return (
        <React.Fragment>           
            <Row className="posts-row">
                <Col md={2}>
                    <p><Moment format="D-MMM-Y">{props.name?.datePosted}</Moment></p>
                </Col>
                <Col md={2}>
                    <p>{props.name?.author.name}</p>
                </Col>
                <Col md={6}>
                    <p>
                    <Truncate
                        width={900}
                        ellipsis={
                        <span>
                            ...{" "}
                        </span>}
                    >
                    {props.name?.body}
                    </Truncate>
                    </p>
                    
                </Col>
                <Col md={2}>
                    <Button color="primary" size="sm" onClick={handleClick}>view post</Button> 
                </Col>
            </Row>
            <PopUp id={props.id} show={modalShow} delete={deletePost} onHide={handleClose} backdrop="static" keyboard={false} />
        </React.Fragment>
        )
}
