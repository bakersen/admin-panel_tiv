import React from 'react'
import{Row,Col, Container} from 'react-bootstrap'
import Moment from 'react-moment';
import './list.css';
import {DeleteOutline} from '@material-ui/icons';
import Checkboxes from './Checkboxes';


export default function List({job, handleDelete, setJobs}) {
    
    
    return (
        <>
            
              <Container>
                <Row className="jobs-row">
                        <Col md={1}>
                            <Checkboxes />
                        </Col>
                        <Col md={3}>
                            <p>{job.companyName}</p>
                        </Col>
                        <Col md={2}>
                            <p>{job.jobTitle}</p>
                        </Col>
                        <Col md={2}>
                        <p><Moment format="D-MMM-Y">{job.date}</Moment></p>
                        </Col>
                        <Col md={2}>
                            <p>{job.Deadline}</p>
                        </Col>
                        <Col md={2}>
                            <DeleteOutline 
                            onClick={() => handleDelete(job.id)}
                            role='button'
                            />
                        </Col>
                </Row>
              </Container>
            
        </>
    )
}
