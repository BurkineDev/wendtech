/**
 * Coordonnées et données partagées du site Wendtech.
 * Point unique à modifier pour les numéros, l'email et les réseaux.
 */

export const CONTACT = {
  phoneBF: { display: '+226 65 17 07 78', href: 'tel:+22665170778' },
  phoneCA: { display: '+1 819 219 0558', href: 'tel:+18192190558' },
  email:   { display: 'saristide99@gmail.com', href: 'mailto:saristide99@gmail.com' },
  whatsapp: {
    number: '22665170778',
    url: 'https://wa.me/22665170778?text=' +
      encodeURIComponent('Bonjour Wendtech ! Je souhaite avoir des informations sur vos services.')
  },
  location: 'Burkina Faso · Canada'
}

export const SOCIALS = [
  { label: 'Facebook', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'WhatsApp', url: CONTACT.whatsapp.url }
]

export const NAV_LINKS = [
  { id: 'accueil',   label: 'Accueil' },
  { id: 'apropos',   label: 'À propos' },
  { id: 'services',  label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'tarifs',    label: 'Tarifs' },
  { id: 'ebooks',    label: 'Ebooks' },
  { id: 'contact',   label: 'Contact' }
]

/** Mots-clés du bandeau défilant. */
export const MARQUEE_ITEMS = [
  'Développement Web',
  'Applications Mobiles',
  'Consulting Digital',
  'E-commerce',
  "Plateforme d'Inscriptions",
  'Maintenance & Hébergement'
]

/** Chiffres du héro — animés de 0 à la valeur cible. */
export const STATS = [
  { value: 50, suffix: '+', label: 'projets réalisés' },
  { value: 40, suffix: '+', label: 'clients satisfaits' },
  { value: 5,  suffix: '+', label: "années d'expérience" }
]
