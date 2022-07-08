import React from 'react';
import { About, Header, Footer, Testimonials, Work, Skills } from './container';
import { Nav } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
