import React from 'react';
import Logo from './my-village-logo-01.svg'
import './sidebar.css'
import {Container, Row, Col, Nav } from 'react-bootstrap'
import {Home, People, LibraryBooks, Work, Event, LocalFlorist} from '@material-ui/icons';
import { Link } from 'react-router-dom';


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
          
            <Nav className='nav'>
              <Link 
              to={'/'} className='nav-link'><Home/><span>Dashboard</span></Link>
               <Link 
               to={'/members'} className='nav-link'><People/><span>Members</span></Link>
               <Link
               to={'/startups'} className='nav-link'><LocalFlorist/><span>Start ups</span></Link> 
               <Link
               to={'/posts'} className='nav-link'><LibraryBooks/><span>Posts</span></Link>
               <Link
               to={'/jobs'} className='nav-link'><Work/><span>Jobs</span></Link> 
               <Link
               to={'/events'} className='nav-link'><Event/><span>Events</span></Link> |{" "}
            </Nav>
          </Col>
        </Row>
      </Container>
      
  </div>
  )
}
