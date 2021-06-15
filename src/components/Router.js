import React from 'react'
import {auto} from './Layout.module.css'
import logo from './imagess/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav} from 'react-bootstrap'

export default function Router() {
  return (
    <div>
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/"> <img className="d-block w-10" src={logo} alt="fireSpot" width="200px"/>
      </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className={auto} href="/"> Home</Nav.Link>
                <Nav.Link className={auto} href="/subfolder/business"> Business</Nav.Link>
                <Nav.Link href="/subfolder/about">About Us</Nav.Link>
            <Nav.Link href="/subfolder/explore">Explore </Nav.Link>
              
          </Nav>
                
        </Navbar.Collapse>
      </Navbar>


    </div>
  )
}
