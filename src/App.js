import React, {useState, useEffect} from 'react';
import GridLoader from 'react-spinners/GridLoader';
import { Footer, Blog, Possibility, Header, WhatGPT3, Features } from './container';
import { CTA, Navbar } from './components';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className='App'>
      {
        loading ? 
        <div className='app__grid-loader'>
        <GridLoader
          color="#bf73d5"
          cssOverride={{}}
          loading
          margin={30}
          size={30}
          speedMultiplier={1}
          width={30}
        />
        </div>
        :
        <div>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        </div>
      }
    </div>
  )
}

export default App