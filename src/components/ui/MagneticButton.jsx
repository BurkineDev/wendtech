import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/*
 * Bouton/lien « magnétique » : suit légèrement le curseur au survol
 * puis revient à sa position d'origine. Effet signature 21st.dev.
 */
const MagneticButton = ({ as = 'a', className = '', children, strength = 0.35, ...props }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 220, damping: 18, mass: 0.4 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Component = motion[as] || motion.a

  return (
    <Component
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  )
}

export default MagneticButton
