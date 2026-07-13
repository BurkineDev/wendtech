import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, ArrowRight } from 'lucide-react'
import MagneticButton from './ui/MagneticButton'

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const sectionRef = useRef(null)

  // Halo lumineux qui suit le curseur
  const handleMouseMove = (e) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  const stats = [
    { number: 50, label: 'Projets Réalisés' },
    { number: 40, label: 'Clients Satisfaits' },
    { number: 5, label: "Années d'Expérience" },
  ]

  return (
    <section className="hero" id="accueil" ref={sectionRef} onMouseMove={handleMouseMove}>
      <div className="hero-spotlight" />
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
          <Sparkles size={15} />
          <span>Agence Digitale Internationale</span>
        </motion.div>

        <motion.h1 variants={itemVariants}>
          La Technologie au<br />Service de Votre<br />
          <span className="highlight">Croissance Digitale</span>
        </motion.h1>

        <motion.p variants={itemVariants}>
          Nous accompagnons les PME et entreprises du monde entier dans leur transformation
          numérique avec des solutions web et mobiles performantes, abordables
          et adaptées à chaque contexte.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <MagneticButton as="a" href="#contact" className="btn btn-primary">
            Demander un Devis <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton as="a" href="#services" className="btn btn-secondary">
            Nos Services
          </MagneticButton>
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
    }, 45)

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
