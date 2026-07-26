import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router'
import App from './App'
import './styles/index.css'

// En production le site est servi à la racine : routeur classique.
// L'aperçu en fichier unique (vite.config.singlefile.js) est ouvert depuis
// une URL quelconque — il bascule alors sur un routeur à ancre.
const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

// Le build produit du HTML prérendu (scripts/prerender.mjs) : on l'hydrate
// au lieu de le jeter. En développement le conteneur est vide.
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
