import { motion } from 'framer-motion'

/*
 * Carte avec halo lumineux qui suit le curseur.
 * Le mouvement de souris met à jour les variables CSS --mx / --my
 * consommées par le ::before de la carte (défini dans index.css).
 */
const SpotlightCard = ({ as = 'div', className = '', children, ...props }) => {
  const Component = motion[as] || motion.div

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <Component className={className} onMouseMove={handleMouseMove} {...props}>
      {children}
    </Component>
  )
}

export default SpotlightCard
