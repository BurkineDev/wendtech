import { Monitor, Smartphone, ShoppingCart, Plug, Users, Compass, Asterisk } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Link } from 'react-router'
import { Eyebrow } from './ui/Bits'
import FloatingDecor from './ui/FloatingDecor'

const services = [
  {
    number: '01',
    icon: Monitor,
    title: 'Plateformes & sites web',
    href: '/services/creation-site-web',
    description: 'Sites, plateformes métiers et SaaS rapides, même sur une connexion 3G.',
    features: [
      'Paiement Mobile Money et carte intégré',
      'Pages légères, rapides sur réseau lent',
      'Référencement naturel',
      'Domaine et hébergement à votre nom'
    ]
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Applications mobiles',
    href: '/services/application-mobile',
    description: "Apps Android et iOS pensées pour les téléphones réellement utilisés par vos clients.",
    features: [
      'Android en priorité, iOS si besoin',
      'Fonctionnement hors connexion',
      'Notifications push, SMS et WhatsApp',
      'Publication sur les stores'
    ]
  },
  {
    number: '03',
    icon: ShoppingCart,
    title: 'E-commerce & vente sociale',
    href: '/services/site-e-commerce',
    description: 'Vendre en ligne comme on achète ici : via WhatsApp, TikTok et Instagram.',
    features: [
      'Commandes reçues sur WhatsApp',
      'Orange Money, Moov Money, Wave',
      'Livraison et paiement à la livraison',
      'Gestion des stocks et des commandes'
    ]
  },
  {
    number: '04',
    icon: Plug,
    title: 'Intégrations & IA appliquée',
    description: 'Connecter vos outils aux services qui comptent dans la région, et automatiser le reste.',
    features: [
      'API Mobile Money et passerelles de paiement',
      'WhatsApp Business et envoi de SMS',
      'Assistants IA et chatbots WhatsApp',
      'Automatisation de tâches répétitives'
    ]
  },
  {
    number: '05',
    icon: Users,
    title: "Plateforme d'inscriptions",
    href: '/services/plateforme-inscriptions',
    description: "Ouverture à heure fixe, quotas, file d'attente et anti-bot : une plateforme stable même au rush.",
    features: [
      'Anti-surcharge',
      'Quotas automatiques',
      "File d'attente intelligente",
      'Prête pour le jour J'
    ]
  },
  {
    number: '06',
    icon: Compass,
    title: 'Conseil, maintenance & suivi',
    description: "Cadrer le projet avant de coder, puis le faire vivre une fois en ligne.",
    features: [
      'Audit et cadrage de projet',
      'Protection des données personnelles',
      'Maintenance, sauvegardes et sécurité',
      'Formation de vos équipes'
    ]
  }
]

const Services = () => (
  <section className="section has-decor" id="services">
    <FloatingDecor src="/decor/glow-shape.svg" className="decor--left" parallax={60} pulse />

    <div className="container">
      <Reveal><Eyebrow>Nos expertises</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <div className="split">
          <h2 className="h2 split__title">Ce que nous construisons pour vous</h2>
          <p className="split__text">
            Une seule équipe, du cadrage à la mise en production, avec les intégrations
            dont la sous-région a besoin : Mobile Money, WhatsApp, SMS, hors connexion.
          </p>
        </div>
      </Reveal>

      <div className="cards cards--3">
        {services.map((service, i) => (
          <Reveal
            className={`card${service.href ? ' card--hover' : ''}`}
            key={service.number}
            delay={(i % 3) * 0.07}
          >
            <div className="service__head">
              <span className="service__num">{service.number}</span>
              <span className="service__icon">
                <service.icon size={26} strokeWidth={2} />
              </span>
            </div>
            <h3 className="h3">{service.title}</h3>
            <p className="muted">{service.description}</p>
            <ul className="service__features">
              {service.features.map((feature) => (
                <li key={feature}>
                  <Asterisk size={14} strokeWidth={2.6} />
                  {feature}
                </li>
              ))}
            </ul>
            {service.href && (
              <Link className="link-accent" to={service.href}>En savoir plus</Link>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Services
