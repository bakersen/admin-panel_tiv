import React from 'react'
import PopUp from '../PopUps/itemPopUp'
import { Col, Row, Button} from 'react-bootstrap';
import Truncate from 'react-truncate'
import Moment from 'react-moment';
import useFetch from '../helpers/useFetch'


export default function ListData(props) {

    const {deleteItem} = useFetch(`http://localhost:8000/posts/${props.id}`);

    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => {      
        setModalShow(true)
    }

    const handleClose = () => {
        setModalShow(false)
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
                    <Button color="primary" size="sm" onClick={()=>handleClick()}>View Post</Button> 
                </Col>
            </Row>
            <PopUp id={props.id} show={modalShow} delete={()=> deleteItem()} onHide={handleClose} backdrop="static" keyboard={false} />
        </React.Fragment>
        )
}
