import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Cartoon from '../assets/cartoon.jpg'
import '../App'


function Home() {

    return (
        <Container className='hero text-center'>
           <h1 className="hero-title">Hi. I'm <span>Joey</span></h1> 
           <h4>A Web Developer</h4>     
            <p className="hero_sub lead">This is where I will give a brief description about myself. Try to keep it to two sentences.</p>
          <section>
             <Image
              src={Cartoon}
              alt=''
              fluid />
          </section>         
        </Container>
    )
}

export default Home
