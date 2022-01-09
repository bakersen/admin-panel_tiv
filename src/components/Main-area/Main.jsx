import React from 'react'
import './main.css';
import {Container, Row, Col} from 'react-bootstrap'
import EnhancedTable from './table';



export default function Main() {
    return (
        <Container className="main-area">
            <Row>
                <Col className="box" md={12}>
                   <EnhancedTable /> 
                </Col>
            </Row>
        </Container>

    )
}