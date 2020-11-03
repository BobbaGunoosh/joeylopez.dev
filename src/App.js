import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Container className='main'>
     <Navigation />
     <Route path='/' exact component={Home} />
     <Route path='/projects' component={Projects} />
     <Route path='/Contact' component={Contact} />
     <Footer />    
    </Container>
    
  );
}

export default App;
