import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Apparition au défilement, partagée par toutes les sections.
 * `delay` permet la cascade entre éléments voisins d'une grille.
 */
const Reveal = ({ children, delay = 0, as = 'div', className = '', ...rest }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.8, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
