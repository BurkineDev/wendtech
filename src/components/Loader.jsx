import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-content">
          <div className="loader-logo">WEND<span>TECH</span></div>
          <div className="loader-bar" />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default Loader
