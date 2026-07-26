import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { stats } from '../data/site'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
}

const scrollTo = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Hero = () => (
  <section className="hero" id="accueil">
    <motion.div className="container" variants={container} initial="hidden" animate="visible">
      <motion.span className="eyebrow" variants={item}>
        Agence web et logiciels
      </motion.span>

      <motion.h1 variants={item}>
        On <span className="hl-underline">développe vos logiciels</span>.
        On propulse votre <span className="hl">visibilité en ligne</span>.
      </motion.h1>

      <motion.p variants={item}>
        Chez Wendtech, nous donnons vie à vos idées : développement web sur mesure,
        applications mobiles, boutiques en ligne, plateformes d&apos;inscriptions et
        consulting digital. Du code à la croissance, nous livrons des solutions
        performantes et accessibles aux PME et entreprises, du Burkina Faso au Canada.
      </motion.p>

      <motion.div className="hero-actions" variants={item}>
        <a href="#contact" className="btn btn-primary" onClick={(e) => scrollTo(e, 'contact')}>
          Nous joindre <ArrowRight size={17} />
        </a>
        <a href="#services" className="btn btn-ghost" onClick={(e) => scrollTo(e, 'services')}>
          Nos services
        </a>
      </motion.div>

      <motion.div className="hero-stats" variants={item}>
        {stats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <div className="num">{stat.value}</div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
)

export default Hero
