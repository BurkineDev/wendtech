import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, Eye, X, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { sanitizeInput } from '../utils/security'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ebooks = [
  {
    title: 'Le Développeur Augmenté',
    description:
      "Le guide pratique pour apprendre à penser avec l'IA — pas juste lui demander du code. 12 chapitres, frameworks actionnables, cas réels africains.",
    cover: '/ebooks/cover-developpeur-augmente.png',
    file: '/le-developpeur-augmente-wendtech.pdf',
    pages: 12,
    downloads: 500
  }
]

/* ── Formulaire de capture avant téléchargement ── */
const LeadForm = ({ ebook, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value.replace(/<[^>]*>|javascript:|on\w+=/gi, '') }))
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
      name: sanitizeInput(form.name) || 'Non renseigné',
      nom: sanitizeInput(form.name) || 'Non renseigné',
      email: sanitizeInput(form.email),
      message: `Ebook téléchargé : ${ebook.title}\nTéléphone : ${sanitizeInput(form.phone) || 'Non renseigné'}\nEmail : ${sanitizeInput(form.email)}`
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
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <X size={18} />
        </button>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              className="modal-success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle size={52} />
              <h3>C&apos;est parti !</h3>
              <p>Votre téléchargement démarre dans un instant…</p>
            </motion.div>
          ) : (
            <motion.div key="form">
              <h3>Téléchargement gratuit</h3>
              <p>Laissez-nous vos coordonnées pour recevoir nos prochaines ressources.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="lead-name">Prénom (optionnel)</label>
                  <input
                    id="lead-name" name="name" type="text"
                    value={form.name} onChange={handleChange}
                    placeholder="Votre prénom" maxLength={100} autoComplete="off"
                  />
                </div>

                <div className="field">
                  <label htmlFor="lead-email">Adresse courriel *</label>
                  <input
                    id="lead-email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="votre@email.com" maxLength={254} autoComplete="off" required
                  />
                </div>

                <div className="field">
                  <label htmlFor="lead-phone">Numéro WhatsApp (optionnel)</label>
                  <input
                    id="lead-phone" name="phone" type="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="+226 XX XX XX XX" maxLength={20} autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '8px' }}
                  disabled={status === 'submitting' || !form.email}
                >
                  {status === 'submitting' ? 'Envoi…' : <><Download size={17} /> Télécharger maintenant</>}
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
    <section className="ebooks" id="ebooks" ref={ref}>
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Ressources gratuites</span>
          <h2 className="section-title">
            Nos <span className="hl">ebooks</span>
          </h2>
          <p className="section-desc">
            Téléchargez gratuitement nos guides pour booster votre business digital.
          </p>
        </motion.div>

        <div className="ebooks-grid">
          {ebooks.map((ebook, index) => (
            <motion.article
              className="card ebook-card"
              key={ebook.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={ebook.cover} alt={`Couverture ${ebook.title}`} loading="lazy" />

              <div>
                <h3>{ebook.title}</h3>
                <p>{ebook.description}</p>

                <div className="ebook-meta">
                  <span><FileText size={15} /> {ebook.pages} chapitres</span>
                  <span><Download size={15} /> {ebook.downloads}+ téléchargements</span>
                </div>

                <div className="ebook-actions">
                  <a href={ebook.file} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    <Eye size={16} /> Aperçu
                  </a>
                  <button onClick={() => setActiveEbook(ebook)} className="btn btn-primary">
                    <Download size={16} /> Télécharger
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeEbook && <LeadForm ebook={activeEbook} onClose={() => setActiveEbook(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default Ebooks
