
import React from 'react';
import './Main.css';
import {Container, Row, Col} from 'react-bootstrap'
import Content from '../content-card/ContentCard';

export default function Main() {

   return (
        <Container className="main-area">
            <Row>
                <Col className="box" md={12}>
                    <Content/>
                </Col>
            </Row>
        </Container>
    )
}
