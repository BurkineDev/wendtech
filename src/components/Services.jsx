import { Monitor, Smartphone, BarChart3, Wrench, Users, Asterisk } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Eyebrow } from './ui/Bits'

const services = [
  {
    number: '01',
    icon: Monitor,
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce et plateformes personnalisées pour une présence en ligne professionnelle.',
    features: [
      'Sites responsive (mobile-friendly)',
      'Optimisation SEO',
      'Design moderne et attractif',
      'Performance optimale'
    ]
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Apps Android/iOS pour gestion de stocks, ventes en ligne ou services marchands.',
    features: [
      'Applications natives et hybrides',
      'Interface intuitive',
      'Intégration passerelles de paiement',
      'Support et maintenance'
    ]
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Consulting Digital',
    description: 'Stratégie numérique, marketing digital et formation pour digitaliser votre entreprise.',
    features: [
      'Audit digital complet',
      'Stratégie marketing',
      'Formation équipes',
      'Accompagnement personnalisé'
    ]
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Maintenance & Hébergement',
    description: 'Suivi technique continu, mises à jour et sécurité pour vos solutions digitales.',
    features: [
      'Hébergement sécurisé',
      'Sauvegardes automatiques',
      'Mises à jour régulières',
      'Support technique 24/7'
    ]
  },
  {
    number: '05',
    icon: Users,
    title: "Plateforme d'Inscriptions",
    description: "Ouverture à heure fixe, quota automatique, file d'attente et anti-bot : une plateforme stable même au rush.",
    features: [
      'Anti-surcharge garantie',
      'Quotas automatiques',
      "File d'attente intelligente",
      'Jour J prêt'
    ]
  }
]

const Services = () => (
  <section className="section section--alt has-decor" id="services">
    <img className="decor decor--left" src="/decor/glow-shape.svg" alt="" aria-hidden="true" loading="lazy" />

    <div className="container">
      <Reveal><Eyebrow>Nos expertises</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <div className="split">
          <h2 className="h2 split__title">Des services numériques pour faire grandir votre entreprise</h2>
          <p className="split__text">
            Du code à la visibilité : une seule équipe pour votre site, vos applications,
            vos outils internes et votre stratégie digitale.
          </p>
        </div>
      </Reveal>

      <div className="cards cards--3">
        {services.map((service, i) => (
          <Reveal className="card card--hover" key={service.number} delay={(i % 3) * 0.07}>
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
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Services
