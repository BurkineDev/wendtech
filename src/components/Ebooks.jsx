import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Eye } from 'lucide-react'

const ebooks = [
  // Ajoutez vos ebooks ici
  // {
  //   title: 'Guide du Marketing Digital',
  //   description: 'Apprenez les bases du marketing digital pour votre entreprise.',
  //   cover: '/ebooks/marketing-digital-cover.png',
  //   file: '/ebooks/marketing-digital.pdf',
  //   pages: 25,
  //   downloads: 150
  // },
]

const Ebooks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleDownload = (file, title) => {
    const link = document.createElement('a')
    link.href = file
    link.download = `${title}.pdf`
    link.click()
  }

  return (
    <section className="ebooks" id="ebooks">
      <motion.div
        ref={ref}
        className="ebooks-container"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">Ressources Gratuites</span>
        <h2 className="section-title">
          Nos <span className="gradient">Ebooks</span>
        </h2>
        <p className="section-desc">
          Téléchargez gratuitement nos guides et ressources pour booster votre business digital.
        </p>

        {ebooks.length === 0 ? (
          <motion.div
            className="ebooks-empty"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <FileText size={64} color="#00f0ff" />
            <h3>Bientôt disponible</h3>
            <p>Nos ebooks gratuits arrivent très prochainement. Restez connectés !</p>
          </motion.div>
        ) : (
          <div className="ebooks-grid">
            {ebooks.map((ebook, index) => (
              <motion.div
                key={index}
                className="ebook-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="ebook-cover">
                  <img
                    src={ebook.cover}
                    alt={`Couverture ${ebook.title}`}
                    loading="lazy"
                  />
                </div>
                <div className="ebook-content">
                  <h3>{ebook.title}</h3>
                  <p>{ebook.description}</p>
                  <div className="ebook-meta">
                    <span><FileText size={16} /> {ebook.pages} pages</span>
                    <span><Download size={16} /> {ebook.downloads} téléchargements</span>
                  </div>
                  <div className="ebook-actions">
                    <a
                      href={ebook.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Eye size={18} /> Aperçu
                    </a>
                    <button
                      onClick={() => handleDownload(ebook.file, ebook.title)}
                      className="btn btn-primary"
                    >
                      <Download size={18} /> Télécharger
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Ebooks
