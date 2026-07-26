import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const pillars = [
  {
    title: 'Créateurs d’excellence numérique',
    text: "Nous concevons des solutions complètes, du site vitrine à la boutique en ligne, en passant par les applications mobiles et l'automatisation de vos processus."
  },
  {
    title: 'Innover le paysage numérique',
    text: 'Nous marions technologies modernes et stratégie digitale pour non seulement répondre à vos besoins, mais élever durablement votre marque.'
  },
  {
    title: 'Propulser les marques en ligne',
    text: "Un accompagnement transparent qui donne à votre équipe les outils, la formation et la visibilité qui lui appartiennent."
  }
]

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="about" id="apropos" ref={ref}>
      <div className="container">
        <motion.div
          className="about-top"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="eyebrow">À propos de l&apos;agence</span>
            <h2>
              Des solutions <span className="hl">web, mobiles et digitales</span> sur
              mesure qui élèvent votre marque.
            </h2>
          </div>

          <div className="about-aside">
            <p>
              Nous mesurons notre réussite à la croissance de votre entreprise. Notre mission :
              démocratiser le numérique et livrer des solutions performantes, du développement
              sur mesure à l&apos;accompagnement stratégique, à un prix juste.
            </p>
            <a href="#contact" className="btn btn-ghost" onClick={scrollToContact}>
              Nous contacter <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>

        <div className="pillars">
          {pillars.map((pillar, index) => (
            <motion.div
              className="pillar"
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
