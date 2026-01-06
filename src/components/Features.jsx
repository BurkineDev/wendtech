import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Globe, Wallet, Rocket } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Solutions Sur Mesure',
    description: 'Des solutions personnalisées adaptées aux besoins spécifiques des PME et commerçants burkinabè.'
  },
  {
    icon: Globe,
    title: 'Expertise Locale',
    description: 'Nous comprenons les réalités du marché burkinabè et les défis uniques de nos entrepreneurs.'
  },
  {
    icon: Wallet,
    title: 'Prix Accessibles',
    description: 'Des tarifs transparents et adaptés au budget des entreprises locales, sans compromis sur la qualité.'
  },
  {
    icon: Rocket,
    title: 'Accompagnement Complet',
    description: "De l'idée au lancement, nous vous guidons à chaque étape de votre transformation digitale."
  }
]

const Features = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="features" id="features">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Pourquoi Nous</span>
        <h2 className="section-title">
          Pourquoi Choisir <span className="gradient">Wendtech</span> ?
        </h2>
        <p className="section-desc">
          Une expertise locale combinée à des technologies modernes pour propulser votre entreprise.
        </p>
      </motion.div>

      <motion.div
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {features.map((feature, index) => (
          <motion.div key={index} className="feature-card" variants={itemVariants}>
            <div className="feature-icon">
              <feature.icon size={32} color="#00f0ff" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Features
