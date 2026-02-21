import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ArrowLeft,
  Download,
  XCircle,
  CheckCircle,
  ChevronDown,
  Globe,
  Briefcase,
  Users,
  Cpu,
  Brain,
  Code2,
  Zap,
  Shield,
  MapPin,
  TrendingUp,
} from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import './BookPage.css'

/* ---- Constante PDF ---- */
const PDF_PATH = '/le-developpeur-augmente-wendtech.pdf'
const handleDownload = () => window.open(PDF_PATH, '_blank')

/* ---- Variants Framer Motion communs ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

/* ============================================
   COMPOSANT PRINCIPAL
   ============================================ */
const BookPage = () => {
  return (
    <div className="book-page">
      <div className="bg-grid" />
      <div className="bg-glow" />
      <Navbar />
      <Link to="/" className="book-back-link">
        <ArrowLeft size={16} />
        Retour au site Wendtech
      </Link>
      <main>
        <BookHero />
        <ProblemSection />
        <ChaptersSection />
        <QuoteSection />
        <TestimonialsSection />
        <WendtechBridge />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

/* ============================================
   SECTION 1 — HERO
   ============================================ */
const CounterStat = ({ target, suffix, label, inView }) => {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true
    let current = 0
    const step = target / 40
    const interval = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)
    return () => clearInterval(interval)
  }, [inView, target])

  return (
    <div className="book-stat">
      <div className="book-stat-number">
        {count}
        {suffix}
      </div>
      <div className="book-stat-label">{label}</div>
    </div>
  )
}

const BookHero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { target: 500, suffix: '+', label: 'Devs' },
    { target: 12, suffix: '', label: 'Chapitres' },
    { target: 100, suffix: '%', label: 'Gratuit' },
  ]

  return (
    <section className="book-hero">
      <div className="book-hero-inner" ref={ref}>
        {/* ---- Texte ---- */}
        <motion.div
          className="book-hero-text"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="book-hero-badge" variants={fadeUp}>
            <span className="book-hero-badge-dot" />
            Ressource Gratuite&nbsp;•&nbsp;Édition 2025&nbsp;•&nbsp;Wendtech
          </motion.div>

          <motion.h1 variants={fadeUp}>Le Développeur Augmenté</motion.h1>

          <motion.div className="book-hero-subtitle" variants={fadeUp}>
            Architecture cognitive à l'ère de l'IA
          </motion.div>

          <motion.p className="book-hero-desc" variants={fadeUp}>
            Le premier guide francophone pour apprendre à{' '}
            <strong>penser avec l'IA</strong> — pas juste lui demander du code.
          </motion.p>

          <motion.div className="book-free-badge" variants={fadeUp}>
            📥 Téléchargement 100% Gratuit
          </motion.div>

          <motion.div className="book-hero-cta" variants={fadeUp}>
            <button className="btn btn-primary" onClick={handleDownload}>
              <Download size={18} />
              Télécharger le livre gratuitement →
            </button>
          </motion.div>

          <motion.div className="book-hero-stats" variants={fadeUp}>
            {stats.map((s, i) => (
              <CounterStat key={i} {...s} inView={inView} />
            ))}
          </motion.div>
        </motion.div>

        {/* ---- Mockup 3D ---- */}
        <motion.div
          className="book-mockup"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="book-3d">
            <div className="book-spine">
              <span className="book-spine-text">Wendtech • 2025</span>
            </div>
            <div className="book-cover">
              <div className="book-cover-tag">Édition 2025</div>
              <div className="book-cover-icon">🧠</div>
              <div className="book-cover-title">Le Développeur Augmenté</div>
              <div className="book-cover-subtitle">
                Architecture cognitive
                <br />à l'ère de l'IA
              </div>
              <div className="book-cover-author">par Wendtech</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 2 — PROBLÈME AVANT/APRÈS
   ============================================ */
const painCards = [
  {
    bad: "Tu demandes à l'IA d'écrire du code",
    good: "Tu architectures avec l'IA comme co-penseur",
  },
  {
    bad: 'Tu obtiens du code générique cassé en prod',
    good: 'Tu produis des systèmes cohérents dès le 1er prompt',
  },
  {
    bad: "Tu passes des heures à corriger les bugs de l'IA",
    good: 'Tu identifies le vrai problème avant de coder',
  },
]

const ProblemSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref}>
      <div className="book-section-inner">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="section-tag">Le Problème</span>
          <h2 className="section-title">
            Tu utilises l'IA.{' '}
            <span className="gradient">Mais pas comme ça.</span>
          </h2>
        </motion.div>

        <motion.div
          className="before-after-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {painCards.map((card, i) => (
            <motion.div key={i} className="pain-card" variants={fadeUp}>
              <div className="pain-row">
                <div className="pain-icon-wrap pain-icon-bad">
                  <XCircle size={18} />
                </div>
                <span className="pain-row-text bad">{card.bad}</span>
              </div>
              <hr className="pain-divider" />
              <div className="pain-row">
                <div className="pain-icon-wrap pain-icon-good">
                  <CheckCircle size={18} />
                </div>
                <span className="pain-row-text good">{card.good}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 3 — CHAPITRES
   ============================================ */
