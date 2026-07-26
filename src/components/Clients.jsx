import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const clients = [
  { name: 'Camelot Traiteur', logo: '/clients/camelot.png', sector: 'Traiteur & Livraison' },
  { name: 'GlobalPC', logo: '/clients/globalpc.webp', sector: 'Informatique' },
  { name: 'Hanh Travel', logo: '/clients/hanh-travel.png', sector: 'Tourisme' },
  { name: 'DABO Avocat', logo: '/clients/dabo-avocat.webp', sector: 'Cabinet juridique' },
  { name: 'Peintre Intérieur Québec', logo: '/clients/peintre-quebec.png', sector: 'Rénovation' }
]

const Clients = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="clients" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Nos partenaires</span>
          <h2 className="section-title">
            Ils nous font <span className="hl">confiance</span>
          </h2>
        </motion.div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.div
              className="client-card"
              key={client.name}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <img src={client.logo} alt={`Logo ${client.name}`} loading="lazy" width="180" height="80" />
              <span className="client-sector">{client.sector}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
