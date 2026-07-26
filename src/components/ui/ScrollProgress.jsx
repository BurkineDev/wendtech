import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

/** Fin liseré lime sous l'en-tête, qui suit la progression de lecture. */
const ScrollProgress = () => {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  if (reduce) return null

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}

export default ScrollProgress
