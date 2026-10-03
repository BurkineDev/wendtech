/**
 * Coordonnées et données partagées du site Wendtech.
 * Point unique à modifier pour les numéros, l'email et les réseaux.
 */

export const CONTACT = {
  phoneBF: { display: '+226 65 17 07 78', href: 'tel:+22665170778' },
  phoneCA: { display: '+1 819 219 0558', href: 'tel:+18192190558' },
  email:   { display: 'saristide99@wendtech.site', href: 'mailto:saristide99@wendtech.site' },
  whatsapp: {
    number: '22665170778',
    url: 'https://wa.me/22665170778?text=' +
      encodeURIComponent('Bonjour Wendtech ! Je souhaite avoir des informations sur vos services.')
  },
  location: 'Burkina Faso · Canada'
}

/** Immatriculation légale, affichée en pied de page. */
export const LEGAL = {
  rccm: 'BFBBD012025A1000864',
  ifu: '00268427X'
}

/**
 * Réseaux sociaux du pied de page.
 * Une entrée dont l'url vaut '#' n'est pas affichée : renseignez l'adresse
 * réelle pour faire apparaître l'icône.
 */
export const SOCIALS = [
  { label: 'Facebook', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'WhatsApp', url: CONTACT.whatsapp.url }
]

export const NAV_LINKS = [
  { id: 'accueil',   label: 'Accueil' },
  { id: 'produits',  label: 'Produits' },
  { id: 'secteurs',  label: 'Secteurs' },
  { id: 'services',  label: 'Services' },
  { id: 'apropos',   label: 'À propos' },
  { id: 'tarifs',    label: 'Tarifs' },
  { id: 'contact',   label: 'Contact' }
]

/** Mots-clés du bandeau défilant. */
export const MARQUEE_ITEMS = [
  'Odoo',
  'CRM',
  'Prise de rendez-vous',
  'CMS',
  'Mobile Money',
  'WhatsApp Business',
  'Applications mobiles',
  'Santé numérique',
  'Fintech',
  'AgriTech',
  'EdTech',
  'IA appliquée'
]

/** Chiffres du héro — animés de 0 à la valeur cible. */
export const STATS = [
  { value: 50, suffix: '+', label: 'projets réalisés' },
  { value: 40, suffix: '+', label: 'clients satisfaits' },
  { value: 5,  suffix: '+', label: "années d'expérience" }
]
