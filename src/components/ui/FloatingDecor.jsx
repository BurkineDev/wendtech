import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Forme décorative animée.
 *
 *   spin     durée en secondes d'un tour complet (0 = pas de rotation)
 *   parallax amplitude en pixels du décalage vertical au défilement
 *   pulse    respiration lente de l'échelle et de l'opacité
 *
 * Tout est désactivé si l'utilisateur a demandé des animations réduites.
 */
const FloatingDecor = ({ src, className = '', spin = 0, parallax = 0, pulse = false }) => {
  const reduce = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  if (reduce) {
    return (
      <span ref={ref} className={`decor ${className}`} aria-hidden="true">
        <img src={src} alt="" loading="lazy" />
      </span>
    )
  }

  const animate = {}
  const transition = {}

  if (spin) {
    animate.rotate = 360
    transition.rotate = { duration: spin, repeat: Infinity, ease: 'linear' }
  }
  if (pulse) {
    animate.scale = [1, 1.06, 1]
    animate.opacity = [1, 0.82, 1]
    transition.scale = { duration: 9, repeat: Infinity, ease: 'easeInOut' }
    transition.opacity = { duration: 9, repeat: Infinity, ease: 'easeInOut' }
  }

  return (
    <span ref={ref} className={`decor ${className}`} aria-hidden="true">
      <motion.img
        src={src}
        alt=""
        loading="lazy"
        style={parallax ? { y } : undefined}
        animate={Object.keys(animate).length ? animate : undefined}
        transition={Object.keys(transition).length ? transition : undefined}
      />
    </span>
  )
}

export default FloatingDecor
