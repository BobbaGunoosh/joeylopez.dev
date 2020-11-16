import React from 'react'
import { FaRegEnvelope, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

function Contact() {
    return (
      <section className='contact-page text-center '>
           <h1 className>Contact Me!</h1>
           <h3>I'm available for freelance work as well.</h3>
           <h3 className='lead'>Reach out to me so we can chat.</h3>
           <p className='email-link'><a href="mailto:inquiry@joeylopez.dev"><span className='icon'><FaRegEnvelope /> inquiry@joeylopez.dev </span></a></p>
        <div  className='contact-links'>
          <ul className='links'>
              <li>
                 <a href="https://www.linkedin.com/in/joeylopez0587/"  rel='noopener noreferrer' target='_blank'> <FaLinkedinIn color='red' size='2em' /> </a>
              </li>
              <li>
                 <a href="https://github.com/BobbaGunoosh" rel='noopener noreferrer' target='_blank'> <FaGithubAlt color='red' size='2em' /> </a> 
              </li>
          </ul>
        </div>
      </section>
    )
}

export default Contact
