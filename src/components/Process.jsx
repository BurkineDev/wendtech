import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    idx: '01',
    title: 'Consultez notre équipe pour explorer les solutions possibles',
    text: "Nous offrons des consultations gratuites avec différents plans d'action, en fonction de votre situation actuelle et de vos besoins réels."
  },
  {
    idx: '02',
    title: 'Mise en place de votre stratégie personnalisée',
    text: 'Suite à la présentation et à votre accord sur les solutions proposées, nous concevons et développons votre projet avec un suivi transparent.'
  },
  {
    idx: '03',
    title: 'Lancement, formation et accompagnement continu',
    text: 'Nous livrons, formons votre équipe et assurons la maintenance pour garder vos actifs numériques performants et sécurisés.'
  }
]

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="process" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Comment ça fonctionne</span>
          <h2 className="section-title">
            Notre <span className="hl">processus éprouvé</span> pour atteindre le succès
          </h2>
          <p className="section-desc">
            Recherche, stratégie et créativité se combinent pour livrer des solutions
            sur mesure aux résultats mesurables.
          </p>
        </motion.div>

        <div className="steps">
          {steps.map((step, index) => (
            <motion.div
              className="step"
              key={step.idx}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="step-idx">
                Étape<b>{step.idx}</b>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
