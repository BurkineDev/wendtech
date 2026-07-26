import { Asterisk } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Eyebrow, PillButton } from './ui/Bits'

const pricingPlans = [
  {
    name: 'Site Vitrine',
    description: 'Idéal pour démarrer',
    price: 'Sur devis',
    features: ['5-10 pages', 'Design responsive', 'SEO basique', 'Formulaire de contact', '1 mois de support'],
    featured: false
  },
  {
    name: 'Site E-commerce',
    description: 'Pour vendre en ligne',
    price: 'Sur devis',
    features: ['Boutique complète', 'Gestion produits', 'Paiements en ligne intégrés', 'Tableau de bord', '3 mois de support'],
    featured: true
  },
  {
    name: 'App Mobile',
    description: 'Pour votre activité',
    price: 'Sur devis',
    features: ['Android & iOS', 'Gestion stocks', 'Notifications push', 'Interface intuitive', '6 mois de support'],
    featured: false
  }
]

const Pricing = () => {
  const goToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="section" id="tarifs">
      <div className="container">
        <Reveal><Eyebrow>Nos tarifs</Eyebrow></Reveal>

        <Reveal delay={0.05}>
          <div className="split">
            <h2 className="h2 split__title">Packs PME</h2>
            <p className="split__text">
              Des offres adaptées à tous les budgets pour démarrer votre transformation
              digitale. Chaque projet est chiffré après un échange gratuit.
            </p>
          </div>
        </Reveal>

        <div className="cards cards--3">
          {pricingPlans.map((plan, i) => (
            <Reveal
              className={`card plan${plan.featured ? ' plan--featured' : ''}`}
              key={plan.name}
              delay={(i % 3) * 0.07}
            >
              {plan.featured && <span className="plan__badge">Le plus demandé</span>}
              <h3 className="h3">{plan.name}</h3>
              <p className="muted">{plan.description}</p>
              <p className="plan__price">{plan.price}</p>
              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Asterisk size={14} strokeWidth={2.6} />
                    {feature}
                  </li>
                ))}
              </ul>
              <PillButton href="#contact" onClick={goToContact} variant="btn--block">
                Demander un devis
              </PillButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
