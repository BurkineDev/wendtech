import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const pricingPlans = [
  {
    name: 'Site Vitrine',
    description: 'Idéal pour démarrer',
    price: '500 000',
    currency: 'FCFA',
    features: [
      '5-10 pages',
      'Design responsive',
      'SEO basique',
      'Formulaire de contact',
      '1 mois de support'
    ],
    featured: false
  },
  {
    name: 'Site E-commerce',
    description: 'Pour vendre en ligne',
    price: '1 500 000',
    currency: 'FCFA',
    features: [
      'Boutique complète',
      'Gestion produits',
      'Paiement mobile money',
      'Tableau de bord',
      '3 mois de support'
    ],
    featured: true
  },
  {
    name: 'App Mobile',
    description: 'Pour les marchés',
    price: '2 000 000',
    currency: 'FCFA',
    features: [
      'Android & iOS',
      'Gestion stocks',
      'Notifications push',
      'Interface intuitive',
      '6 mois de support'
    ],
    featured: false
  }
]

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const handleClick = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pricing" id="tarifs">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Nos Tarifs</span>
        <h2 className="section-title">
          Packs <span className="gradient">PME</span>
        </h2>
        <p className="section-desc">
          Des offres adaptées à tous les budgets pour démarrer votre transformation digitale.
        </p>
      </motion.div>

      <motion.div
        className="pricing-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="pricing-name">{plan.name}</div>
            <div className="pricing-desc">{plan.description}</div>
            <div className="pricing-price">
              <span className="amount">{plan.price}</span>
              <span className="currency"> {plan.currency}</span>
            </div>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
              style={{ width: '100%' }}
              onClick={handleClick}
            >
              Choisir
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Pricing
