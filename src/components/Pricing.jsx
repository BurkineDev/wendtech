import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Site Vitrine',
    desc: 'Idéal pour démarrer votre présence en ligne',
    price: 'Sur devis',
    featured: false,
    features: ['5 à 10 pages', 'Design responsive', 'SEO de base', 'Formulaire de contact', '1 mois de support']
  },
  {
    name: 'Site E-commerce',
    desc: 'Pour vendre en ligne dès le premier jour',
    price: 'Sur devis',
    featured: true,
    features: ['Boutique complète', 'Gestion des produits', 'Paiements en ligne intégrés', 'Tableau de bord', '3 mois de support']
  },
  {
    name: 'Application Mobile',
    desc: 'Pour piloter votre activité partout',
    price: 'Sur devis',
    featured: false,
    features: ['Android & iOS', 'Gestion des stocks', 'Notifications push', 'Interface intuitive', '6 mois de support']
  }
]

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="pricing" id="forfaits" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Nos forfaits</span>
          <h2 className="section-title">
            Des offres claires, adaptées à <span className="hl">votre budget</span>
          </h2>
          <p className="section-desc">
            Chaque projet est unique : nous établissons un devis gratuit et sans engagement
            à partir de vos besoins réels.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              className={`card plan ${plan.featured ? 'featured' : ''}`}
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.featured && <span className="plan-tag">Le plus demandé</span>}
              <h3>{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>
              <div className="plan-price">{plan.price}</div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}><Check size={17} /> {feature}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                onClick={scrollToContact}
              >
                Demander un devis
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
