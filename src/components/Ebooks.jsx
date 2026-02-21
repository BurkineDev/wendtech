import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Eye, X, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { sanitizeInput } from '../utils/security'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ebooks = [
  {
    title: "Le Développeur Augmenté",
    description: "Le guide pratique pour apprendre à penser avec l'IA — pas juste lui demander du code. 12 chapitres, frameworks actionnables, cas réels africains.",
    cover: '/ebooks/cover-developpeur-augmente.png',
    file: '/le-developpeur-augmente-wendtech.pdf',
    pages: 12,
    downloads: 500,
  },
]

/* ── Formulaire de capture avant téléchargement ── */
const LeadForm = ({ ebook, onClose }) => {
  const [form, setForm]     = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value.replace(/<[^>]*>|javascript:|on\w+=/gi, '') }))
  }

  const triggerDownload = () => {
    const a = document.createElement('a')
    a.href = ebook.file
    a.download = `${ebook.title}.pdf`
    a.click()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email) return
    setStatus('submitting')

    const templateParams = {
      title: 'Nouveau lead — Téléchargement Ebook',
      name:  sanitizeInput(form.name)  || 'Non renseigné',
      nom:   sanitizeInput(form.name)  || 'Non renseigné',
      email: sanitizeInput(form.email),
      message: `📥 Ebook téléchargé : ${ebook.title}\n📞 Téléphone : ${sanitizeInput(form.phone) || 'Non renseigné'}\n📧 Email : ${sanitizeInput(form.email)}`,
    }

    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      }
    } catch {
      // Le téléchargement se lance même en cas d'échec réseau
    }

    setStatus('success')
    setTimeout(() => {
      triggerDownload()
      onClose()
    }, 1600)
  }

  return (
    <motion.div
      className="lead-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="lead-box"
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.95 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      >
        <button className="lead-close" onClick={onClose} aria-label="Fermer"><X size={18} /></button>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              className="lead-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle size={52} color="#00f0ff" />
              <h3>C'est parti !</h3>
              <p>Ton téléchargement démarre dans un instant…</p>
            </motion.div>
          ) : (
            <motion.div key="form">
              <div className="lead-header">
                <Download size={26} color="#00f0ff" />
                <div>
                  <h3>Téléchargement gratuit</h3>
                  <p>Laisse-nous tes coordonnées pour recevoir nos prochaines ressources.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ton prénom (optionnel)"
                  maxLength={100}
                  autoComplete="off"
                  className="lead-input"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ton adresse email *"
                  maxLength={254}
                  autoComplete="off"
                  required
                  className="lead-input"
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Ton numéro WhatsApp (optionnel)"
                  maxLength={20}
                  autoComplete="off"
                  className="lead-input"
                />
                <p className="lead-note">Données confidentielles — aucun spam.</p>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}
                  disabled={status === 'submitting' || !form.email}
                >
                  {status === 'submitting'
                    ? 'Envoi…'
                    : <><Download size={17} /> Télécharger maintenant</>}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

/* ── Section Ebooks ── */
const Ebooks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeEbook, setActiveEbook] = useState(null)

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
                  {ebook.cover ? (
                    <img src={ebook.cover} alt={`Couverture ${ebook.title}`} loading="lazy" />
                  ) : (
                    <FileText size={48} color="#00f0ff" style={{ opacity: 0.6 }} />
                  )}
                </div>
                <div className="ebook-content">
                  <h3>{ebook.title}</h3>
                  <p>{ebook.description}</p>
                  <div className="ebook-meta">
                    <span><FileText size={16} /> {ebook.pages} chapitres</span>
                    <span><Download size={16} /> {ebook.downloads}+ téléchargements</span>
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
                      onClick={() => setActiveEbook(ebook)}
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

      <AnimatePresence>
        {activeEbook && (
          <LeadForm ebook={activeEbook} onClose={() => setActiveEbook(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Ebooks
