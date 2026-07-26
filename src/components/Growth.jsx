import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, ShoppingBag, Share2 } from 'lucide-react'

const figures = [
  {
    cap: "Jusqu'à",
    value: '+60 %',
    text: 'de trafic qualifié en optimisant votre site pour les moteurs de recherche.'
  },
  {
    cap: "Jusqu'à",
    value: '+35 %',
    text: 'de revenus quand plus de visiteurs deviennent des clients payants.'
  }
]

const levers = [
  {
    icon: Search,
    title: 'Référencement naturel',
    text: 'Une visibilité durable sur Google grâce à une stratégie SEO structurée, mesurée et adaptée à votre marché.'
  },
  {
    icon: ShoppingBag,
    title: 'Solutions e-commerce',
    text: 'Des boutiques en ligne fluides, de la conception du site au traitement des paiements et à la gestion des stocks.'
  },
  {
    icon: Share2,
    title: 'Présence numérique',
    text: 'Nous bâtissons et renforçons votre présence en ligne : contenu engageant, gestion de vos comptes et analyse de performance.'
  }
]

const Growth = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="growth" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Bâtir votre présence numérique</span>
          <h2 className="section-title">
            Concevoir votre <span className="hl">succès numérique</span>
          </h2>
        </motion.div>

        <div className="growth-grid">
          <div className="growth-figures">
            {figures.map((figure, index) => (
              <motion.div
                className="figure"
                key={figure.value}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="cap">{figure.cap}</div>
                <div className="val">{figure.value}</div>
                <p>{figure.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="levers">
            {levers.map((lever, index) => (
              <motion.div
                className="lever"
                key={lever.title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <h4><lever.icon size={20} /> {lever.title}</h4>
                <p>{lever.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Growth
