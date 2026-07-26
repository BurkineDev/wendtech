import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Monitor, ShoppingCart, Code2, Smartphone, Users, Wrench, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Création de site web',
    text: "Un site rapide, crédible et facile à modifier par votre équipe, conçu pour convertir vos visiteurs en clients."
  },
  {
    icon: ShoppingCart,
    title: 'Site transactionnel et e-commerce',
    text: 'Boutiques en ligne sécurisées : catalogue, paiements intégrés (dont Mobile Money) et gestion des commandes, clé en main.'
  },
  {
    icon: Code2,
    title: 'Programmation sur mesure',
    text: 'Applications web et logiciels conçus autour de vos processus : intégrations, automatisation et architecture évolutive.'
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    text: 'Apps Android et iOS pour la gestion de stocks, la vente en ligne ou vos services marchands, avec support et maintenance.'
  },
  {
    icon: Users,
    title: 'Plateforme d’inscriptions',
    text: "Ouverture à heure fixe, quotas automatiques, file d'attente et anti-bot : une plateforme stable même au pic de trafic."
  },
  {
    icon: Wrench,
    title: 'Maintenance et hébergement',
    text: 'Hébergement sécurisé, sauvegardes automatiques, mises à jour et suivi technique continu de vos actifs numériques.'
  }
]

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Nos services</span>
          <h2 className="section-title">
            Nos <span className="hl">services numériques</span> pour faire grandir votre marque
          </h2>
          <p className="section-desc">
            Du code à la visibilité : une seule équipe pour votre site, vos outils internes
            et votre croissance en ligne.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="card service-card"
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="card-icon">
                <service.icon size={26} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contact" className="service-link" onClick={scrollToContact}>
                En savoir plus <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="cta-band"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Créons quelque chose de grand ensemble.</h3>
          <a href="#contact" className="btn btn-primary" onClick={scrollToContact}>
            Soumission gratuite <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
