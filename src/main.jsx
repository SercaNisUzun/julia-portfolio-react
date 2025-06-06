import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './scss/Main.scss'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/julia-portfolio-react">
    <App />
  </BrowserRouter>,
)
