/**
 * Prérendu statique.
 *
 * Le site est une application cliente : le HTML livré ne contient qu'une
 * div vide. Google exécute le JavaScript, Bing beaucoup moins bien. Ce
 * script écrit, pour chaque route, un fichier HTML complet avec son
 * contenu et ses balises <head> propres.
 *
 * Exécuté par le script npm « build », après les deux builds Vite.
 */
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { ROUTES, SITE } from '../src/data/routeMeta.js'

const DIST = path.resolve('dist')
const SSR_ENTRY = path.resolve('dist-ssr/entry-server.js')

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')
const { render } = await import(pathToFileURL(SSR_ENTRY).href)

/** Remplace le contenu d'une balise meta/title/link déjà présente. */
const swap = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    console.warn('  ⚠ motif introuvable :', pattern)
    return html
  }
  return html.replace(pattern, replacement)
}

let written = 0

for (const route of ROUTES) {
  const url = SITE + route.path
  let html = template

  // Contenu rendu
  const body = render(route.path)
  html = swap(html, /<div id="root"><\/div>/, `<div id="root">${body}</div>`)

  // Balises propres à la page
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`)
  html = swap(html, /(<meta name="description" content=")[\s\S]*?(" \/>)/, `$1${route.description}$2`)
  html = swap(html, /(<link rel="canonical" href=")[\s\S]*?(" \/>)/, `$1${url}$2`)
  html = swap(html, /(<meta property="og:title" content=")[\s\S]*?(" \/>)/, `$1${route.title}$2`)
  html = swap(html, /(<meta property="og:description" content=")[\s\S]*?(" \/>)/, `$1${route.description}$2`)
  html = swap(html, /(<meta property="og:url" content=")[\s\S]*?(" \/>)/, `$1${url}$2`)
  html = swap(html, /(<meta name="twitter:title" content=")[\s\S]*?(" \/>)/, `$1${route.title}$2`)
  html = swap(html, /(<meta name="twitter:description" content=")[\s\S]*?(" \/>)/, `$1${route.description}$2`)

  const out =
    route.path === '/'
      ? path.join(DIST, 'index.html')
      : path.join(DIST, route.path.replace(/^\//, ''), 'index.html')

  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  written++
  console.log(`  ${route.path.padEnd(34)} → ${path.relative(DIST, out)}  (${Math.round(body.length / 1024)} Ko de contenu)`)
}

console.log(`Prérendu : ${written} page(s).`)
