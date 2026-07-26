import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, ShoppingCart, Smartphone, Store, Code, Building2 } from 'lucide-react'

const expertises = [
  { icon: Globe, title: 'Sites vitrines', text: 'Présentez votre entreprise avec un site moderne, rapide et professionnel.' },
  { icon: ShoppingCart, title: 'E-commerce', text: 'Vendez vos produits en ligne avec des solutions de paiement intégrées.' },
  { icon: Smartphone, title: 'Applications mobiles', text: 'Apps Android et iOS pour gérer votre activité où que vous soyez.' },
  { icon: Store, title: 'Gestion de stocks', text: 'Suivez vos inventaires en temps réel et évitez les ruptures de stock.' },
  { icon: Code, title: 'Solutions sur mesure', text: 'Développement personnalisé selon vos processus et vos besoins spécifiques.' },
  { icon: Building2, title: 'Transformation digitale', text: 'Accompagnement complet pour digitaliser durablement votre entreprise.' }
]

const Portfolio = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="expertises" id="realisations" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Nos réalisations</span>
          <h2 className="section-title">
            Ce que nous <span className="hl">réalisons</span>
          </h2>
          <p className="section-desc">
            Des solutions digitales adaptées aux besoins de chaque entreprise,
            du commerce de quartier à la PME internationale.
          </p>
        </motion.div>

        <div className="expertise-grid">
          {expertises.map((expertise, index) => (
            <motion.div
              className="card expertise"
              key={expertise.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <div className="card-icon">
                <expertise.icon size={24} />
              </div>
              <h3>{expertise.title}</h3>
              <p>{expertise.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
