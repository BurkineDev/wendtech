import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, Eye, X, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { sanitizeInput } from '../utils/security'
import Reveal from './ui/Reveal'
import { Eyebrow, PillButton } from './ui/Bits'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ebooks = [
  {
    title: 'Le Développeur Augmenté',
    description:
      "Le guide pratique pour apprendre à penser avec l'IA — pas juste lui demander du code. " +
      '12 chapitres, frameworks actionnables, cas réels africains.',
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
      message:
        `📥 Ebook téléchargé : ${ebook.title}\n` +
        `📞 Téléphone : ${sanitizeInput(form.phone) || 'Non renseigné'}\n` +
        `📧 Email : ${sanitizeInput(form.email)}`
    }

    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      }
    } catch {
      // Le téléchargement se lance même en cas d'échec réseau.
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
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
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
            <motion.div key="success" className="lead-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <CheckCircle size={52} />
              <h3 className="h3">C'est parti !</h3>
              <p className="muted">Ton téléchargement démarre dans un instant…</p>
            </motion.div>
          ) : (
            <motion.div key="form">
              <h3 className="h3" style={{ marginBottom: 8 }}>Téléchargement gratuit</h3>
              <p className="muted" style={{ marginBottom: 24 }}>
                Laisse-nous tes coordonnées pour recevoir nos prochaines ressources.
              </p>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="lead-name">Prénom <span className="muted-3">(optionnel)</span></label>
                  <input id="lead-name" name="name" type="text" value={form.name} onChange={handleChange}
                    placeholder="Ton prénom" maxLength={100} autoComplete="off" />
                </div>
                <div className="form-group">
                  <label htmlFor="lead-email">Adresse email *</label>
                  <input id="lead-email" name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="ton@email.com" maxLength={254} autoComplete="off" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lead-phone">Numéro WhatsApp <span className="muted-3">(optionnel)</span></label>
                  <input id="lead-phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+226 ..." maxLength={20} autoComplete="off" />
                </div>

                <p className="muted" style={{ fontSize: 14 }}>Données confidentielles — aucun spam.</p>

                <PillButton type="submit" variant="btn--block" icon={Download}
                  disabled={status === 'submitting' || !form.email}>
                  {status === 'submitting' ? 'Envoi…' : 'Télécharger maintenant'}
                </PillButton>
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
  const [activeEbook, setActiveEbook] = useState(null)

  return (
    <section className="section" id="ebooks">
      <div className="container">
        <Reveal><Eyebrow>Ressources gratuites</Eyebrow></Reveal>

        <Reveal delay={0.05}>
          <div className="split mb-lg">
            <h2 className="h2 split__title">Nos <span className="accent">ebooks</span></h2>
            <p className="split__text">
              Téléchargez gratuitement nos guides pour booster votre business digital.
            </p>
          </div>
        </Reveal>

        {ebooks.length === 0 ? (
          <Reveal className="card" style={{ justifyItems: 'center', textAlign: 'center' }}>
            <FileText size={64} className="accent" />
            <h3 className="h3">Bientôt disponible</h3>
            <p className="muted">Nos ebooks gratuits arrivent très prochainement. Restez connectés !</p>
          </Reveal>
        ) : (
          ebooks.map((ebook) => (
            <Reveal className="card ebook" key={ebook.title}>
              <img className="ebook__cover" src={ebook.cover} alt={`Couverture ${ebook.title}`} loading="lazy" />

              <div style={{ display: 'grid', gap: 18 }}>
                <h3 className="h3">{ebook.title}</h3>
                <p className="muted">{ebook.description}</p>

                <div className="ebook__meta">
                  <span><FileText size={16} /> {ebook.pages} chapitres</span>
                  <span><Download size={16} /> {ebook.downloads}+ téléchargements</span>
                </div>

                <div className="ebook__actions">
                  <PillButton onClick={() => setActiveEbook(ebook)} icon={Download}>
                    Télécharger
                  </PillButton>
                  <PillButton href={ebook.file} target="_blank" rel="noopener noreferrer"
                    variant="btn--ghost" icon={Eye}>
                    Aperçu
                  </PillButton>
                </div>
              </div>
            </Reveal>
          ))
        )}
      </div>

      <AnimatePresence>
        {activeEbook && <LeadForm ebook={activeEbook} onClose={() => setActiveEbook(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default Ebooks
