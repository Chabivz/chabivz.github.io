import React, {useState, useEffect} from 'react';
import GridLoader from 'react-spinners/GridLoader';
import { Footer, Work, Header, Chabivz, Experience } from './container';
import { Navbar } from './components';
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
        <div className='gradient__bg tracking-in-contract-bck'>
          <Navbar />
          <Header />
        </div>
        <Chabivz />
        <Experience />
        <Work />
        <Footer />
        </div>
      }
    </div>
  )
}

export default App