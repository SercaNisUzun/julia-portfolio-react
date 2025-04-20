import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutMe from '../pages/AboutMe'
import Maree from '../pages/Maree'

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='aboutme' element={<AboutMe />} />
        <Route path='maree' element={<Maree />} />
      </Routes>
    </div>
  )
}

export default RouterConfig
