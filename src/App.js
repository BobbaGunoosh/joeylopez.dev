import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

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
