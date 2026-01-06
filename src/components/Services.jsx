import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Monitor, Smartphone, BarChart3, Wrench } from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Monitor,
    title: 'Développement Web',
    description: 'Sites vitrines, e-commerce et plateformes personnalisées pour une présence en ligne professionnelle.',
    features: [
      'Sites responsive (mobile-friendly)',
      'Optimisation SEO',
      'Design moderne et attractif',
      'Performance optimale'
    ]
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Apps Android/iOS pour gestion de stocks, ventes en ligne ou services marchands.',
    features: [
      'Applications natives et hybrides',
      'Interface intuitive',
      'Intégration mobile money',
      'Support et maintenance'
    ]
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Consulting Digital',
    description: 'Stratégie numérique, marketing digital et formation pour digitaliser votre entreprise.',
    features: [
      'Audit digital complet',
      'Stratégie marketing',
      'Formation équipes',
      'Accompagnement personnalisé'
    ]
  },
  {
    number: '04',
    icon: Wrench,
    title: 'Maintenance & Hébergement',
    description: 'Suivi technique continu, mises à jour et sécurité pour vos solutions digitales.',
    features: [
      'Hébergement sécurisé',
      'Sauvegardes automatiques',
      'Mises à jour régulières',
      'Support technique 24/7'
    ]
  }
]

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Nos Expertises</span>
          <h2 className="section-title">
            Services <span className="gradient">Digitaux</span>
          </h2>
          <p className="section-desc">
            Des solutions complètes pour digitaliser votre entreprise et booster votre croissance.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div key={index} className="service-card" variants={itemVariants}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon">
                <service.icon size={28} color="#0a0a0f" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
