import { useState } from 'react'
import Header from './assets/components/Header'
import Body from './assets/components/Body'
import Footer from './assets/components/Footer'

import './App.css'

function App() {


  return (
    <div id='page-container'>
      <div id="content-wrap">
        <Header/>
        <Body/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
