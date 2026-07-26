import { useEffect } from 'react'

const SITE = 'https://www.wendtech.site'

/** Crée la balise si elle n'existe pas encore, puis met à jour son contenu. */
const setMeta = (selector, attr, value, content) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/**
 * Applique titre, description et URL canonique propres à la page affichée.
 *
 * Le site étant une application cliente, toutes les routes partagent le
 * <head> de index.html : sans cela, /ebooks hériterait du titre et de la
 * description de l'accueil, que les moteurs traitent comme du duplicata.
 *
 *   path  chemin de la page, ex. '/ebooks'
 */
const useDocumentMeta = ({ title, description, path = '/' }) => {
  useEffect(() => {
    const url = SITE + path

    document.title = title

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [title, description, path])
}

export default useDocumentMeta
