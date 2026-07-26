import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const advantages = [
  {
    idx: '01',
    title: 'Approche personnalisée',
    text: 'Nous adaptons nos solutions à votre marque et à votre contexte pour un alignement parfait.'
  },
  {
    idx: '02',
    title: 'Équipe expérimentée',
    text: 'Un savoir-faire technique et de la créativité au service de vos résultats.'
  },
  {
    idx: '03',
    title: 'Décisions fondées sur les données',
    text: 'Nous affinons chaque stratégie à partir de données concrètes et mesurables.'
  },
  {
    idx: '04',
    title: 'Soutien continu',
    text: 'Accompagnement et maintenance pour garder vos actifs numériques au meilleur niveau.'
  }
]

const Advantages = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="advantages" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Avantages clés</span>
          <h2 className="section-title">
            Découvrez les <span className="hl">avantages</span> de nous choisir dès aujourd&apos;hui
          </h2>
          <p className="section-desc">
            Une créativité sans égale, des solutions fondées sur les données et un soutien
            dévoué qui produisent de vrais résultats pour votre marque.
          </p>
        </motion.div>

        <div className="numbered-grid">
          {advantages.map((advantage, index) => (
            <motion.div
              className="numbered"
              key={advantage.idx}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.09 }}
            >
              <div className="idx">{advantage.idx}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
