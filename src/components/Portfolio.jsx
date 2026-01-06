import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShoppingCart, Store, Building2, Smartphone, Globe, Code } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Sites Vitrines',
    description: 'Présentez votre entreprise avec un site moderne et professionnel.',
    color: '#00f0ff'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Vendez vos produits en ligne avec paiement mobile money intégré.',
    color: '#a855f7'
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Apps Android/iOS pour gérer votre activité où que vous soyez.',
    color: '#ffa726'
  },
  {
    icon: Store,
    title: 'Gestion de Stocks',
    description: 'Suivez vos inventaires et évitez les ruptures de stock.',
    color: '#10b981'
  },
  {
    icon: Code,
    title: 'Solutions Sur Mesure',
    description: 'Développement personnalisé selon vos besoins spécifiques.',
    color: '#ef4444'
  },
  {
    icon: Building2,
    title: 'Transformation Digitale',
    description: 'Accompagnement complet pour digitaliser votre entreprise.',
    color: '#6366f1'
  }
]

const Portfolio = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="portfolio" id="portfolio">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="section-tag">Nos Expertises</span>
        <h2 className="section-title">
          Ce Que Nous <span className="gradient">Réalisons</span>
        </h2>
        <p className="section-desc">
          Des solutions digitales adaptées aux besoins des PME burkinabè.
        </p>
      </motion.div>

      <div className="portfolio-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="portfolio-item-simple"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div 
              className="portfolio-icon" 
              style={{ background: `${service.color}20`, color: service.color }}
            >
              <service.icon size={32} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="portfolio-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
      >
        <p>Vous avez un projet en tête ?</p>
        <a href="#contact" className="btn btn-primary">
          Demander un Devis Gratuit
        </a>
      </motion.div>
    </section>
  )
}

export default Portfolio
