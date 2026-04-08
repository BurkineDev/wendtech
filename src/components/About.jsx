import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Users, Shield, TrendingUp } from 'lucide-react'

const values = [
  { icon: Lightbulb, label: 'Innovation Continue' },
  { icon: Users, label: 'Accessibilité' },
  { icon: Shield, label: 'Confiance' },
  { icon: TrendingUp, label: 'Impact Positif' }
]

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="about" id="apropos">
      <motion.div
        ref={ref}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="about-visual" variants={itemVariants}>
          <div className="about-image">
            🌍
          </div>
        </motion.div>

        <motion.div className="about-content" variants={itemVariants}>
          <span className="section-tag">À Propos</span>
          <h2>Qui sommes-nous ?</h2>
          <p>
            Wendtech est une agence digitale internationale, spécialisée dans
            le développement web et mobile, ainsi que le consulting pour les PME et
            les entreprises de toutes tailles, partout dans le monde.
          </p>
          <p>
            Fondée avec la vision de démocratiser le numérique pour tous, nous croyons
            que chaque commerçant, artisan ou entrepreneur mérite une présence en ligne
            professionnelle pour booster ses ventes et sa visibilité.
          </p>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-item"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="value-icon">
                  <value.icon size={24} color="#00f0ff" />
                </div>
                <span>{value.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