const chapters = [
  {
    num: '01',
    tag: 'Fondation',
    tagClass: 'chapter-tag-fondation',
    title: 'Architecture Cognitive',
    desc: 'Le framework mental qui sépare les devs augmentés du reste.',
  },
  {
    num: '02',
    tag: 'Mindset',
    tagClass: 'chapter-tag-mindset',
    title: 'Le Code est une Conséquence',
    desc: 'Pourquoi commencer par coder est la pire erreur possible.',
  },
  {
    num: '03',
    tag: 'Technique',
    tagClass: 'chapter-tag-technique',
    title: 'Prompt Engineering Avancé',
    desc: '20+ templates de prompts directement utilisables en production.',
  },
  {
    num: '04',
    tag: 'Anti-patterns',
    tagClass: 'chapter-tag-antipatterns',
    title: 'Les Anti-Prompts',
    desc: 'Les 12 formulations qui détruisent silencieusement tes outputs.',
  },
  {
    num: '05',
    tag: 'Pratique',
    tagClass: 'chapter-tag-pratique',
    title: 'Cas Réels — PME Africaines',
    desc: 'Du brief client flou au déploiement : cas documentés étape par étape.',
  },
  {
    num: '06',
    tag: 'Futur',
    tagClass: 'chapter-tag-futur',
    title: 'Le Dev Augmenté en 2025',
    desc: "Comment rester pertinent et irremplaçable face à l'IA.",
  },
]

const ChaptersSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section ref={ref}>
      <div className="book-section-inner">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="section-tag">Contenu</span>
          <h2 className="section-title">
            12 Chapitres.{' '}
            <span className="gradient">Zéro Théorie Inutile.</span>
          </h2>
        </motion.div>

        <motion.div
          className="chapters-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {chapters.map((ch, i) => (
            <motion.div key={i} className="chapter-card" variants={fadeUp}>
              <div className="chapter-bg-number">{ch.num}</div>
              <span className={`chapter-tag ${ch.tagClass}`}>{ch.tag}</span>
              <div className="chapter-title">
                {ch.num} — {ch.title}
              </div>
              <div className="chapter-desc">{ch.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 4 — EXTRAIT / CITATION
   ============================================ */
const QuoteSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref}>
      <div className="book-section-inner">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="section-tag">Extrait</span>
          <h2 className="section-title">
            Un <span className="gradient">Avant-Goût</span>
          </h2>
        </motion.div>

        <motion.div
          className="quote-block"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.15 }}
        >
          <p className="quote-text">
            "Le code est une conséquence, pas un point de départ. Ceux qui
            commencent par coder avec l'IA sautent l'étape la plus critique :
            la définition du problème réel. Avant chaque prompt, une question
            s'impose — quel est le vrai problème que je résous ?"
          </p>
          <div className="quote-source">— Chapitre 2, Le Développeur Augmenté</div>
          <div className="quote-cta">
            <button className="btn btn-primary" onClick={handleDownload}>
              <Download size={18} />
              Télécharger le livre complet →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 5 — TÉMOIGNAGES
   ============================================ */
const testimonials = [
  {
    initials: 'MK',
    avatarClass: 'avatar-cyan',
    name: 'Moussa K.',
    role: 'Dev Full-Stack, Dakar',
    text: "J'utilisais l'IA depuis 1 an sans résultats constants. Après le chapitre 3, tout a changé. Mon client a reçu son MVP en 3 semaines au lieu de 2 mois.",
  },
  {
    initials: 'AS',
    avatarClass: 'avatar-purple',
    name: 'Aminata S.',
    role: 'CTO Startup, Abidjan',
    text: "Le framework Architecture Cognitive m'a appris à penser avant de prompter. Basique mais jamais enseigné nulle part. Ce livre comble ce vide.",
  },
  {
    initials: 'JT',
    avatarClass: 'avatar-gold',
    name: 'Jean-Pierre T.',
    role: 'Dev Mobile, Ouagadougou',
    text: "Les anti-prompts du chapitre 4 m'ont choqué. J'utilisais 8 des 12 formulations catastrophiques. Plus maintenant.",
  },
]

const TestimonialsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref}>
      <div className="book-section-inner">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="section-tag">Témoignages</span>
          <h2 className="section-title">
            Ce Qu'ils <span className="gradient">Disent</span>
          </h2>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-header">
                <div className={`testimonial-avatar ${t.avatarClass}`}>
                  {t.initials}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 6 — PONT WENDTECH
   ============================================ */
const bridgeItems = [
  {
    Icon: Globe,
    label: 'Développement Web & Mobile',
    desc: 'Sites, apps, plateformes sur mesure pour votre marché.',
  },
  {
    Icon: Briefcase,
    label: 'Consulting Digital',
    desc: 'Stratégie et accompagnement sur mesure pour les PME.',
  },
  {
    Icon: MapPin,
    label: 'Expertise Locale',
    desc: 'Contexte africain, solutions adaptées, résultats concrets.',
  },
]

const WendtechBridge = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref}>
      <div className="book-section-inner">
        <motion.div
          className="wendtech-bridge"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="section-header" style={{ marginBottom: '0' }}>
            <span className="section-tag">L'Agence</span>
            <h2 className="section-title">
              Un livre. Une agence.{' '}
              <span className="gradient">Une vision.</span>
            </h2>
            <p className="section-desc">
              Ce livre est écrit par l'équipe Wendtech — l'agence digitale qui
              accompagne les PME africaines dans leur transformation numérique.
            </p>
          </div>

          <motion.div
            className="bridge-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {bridgeItems.map((item, i) => (
              <motion.div key={i} className="bridge-item" variants={fadeUp}>
                <div className="bridge-icon">
                  <item.Icon size={22} />
                </div>
                <div className="bridge-label">{item.label}</div>
                <div className="bridge-desc">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="wendtech-bridge-cta">
            <a href="/#contact" className="btn btn-secondary">
              Découvrir nos services →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 7 — FAQ ACCORDÉON
   ============================================ */
const faqItems = [
  {
    q: 'Le livre est vraiment gratuit ?',
    a: "Oui, totalement gratuit. Aucun email requis, aucune carte bancaire. Télécharge et lis. Si tu veux aller plus loin avec ton projet digital, l'équipe Wendtech est là.",
  },
  {
    q: "À qui s'adresse ce livre ?",
    a: "Aux développeurs qui codent déjà mais qui veulent structurer leur collaboration avec l'IA. Un dev avec 6 mois d'expérience peut en tirer parti dès le chapitre 1.",
  },
  {
    q: 'Ça marche avec quel outil IA ?',
    a: "Le framework est agnostique. ChatGPT, Claude, Gemini, Copilot — les principes s'appliquent à tout modèle de langage.",
  },
  {
    q: 'Le livre est en quelle langue ?',
    a: 'Entièrement en français. Conçu pour les devs francophones avec des exemples du marché africain.',
  },
  {
    q: 'Comment contacter Wendtech pour un projet ?',
    a: 'Via le formulaire sur wendtech.site ou directement sur WhatsApp au +226 65 17 07 78. Devis gratuit sous 48h.',
  },
]

const FaqItem = ({ item, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item ${open ? 'faq-open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <ChevronDown
          size={20}
          className={`faq-chevron ${open ? 'rotated' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {item.a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FaqSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref}>
      <div className="book-section-inner">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Questions <span className="gradient">Fréquentes</span>
          </h2>
        </motion.div>

        <motion.div
          className="faq-list"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {faqItems.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <FaqItem item={item} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 8 — CTA FINAL
   ============================================ */
const FinalCta = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="book-final-cta" ref={ref}>
      <motion.div
        className="book-final-cta-inner"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="book-final-badge" variants={fadeUp}>
          📥 Téléchargement immédiat • Aucun compte requis
        </motion.div>

        <motion.h2 className="book-final-title" variants={fadeUp}>
          Arrête de coder.{' '}
          <span className="gradient">Commence à architecturer.</span>
        </motion.h2>

        <motion.p className="book-final-sub" variants={fadeUp}>
          Le framework qui change tout. En français. Gratuit. Maintenant.
        </motion.p>

        <motion.div variants={fadeUp}>
          <button className="btn-cta-giant" onClick={handleDownload}>
            <Download
              size={20}
              style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }}
            />
            Télécharger Le Développeur Augmenté →
          </button>
        </motion.div>

        <motion.div className="book-final-sub-link" variants={fadeUp}>
          Un projet digital en tête ?{' '}
          <a href="/#contact">→ Contacte Wendtech</a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default BookPage
