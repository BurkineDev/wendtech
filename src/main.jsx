import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

// En production le site est servi à la racine : routeur classique.
// L'aperçu en fichier unique (vite.config.singlefile.js) est ouvert depuis
// une URL quelconque — il bascule alors sur un routeur à ancre.
const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
