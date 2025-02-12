import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
//import backgroundImage from 'passbook/ppp.avif'

function App() {
  return (
    <>
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${"ppp.avif"})`}}>
    <Nav/>
    <Main/>
    </div>
    </>
  )
}

export default App
