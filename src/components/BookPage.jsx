import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { sanitizeInput } from '../utils/security'
import {
  ArrowLeft, Download, BookOpen, Users, Zap, Target,
  CheckCircle, X, ChevronRight, Star
} from 'lucide-react'
import './BookPage.css'

const PDF_FILE = '/le-developpeur-augmente-wendtech.pdf'
const COVER   = '/ebooks/cover-developpeur-augmente.png'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/* ─── Lead modal ─── */
const LeadModal = ({ onClose }) => {
  const [form, setForm]     = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value.replace(/<[^>]*>|javascript:|on\w+=/gi, '') }))
  }

  const triggerDownload = () => {
    const a = document.createElement('a')
    a.href = PDF_FILE
    a.download = 'Le-Developpeur-Augmente-Wendtech.pdf'
    a.click()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email) return
    setStatus('submitting')
    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          title:   'Nouveau lead — Téléchargement Ebook',
          name:    sanitizeInput(form.name)  || 'Non renseigné',
          nom:     sanitizeInput(form.name)  || 'Non renseigné',
          email:   sanitizeInput(form.email),
          message: `📥 Ebook : Le Développeur Augmenté\n📞 Tél : ${sanitizeInput(form.phone) || 'Non renseigné'}\n📧 Email : ${sanitizeInput(form.email)}`,
        }, EMAILJS_PUBLIC_KEY)
      }
    } catch { /* téléchargement quand même */ }
    setStatus('success')
    setTimeout(() => { triggerDownload(); onClose() }, 1600)
  }

  return (
    <motion.div
      className="bp-overlay"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="bp-modal"
        initial={{ opacity: 0, y: 28, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 28, scale: 0.95 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      >
        <button className="bp-modal-close" onClick={onClose}><X size={18} /></button>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div key="ok" className="bp-modal-success"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <CheckCircle size={54} color="#00f0ff" />
              <h3>C'est parti !</h3>
              <p>Ton téléchargement démarre dans un instant…</p>
            </motion.div>
          ) : (
            <motion.div key="form">
              <div className="bp-modal-header">
                <Download size={26} color="#00f0ff" />
                <div>
                  <h3>Téléchargement gratuit</h3>
                  <p>Laisse-nous tes coordonnées pour recevoir nos prochaines ressources.</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} noValidate>
                <input className="bp-input" name="name" type="text" value={form.name}
                  onChange={handleChange} placeholder="Ton prénom (optionnel)" maxLength={100} />
                <input className="bp-input" name="email" type="email" value={form.email}
                  onChange={handleChange} placeholder="Ton adresse email *" maxLength={254} required />
                <input className="bp-input" name="phone" type="tel" value={form.phone}
                  onChange={handleChange} placeholder="Ton numéro WhatsApp (optionnel)" maxLength={20} />
                <p className="bp-note">Données confidentielles — aucun spam.</p>
                <button type="submit" className="bp-btn-primary"
                  disabled={status === 'submitting' || !form.email}>
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

/* ─── Page principale ─── */
export default function BookPage() {
  const navigate     = useNavigate()
  const [modal, setModal] = useState(false)

  const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  const benefits = [
    { icon: Target, title: 'Penser avant de coder', desc: "Le framework Architecture Cognitive t'apprend à définir le vrai problème avant d'ouvrir ton éditeur." },
    { icon: Zap,    title: 'Prompts qui produisent', desc: "Finis les réponses génériques. Tu construis des prompts précis qui donnent du code utilisable dès le premier essai." },
    { icon: Users,  title: 'Cas réels africains',    desc: "Des exemples tirés de projets PME au Burkina, en Côte d'Ivoire et au Sénégal — pas des cas Silicon Valley hors-sol." },
    { icon: BookOpen, title: 'Anti-patterns évités', desc: "12 formulations catastrophiques identifiées et remplacées. Tu ne perdras plus des heures à débugger du code IA." },
  ]

  const chapters = [
    { num: '01', tag: 'Fondation',    title: 'Architecture Cognitive',    desc: "Le cadre mental pour travailler avec l'IA comme un architecte, pas un exécutant." },
    { num: '02', tag: 'Méthode',      title: 'Le Prompt Structuré',       desc: "Anatomie d'un prompt efficace : contexte, contraintes, format de sortie." },
    { num: '03', tag: 'Workflow',     title: 'Boucles de Développement',  desc: "Comment intégrer l'IA dans ton cycle de développement sans perdre le contrôle." },
    { num: '04', tag: 'Anti-patterns','title': 'Les Anti-Prompts',        desc: "Les 12 erreurs de prompting qui sabotent ton code — et comment les éviter." },
    { num: '05', tag: 'Pratique',     title: 'Cas Réels — PME Africaines',desc: "Du brief client flou au déploiement : cas documentés étape par étape." },
    { num: '06', tag: 'Futur',        title: 'Le Dev Augmenté en 2025',   desc: "Comment rester pertinent et irremplaçable face à l'évolution de l'IA." },
  ]

  const reviews = [
    { name: 'Moussa K.', role: 'Dev Full-Stack, Dakar',        stars: 5, text: "J'utilisais l'IA depuis 1 an sans résultats constants. Après le chapitre 3, tout a changé. MVP livré en 3 semaines au lieu de 2 mois." },
    { name: 'Aminata S.', role: 'CTO Startup, Abidjan',        stars: 5, text: "Le framework Architecture Cognitive m'a appris à penser avant de prompter. Basique mais jamais enseigné nulle part." },
    { name: 'Jean-Pierre T.', role: 'Dev Mobile, Ouagadougou', stars: 5, text: "Les anti-prompts du chapitre 4 m'ont choqué — j'utilisais 8 des 12 formulations catastrophiques. Plus maintenant." },
  ]

  return (
    <div className="bp-root">
      {/* Nav bar minimale */}
      <nav className="bp-nav">
        <button className="bp-back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Retour au site
        </button>
        <span className="bp-nav-logo">WEND<span>TECH</span></span>
        <button className="bp-nav-cta" onClick={() => setModal(true)}>
          <Download size={16} /> Télécharger
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="bp-hero">
        <div className="bp-hero-inner">
          <motion.div className="bp-hero-text" variants={fadeUp} initial="hidden" animate="visible">
            <span className="bp-tag">Ressource Gratuite</span>
            <h1 className="bp-title">
              Le Développeur<br />
              <span className="bp-gradient">Augmenté</span>
            </h1>
            <p className="bp-subtitle">
              Le guide pratique pour <strong>penser avec l'IA</strong> —
              pas juste lui demander du code. 12 chapitres, frameworks actionnables,
              cas réels du marché africain.
            </p>
            <div className="bp-hero-stats">
              <div className="bp-stat"><span className="bp-stat-num">12</span><span>Chapitres</span></div>
              <div className="bp-stat-sep" />
              <div className="bp-stat"><span className="bp-stat-num">500+</span><span>Devs</span></div>
              <div className="bp-stat-sep" />
              <div className="bp-stat"><span className="bp-stat-num">100%</span><span>Gratuit</span></div>
            </div>
            <div className="bp-hero-actions">
              <button className="bp-btn-primary" onClick={() => setModal(true)}>
                <Download size={20} /> Télécharger gratuitement
              </button>
              <a href={PDF_FILE} target="_blank" rel="noopener noreferrer" className="bp-btn-ghost">
                Aperçu PDF <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div className="bp-hero-cover"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="bp-cover-wrap">
              <img src={COVER} alt="Couverture Le Développeur Augmenté" />
              <div className="bp-cover-glow" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BÉNÉFICES ── */}
      <section className="bp-section bp-benefits">
        <div className="bp-container">
          <motion.div className="bp-section-head" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="bp-tag">Ce que tu vas apprendre</span>
            <h2>Pourquoi ce livre est <span className="bp-gradient">différent</span></h2>
          </motion.div>
          <div className="bp-benefits-grid">
            {benefits.map((b, i) => (
              <motion.div key={i} className="bp-benefit-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className="bp-benefit-icon"><b.icon size={28} color="#00f0ff" /></div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAPITRES ── */}
      <section className="bp-section bp-chapters">
        <div className="bp-container">
          <motion.div className="bp-section-head" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="bp-tag">Contenu</span>
            <h2>Les <span className="bp-gradient">chapitres</span></h2>
          </motion.div>
          <div className="bp-chapters-list">
            {chapters.map((ch, i) => (
              <motion.div key={i} className="bp-chapter-row"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}>
                <span className="bp-chapter-num">{ch.num}</span>
                <div className="bp-chapter-body">
                  <div className="bp-chapter-top">
                    <span className={`bp-chapter-tag bp-tag-${ch.tag.toLowerCase().replace(/[^a-z]/g, '')}`}>{ch.tag}</span>
                    <h3>{ch.title}</h3>
                  </div>
                  <p>{ch.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="bp-section bp-reviews">
        <div className="bp-container">
          <motion.div className="bp-section-head" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="bp-tag">Témoignages</span>
            <h2>Ce qu'en disent les <span className="bp-gradient">développeurs</span></h2>
          </motion.div>
          <div className="bp-reviews-grid">
            {reviews.map((r, i) => (
              <motion.div key={i} className="bp-review-card"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}>
                <div className="bp-stars">
                  {Array.from({ length: r.stars }).map((_, s) => <Star key={s} size={15} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <p>"{r.text}"</p>
                <div className="bp-review-author">
                  <div className="bp-review-avatar">{r.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bp-section bp-cta">
        <div className="bp-container">
          <motion.div className="bp-cta-box" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2>Prêt à coder autrement ?</h2>
            <p>Télécharge le guide gratuitement et rejoins les 500+ développeurs qui ont changé leur façon de travailler avec l'IA.</p>
            <button className="bp-btn-primary bp-btn-lg" onClick={() => setModal(true)}>
              <Download size={22} /> Télécharger gratuitement
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER MINIMAL ── */}
      <footer className="bp-footer">
        <p>© {new Date().getFullYear()} Wendtech — <a href="/">wendtech.site</a></p>
      </footer>

      <AnimatePresence>
        {modal && <LeadModal onClose={() => setModal(false)} />}
      </AnimatePresence>
    </div>
  )
}
