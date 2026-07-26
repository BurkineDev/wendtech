import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

/* Ajoutez ici vos avis clients réels (Google, LinkedIn…).
   Tant que le tableau est vide, seuls les engagements ci-dessous sont affichés. */
const testimonials = []

const commitments = [
  {
    title: 'Excellent rapport qualité-prix',
    points: ['Tarifs compétitifs', 'Forfaits flexibles']
  },
  {
    title: 'Accompagnement dédié',
    points: ['Réponse rapide', 'Interlocuteur unique']
  },
  {
    title: 'Résultats mesurables',
    points: ['Rapports clairs', 'Suivi de projet transparent']
  }
]

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const featured = testimonials[0]

  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Nos engagements</span>
          <h2 className="section-title">
            Ce sur quoi vous pouvez <span className="hl">compter</span>
          </h2>
          <p className="section-desc">
            Des expériences clients qui parlent d&apos;elles-mêmes, portées par des
            engagements clairs sur la qualité, le suivi et les résultats.
          </p>
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rating">
              <span className="score">{featured.score}</span>
              <span className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </span>
              <span className="count">({featured.source})</span>
            </div>

            <div className="testimonial">
              <blockquote>&laquo;&nbsp;{featured.quote}&nbsp;&raquo;</blockquote>
              <div className="testimonial-author">
                <span className="avatar">{featured.author.charAt(0)}</span>
                <div>
                  <strong>{featured.author}</strong>
                  <span>{featured.role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="badges">
          {commitments.map((commitment, index) => (
            <motion.div
              className="badge"
              key={commitment.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <strong>{commitment.title}</strong>
              {commitment.points.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
