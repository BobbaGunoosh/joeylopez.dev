import React from 'react'
import { Navbar } from 'react-bootstrap'
import { FiHeart } from 'react-icons/fi'


function Footer() {
    return (
        <Navbar  className=' fixed-bottom port-footer justify-content-start'>
           <p>Made with <FiHeart color='red' />  by Joey Lopez</p>
        </Navbar>
    )
}

export default Footer
