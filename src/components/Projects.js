import React from 'react'
import '../App.css'
import one from '../assets/github-port.png'
import two from '../assets/react.png'
import three from '../assets/crud.png'
import five from '../assets/jack-port.png'

function Projects() {
    return (
<div className='project'>
    <div className="project-container">
      <div className="project-card">
        <div className="project-card-header">
          <img src={one} alt="" />
        </div>
        <div className="project-card-body">
          <span className="tag tag-red"><a href="https://githubfinderbobbagunoosh.netlify.app/" rel='noopener noreferrer' target='_blank' >Live Site</a></span>
          <h4>Github Finder</h4>
          <p>
            React application to search for users using Githubs API. <br />
            Application uses Context API and useContext for state management.
          </p>
          <div className="user">
            <img src={two} alt="" />
            <div className="user-info">
              <h5>Made with React</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-header">
          <img src={three} alt="" />
        </div>
        <div className="project-card-body">
          <span className="tag tag-blue"><a href="https://crudport.netlify.app/" rel='noopener noreferrer' target='_blank' >Live Site</a></span>
          <h4>CRUD APP</h4>
          <p>
           Front-end web application used for the purpose of using CRUD procedures. 
          </p>
          <div className="user">
             <img src={two} alt="" />
            <div className="user-info">
              <h5>Made with React</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-header">
          <img src={five} alt="" />
        </div>
        <div className="project-card-body">
          <span className="tag tag-dark"><a href="https://youdontknowjack.netlify.app/" rel='noopener noreferrer' target='_blank' >Live Site</a></span>
          <h4>You Don't Know Jack</h4>
          <p>
            Simple Quiz Application built with React Hooks.
          </p>
          <div className="user">
             <img src={two} alt="" />
            <div className="user-info">
              <h5>Made with React</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Projects
