import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const stats = [
    { number: 50, label: 'Projets Réalisés' },
    { number: 40, label: 'Clients Satisfaits' },
    { number: 5, label: "Années d'Expérience" },
  ]

  return (
    <section className="hero" id="accueil">
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <motion.div
        ref={ref}
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span>Agence Digitale au Burkina Faso</span>
        </motion.div>

        <motion.h1 variants={itemVariants}>
          La Technologie<br />au Service de Votre<br />
          <span className="highlight">Croissance Digitale</span>
        </motion.h1>

        <motion.p variants={itemVariants}>
          Nous accompagnons les PME et marchés burkinabè dans leur transformation 
          numérique avec des solutions web et mobiles abordables, performantes 
          et adaptées au contexte local.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <a href="#contact" className="btn btn-primary">
            Demander un Devis
          </a>
          <a href="#services" className="btn btn-secondary">
            Nos Services
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          {stats.map((stat, index) => (
            <CounterStat key={index} target={stat.number} label={stat.label} inView={inView} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

const CounterStat = ({ target, label, inView }) => {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    let current = 0
    const step = target / 40
    const interval = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(interval)
  }, [inView, target])

  return (
    <div className="stat">
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default Hero
