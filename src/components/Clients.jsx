import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const clients = [
  {
    name: 'Camelot Traiteur',
    logo: '/clients/camelot.png',
    sector: 'Traiteur & Livraison'
  },
  {
    name: 'GlobalPC',
    logo: '/clients/globalpc.webp',
    sector: 'Informatique'
  },
  {
    name: 'Hanh Travel',
    logo: '/clients/hanh-travel.png',
    sector: 'Tourisme'
  },
  {
    name: 'DABO Avocat',
    logo: '/clients/dabo-avocat.webp',
    sector: 'Cabinet Juridique'
  },
  {
    name: 'Peintre Intérieur Québec',
    logo: '/clients/peintre-quebec.png',
    sector: 'Rénovation'
  }
]

const Clients = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="clients" id="clients">
      <motion.div
        ref={ref}
        className="clients-container"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Nos Partenaires</span>
        <h2 className="section-title">
          Ils Nous Font <span className="gradient">Confiance</span>
        </h2>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <img 
                src={client.logo} 
                alt={`Logo ${client.name}`}
                loading="lazy"
                width="180"
                height="80"
              />
              <span className="client-sector">{client.sector}</span>
            </motion.div>
          ))}
        </div>

        <p className="clients-cta">
          Rejoignez nos clients satisfaits et boostez votre présence digitale !
        </p>
      </motion.div>
    </section>
  )
}

export default Clients
