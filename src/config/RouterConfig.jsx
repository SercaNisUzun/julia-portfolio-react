import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutMe from '../pages/AboutMe'

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='aboutme' element={<AboutMe />} />
      </Routes>
    </div>
  )
}

export default RouterConfig
