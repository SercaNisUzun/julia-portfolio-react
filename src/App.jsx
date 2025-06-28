import { useState } from 'react'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <RouterConfig />
      </main>
      <Footer />
    </>
  )
}

export default App
