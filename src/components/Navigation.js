import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App'

function Navigation() {
    return (
        <Navbar className='port-nav justify-content-around ' >
            <Nav variant='pills ' defaultActiveKey='1'>
                <Nav.Item>
                    <Nav.Link as={Link} to='/' eventKey='1'><strong>Home</strong></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/projects'  eventKey='2'><strong>Projects</strong></Nav.Link></Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to='/contact' eventKey='3'><strong>Contact</strong></Nav.Link>
                </Nav.Item>
            </Nav>  
        </Navbar>
    )
}

export default Navigation
