import { motion, AnimatePresence } from 'framer-motion'

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-content">
            <motion.div
              className="loader-logo"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              WENDTECH
            </motion.div>
            <div className="loader-bar" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
