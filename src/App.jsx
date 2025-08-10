import { useState } from 'react'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import MetaHelmet from './components/MetaHelmet'

function App() {

  return (
    <>
      <ScrollToTop />
      <MetaHelmet />
      <Header />
      <main>
        <RouterConfig />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App
