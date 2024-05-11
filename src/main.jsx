import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


window.onscroll = () => {
  document.querySelector('#menu-bars').classList.remove('fa-times');
  document.querySelector('nav').classList.remove('active');
}