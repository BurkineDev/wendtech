/**
 * Routes prérendues et métadonnées associées.
 *
 * Une seule source de vérité, consommée par :
 *   - scripts/prerender.mjs   (HTML statique et balises <head>)
 *   - scripts/sitemap.mjs     (public/sitemap.xml)
 *   - src/components/*        (métadonnées côté client)
 *
 * Les mêmes titres et descriptions sont repris côté client par
 * useDocumentMeta, pour que navigation et prérendu restent cohérents.
 */
export const SITE = 'https://www.wendtech.site'

export const ROUTES = [
  {
    path: '/',
    title: 'Agence de développement web et mobile | Wendtech',
    description:
      "Wendtech conçoit sites web, boutiques en ligne et applications mobiles pour les PME. " +
      "Consulting digital, maintenance et plateformes d'inscriptions. Devis gratuit.",
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/services/creation-site-web',
    title: 'Création de site web pour PME | Wendtech',
    description:
      'Sites vitrines rapides, responsives et optimisés pour le référencement. ' +
      'Conçus pour convertir vos visiteurs en clients. Devis gratuit sous 48 h.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/site-e-commerce',
    title: 'Création de boutique en ligne et site e-commerce | Wendtech',
    description:
      'Boutiques en ligne complètes : catalogue produits, paiements intégrés, ' +
      'gestion des stocks et tableau de bord. Vendez en ligne sans friction.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/application-mobile',
    title: "Développement d'application mobile Android et iOS | Wendtech",
    description:
      'Applications mobiles natives et hybrides pour gérer vos stocks, vos ventes ' +
      'et vos services. Interface intuitive, paiements intégrés, support inclus.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/plateforme-inscriptions',
    title: "Plateforme d'inscriptions en ligne anti-surcharge | Wendtech",
    description:
      "Ouverture à heure fixe, quotas automatiques, file d'attente et anti-bot. " +
      'Une plateforme qui tient la charge le jour J, même au pic de connexions.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/ebooks',
    title: 'Le Développeur Augmenté — ebook gratuit | Wendtech',
    description:
      "Guide pratique gratuit pour apprendre à penser avec l'IA plutôt que lui demander " +
      'du code : 12 chapitres, frameworks actionnables et cas réels africains.',
    priority: '0.8',
    changefreq: 'monthly'
  }
]
