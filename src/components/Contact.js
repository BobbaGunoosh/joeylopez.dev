import React from 'react'

function Contact() {
    return (
        <section className='contact-page text-center '>
           <h1 className>Contact Me!</h1>
           <h3>I'm available for freelance work as well.</h3>
           <h3 className='lead'>Reach out to me so we can chat.</h3>
           <p className='email-link'><a href="mailto:inquiry@joey.lopez.dev">inquiry@joey.lopez.dev</a></p>
        <div  className='contact-links'>
          <ul className='links'>
              <li>
                 <a href="https://www.linkedin.com"  rel='noopener noreferrer' target='_blank'>Linked in</a>
              </li>
              <li>
                 <a href="https://wwww.github.com" rel='noopener noreferrer' target='_blank'>Github</a> 
              </li>
              <li>
                 <a href="https://www.medium.com" rel='noopener noreferrer' target='_blank'>Journal</a> 
              </li>
          </ul>
        </div>
        </section>
    )
}

export default Contact
