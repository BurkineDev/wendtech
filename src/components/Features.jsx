import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Palette, LineChart, Layers } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Identité de marque personnalisée',
    text: 'Développement complet de votre identité : logo, palette de couleurs et univers visuel cohérent sur tous vos supports.'
  },
  {
    icon: LineChart,
    title: 'Stratégie digitale pilotée par les données',
    text: 'Des décisions basées sur des indicateurs concrets : analytique, rapports clairs et optimisation continue.'
  },
  {
    icon: Layers,
    title: 'Automatisation de vos processus',
    text: 'Des outils internes qui font gagner du temps à vos équipes : gestion de stocks, facturation, suivi client.'
  }
]

const Features = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="features" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head center"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Fonctionnalités</span>
          <h2 className="section-title">
            Des <span className="hl">fonctionnalités innovantes</span> pour votre marque
          </h2>
          <p className="section-desc">
            Nos services numériques donnent aux marques des stratégies et des outils
            qui soutiennent une croissance durable et un engagement réel.
          </p>
        </motion.div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <motion.div
              className="card"
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-icon">
                <feature.icon size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem' }}>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
