import { Cta, Brand, Navbar } from './components'
import { Blog, Footer, Possibility, Features, WhatGPT, Header } from './containers'
import './App.css'

function App () {
  return (
    <div className='App' id='#'>
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
