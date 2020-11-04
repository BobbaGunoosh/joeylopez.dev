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
          <span className="tag tag-red"><a href="https://www.github.com" >Live Site</a></span>
          <h4>Github Finder</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            odit atque cumque eaque eius quos ad possimus consequatur, molestiae
            pariatur a, non nemo unde quis recusandae eos minima incidunt
            veritatis.
          </p>
          <div className="user">
            <img src={two} alt="" />
            <div className="user-info">
              <h5>Made with React</h5>
              <small>Also HTML5</small>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-header">
          <img src={three} alt="" />
        </div>
        <div className="project-card-body">
          <span className="tag tag-blue"><a href="https://wwww.github.com" >Live Site</a></span>
          <h4>CRUD APP</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            odit atque cumque eaque eius quos ad possimus consequatur, molestiae
            pariatur a, non nemo unde quis recusandae eos minima incidunt
            veritatis.
          </p>
          <div className="user">
             <img src={two} alt="" />
            <div className="user-info">
              <h5>Made with React</h5>
              <small>Also HTML5</small>
            </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-header">
          <img src={five} alt="" />
        </div>
        <div className="project-card-body">
          <span className="tag tag-dark"><a href="https://www.github.com" >Live Site</a></span>
          <h4>You Don't Know Jack</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            odit atque cumque eaque eius quos ad possimus consequatur, molestiae
            pariatur a, non nemo unde quis recusandae eos minima incidunt
            veritatis.
          </p>
          <div className="user">
             <img src={two} alt="" />
            <div className="user-info">
              <h5>Made with React</h5>
              <small>Also HTML5</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Projects
