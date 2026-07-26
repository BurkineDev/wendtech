/**
 * Génère dist/sitemap.xml à partir de src/data/routeMeta.js,
 * pour qu'il ne puisse plus diverger des routes réellement publiées.
 *
 * Exécuté par le script npm « build », après le prérendu.
 */
import fs from 'node:fs'
import path from 'node:path'
import { ROUTES, SITE } from '../src/data/routeMeta.js'

const today = new Date().toISOString().slice(0, 10)

const urls = ROUTES.map((r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const out = path.resolve('dist/sitemap.xml')
fs.writeFileSync(out, xml)
console.log(`Sitemap : ${ROUTES.length} URL écrites dans ${path.relative(process.cwd(), out)}`)
