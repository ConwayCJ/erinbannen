import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Projects from './Projects';
import TrainingExamples from './TrainingExamples';


function App() {

  return (
    <div className='appWrapper'>
      <LandingPage />
      <Portfolio />
      <Projects />
      <TrainingExamples />
      <div className='footerWrapper'>
        <NavBar />
      </div>
    </div>
  )
}

export default App
