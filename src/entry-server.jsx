import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

/**
 * Point d'entrée du prérendu.
 * Rend une route en HTML statique, injecté ensuite dans dist/ par
 * scripts/prerender.mjs. Voir le script npm « build ».
 */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
