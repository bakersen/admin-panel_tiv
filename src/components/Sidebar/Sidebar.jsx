/* eslint-disable */


import React from 'react';
import Logo from './my-village-logo-01.svg'
import './Sidebar.css'
import {Container, Row, Col, Nav } from 'react-bootstrap'
import {Home, People, LibraryBooks, Work, Event, LocalFlorist} from '@material-ui/icons';

export default function Sidebar() {
  return (
  <div className="left-panel">
      <Container fluid className="vh-100">
        <Row>
          <Col className="">
            <img src={Logo} alt="My Village Logo" className="mx-auto d-block" />
            <h4 className="admin-text">Admin Dashboard</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav>
              <Nav.Link><Home/><span>Dashboard</span></Nav.Link>
               <Nav.Link><People/><span>Members</span></Nav.Link>
               <Nav.Link><LocalFlorist/><span>Start ups</span></Nav.Link> 
               <Nav.Link><LibraryBooks/><span>Posts</span></Nav.Link>
               <Nav.Link><Work/><span>Jobs</span></Nav.Link> 
               <Nav.Link><Event/><span>Events</span></Nav.Link> 
            </Nav>
          </Col>
        </Row>
      </Container>
  </div>
  )
}
