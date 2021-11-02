import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import useFetch from '../helpers/useFetch.jsx'
import './Posts.css'
import ListData from '../Listdata/ListData.jsx';


function Posts() {
    
    const {posts, error, loading} = useFetch("http://localhost:8000/posts");


    //Function that sorts posts by most recent date
    posts.sort((a, b) => {
        return new Date(b.datePosted) - new Date(a.datePosted); // ascending
    })

    //Loading data in progress
    if(loading) return <h1>loading posts...</h1>

    if(posts.length===0) return <h3>No posts found</h3>

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
                    <Col md={7}>
                        <h6>Post Excerpt</h6>                     
                    </Col>
                    <Col md={1}>                
                    </Col>
                </Row>
                {
                    posts.map(post=> <ListData posts={posts} key={post.id} id={post.id} name={post} />)
                }
                
            </Container>

         </React.Fragment>                 
    )
}

export default Posts
