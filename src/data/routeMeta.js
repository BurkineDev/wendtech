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
    title: "Logiciels, applications et SaaS pour l'Afrique de l'Ouest | Wendtech",
    description:
      "Wendtech conçoit applications, plateformes et SaaS pour l'Afrique de l'Ouest : " +
      'Mobile Money, WhatsApp, santé, finance, commerce, agriculture, éducation. Devis gratuit.',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/services/creation-site-web',
    title: 'Création de site web pour PME | Wendtech',
    description:
      'Sites rapides et administrables (CMS), responsives et optimisés pour le référencement. ' +
      'Conçus pour convertir vos visiteurs en clients. Devis gratuit sous 48 h.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/site-e-commerce',
    title: 'Création de boutique en ligne et site e-commerce | Wendtech',
    description:
      'Boutiques en ligne complètes : commandes sur WhatsApp, paiement Orange Money, ' +
      'Moov Money, Wave ou à la livraison, gestion des stocks. Vendez en ligne sans friction.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/application-mobile',
    title: "Développement d'application mobile Android et iOS | Wendtech",
    description:
      'Applications Android et iOS pensées pour la région : Mobile Money, fonctionnement ' +
      'hors connexion, notifications SMS et WhatsApp. Support inclus.',
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
    path: '/services/implementation-odoo',
    title: "Implémentation Odoo pour PME en Afrique de l'Ouest | Wendtech",
    description:
      'Installation, paramétrage et formation Odoo : ventes, stocks, facturation, ' +
      'comptabilité et RH. Reprise de vos données et intégration Mobile Money.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/crm-sur-mesure',
    title: 'CRM sur mesure pour PME | Wendtech',
    description:
      'Pipeline de prospects, historique client et relances par WhatsApp, SMS et courriel. ' +
      'Un CRM adapté à votre cycle de vente, avec accès mobile.',
    priority: '0.9',
    changefreq: 'monthly'
  },
  {
    path: '/services/prise-de-rendez-vous',
    title: 'Prise de rendez-vous en ligne avec rappels SMS et WhatsApp | Wendtech',
    description:
      'Calendrier de réservation en ligne pour cliniques, cabinets et salons : rappels ' +
      'automatiques par SMS et WhatsApp, acompte par Mobile Money.',
    priority: '0.9',
    changefreq: 'monthly'
  }
]
