/* eslint-disable prettier/prettier */

import React from 'react';
import { Col, Container, Row, Button} from 'react-bootstrap';
import usePosts from '../helpers/usePosts.jsx'
import PopUp from '../PopUp/PopUp'
// import Popover from '@material-ui/core/Popover';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Truncate from 'react-truncate'
import './Posts.css'
import Moment from 'react-moment';



function ListPosts(props){

    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => {
        setModalShow(true)
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
            <PopUp id={props.id} show={modalShow} onHide={() => setModalShow(false)} backdrop="static" keyboard={false} />
        </React.Fragment>
        )
}


function Posts() {
    
    const {posts, error} = usePosts("http://localhost:8000/posts");

    // if(loading) return <h1>Loading...</h1>

    if(error) return <h1>error loading page</h1> 

    return (
        <React.Fragment>

            <Container>
                <Row className="header-row">
                    <Col md={2}>
                        <h6>Date Posted</h6>                     
                    </Col>
                    <Col md={2}>
                        <h6>Posted By</h6>
                    </Col>
                    <Col md={6}>
                        <h6>Post Excerpt</h6>                     
                    </Col>
                    <Col md={2}>                
                    </Col>
                </Row>
                {
                    posts.map(post=> <ListPosts key={post.id} id={post.id} name={post} />)
                }
                
            </Container>

         </React.Fragment>

                 
    )
}

export default Posts
