import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart3, Wallet, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: BarChart3,
    title: 'Approche fondée sur les données',
    text: 'Des décisions éclairées et des solutions efficaces, mesurées à chaque étape.'
  },
  {
    icon: Wallet,
    title: 'Tarification compétitive',
    text: 'Un excellent rapport qualité-prix, adapté au budget des PME sans compromis sur la qualité.'
  },
  {
    icon: ShieldCheck,
    title: 'Pratiques d’affaires éthiques',
    text: 'Professionnalisme et transparence à chaque étape de votre projet.'
  }
]

const WhyUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="why" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Pourquoi nous choisir</span>
          <h2 className="section-title">
            L&apos;expertise pour votre <span className="hl">croissance numérique</span>
          </h2>
          <p className="section-desc">
            Une approche transparente et mesurable : vous gardez l&apos;accès à vos comptes,
            à vos données et au suivi de projet. Nous formons votre équipe plutôt que de
            créer une dépendance.
          </p>
        </motion.div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <motion.div
              className="card why-item"
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3><reason.icon size={20} /> {reason.title}</h3>
              <p>{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
