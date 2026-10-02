import {
  Boxes, Contact, CalendarCheck, Monitor, ShoppingCart, Smartphone, Plug, Users, Compass, Asterisk
} from 'lucide-react'
import Reveal from './ui/Reveal'
import { Link } from 'react-router'
import { Eyebrow } from './ui/Bits'
import FloatingDecor from './ui/FloatingDecor'

const services = [
  {
    icon: Boxes,
    title: 'Implémentation Odoo',
    href: '/services/implementation-odoo',
    description: 'Ventes, stocks, facturation, comptabilité et RH réunis dans un seul outil de gestion.',
    features: [
      'Paramétrage selon vos processus',
      'Reprise de vos données existantes',
      'Modules sur mesure',
      'Formation de vos équipes'
    ]
  },
  {
    icon: Contact,
    title: 'CRM sur mesure',
    href: '/services/crm-sur-mesure',
    description: 'Suivre chaque prospect et chaque client, et ne plus oublier une relance.',
    features: [
      'Pipeline de prospects',
      'Historique complet par client',
      'Relances WhatsApp, SMS et courriel',
      'Tableau de bord des ventes'
    ]
  },
  {
    icon: CalendarCheck,
    title: 'Prise de rendez-vous',
    href: '/services/prise-de-rendez-vous',
    description: 'Un calendrier en ligne où vos clients réservent seuls, à toute heure.',
    features: [
      'Agenda par praticien ou service',
      'Rappels SMS et WhatsApp',
      'Acompte par Mobile Money',
      'Synchronisation Google Agenda'
    ]
  },
  {
    icon: Monitor,
    title: 'Sites web & CMS',
    href: '/services/creation-site-web',
    description: 'Des sites rapides que vous modifiez vous-même, sans dépendre de nous.',
    features: [
      'CMS simple à prendre en main',
      'Pages légères, rapides sur réseau lent',
      'Référencement naturel',
      'Domaine et hébergement à votre nom'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & vente sociale',
    href: '/services/site-e-commerce',
    description: 'Vendre en ligne comme on achète ici : via WhatsApp, TikTok et Instagram.',
    features: [
      'Commandes reçues sur WhatsApp',
      'Orange Money, Moov Money, Wave',
      'Paiement à la livraison',
      'Gestion des stocks et des commandes'
    ]
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    href: '/services/application-mobile',
    description: 'Apps Android et iOS pensées pour les téléphones réellement utilisés par vos clients.',
    features: [
      'Android en priorité, iOS si besoin',
      'Fonctionnement hors connexion',
      'Notifications push, SMS et WhatsApp',
      'Publication sur les stores'
    ]
  },
  {
    icon: Plug,
    title: 'Intégrations & IA appliquée',
    description: 'Connecter vos outils entre eux et automatiser les tâches répétitives.',
    features: [
      'API Mobile Money et paiement',
      'WhatsApp Business et SMS',
      'Assistants IA et chatbots',
      'Automatisation des tâches'
    ]
  },
  {
    icon: Users,
    title: "Plateforme d'inscriptions",
    href: '/services/plateforme-inscriptions',
    description: "Ouverture à heure fixe, quotas, file d'attente et anti-bot : stable même au rush.",
    features: [
      'Anti-surcharge',
      'Quotas automatiques',
      "File d'attente intelligente",
      'Prête pour le jour J'
    ]
  },
  {
    icon: Compass,
    title: 'Conseil, maintenance & suivi',
    description: 'Cadrer le projet avant de coder, puis le faire vivre une fois en ligne.',
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
          <h2 className="h2 split__title">Les outils dont votre PME a besoin aujourd'hui</h2>
          <p className="split__text">
            Gestion, relation client, rendez-vous, vente en ligne : une seule équipe, du cadrage
            à la mise en production, avec Mobile Money, WhatsApp et SMS intégrés.
          </p>
        </div>
      </Reveal>

      <div className="cards cards--3">
        {services.map((service, i) => (
          <Reveal
            className={`card${service.href ? ' card--hover' : ''}`}
            key={service.title}
            delay={(i % 3) * 0.07}
          >
            <div className="service__head">
              <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
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
