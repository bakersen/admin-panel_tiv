import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import useFetch from '../helpers/useFetch.jsx'
import './Posts.css'
import ListData from '../Listdata/ListData.jsx';


function Posts() {
    
    const {posts, error} = useFetch("http://localhost:8000/posts");


    //Function that sorts posts by most recent date
    posts.sort((a, b) => {
        return new Date(b.datePosted) - new Date(a.datePosted); // ascending
    })

    //Load error if any
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
                    posts.map(post=> <ListData key={post.id} id={post.id} name={post} />)
                }
                
            </Container>

         </React.Fragment>                 
    )
}

export default Posts
