import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AnimatePresence } from 'framer-motion'
import { ArrowLeft, Download, Eye, BookOpen, Users, Zap, Target, Star } from 'lucide-react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollProgress from './ui/ScrollProgress'
import Reveal from './ui/Reveal'
import FloatingDecor from './ui/FloatingDecor'
import { Eyebrow, PillButton, SolidButton } from './ui/Bits'
import { ebooks, LeadForm } from './Ebooks'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './BookPage.css'

const book = ebooks[0]

const stats = [
  { num: '12', label: 'Chapitres' },
  { num: '500+', label: 'Développeurs' },
  { num: '100 %', label: 'Gratuit' }
]

const benefits = [
  { icon: Target,   title: 'Penser avant de coder',  desc: "Le framework Architecture Cognitive t'apprend à définir le vrai problème avant d'ouvrir ton éditeur." },
  { icon: Zap,      title: 'Prompts qui produisent', desc: 'Finis les réponses génériques. Tu construis des prompts précis qui donnent du code utilisable dès le premier essai.' },
  { icon: Users,    title: 'Cas réels africains',    desc: "Des exemples tirés de projets PME au Burkina, en Côte d'Ivoire et au Sénégal — pas des cas Silicon Valley hors-sol." },
  { icon: BookOpen, title: 'Anti-patterns évités',   desc: '12 formulations catastrophiques identifiées et remplacées. Tu ne perdras plus des heures à débugger du code IA.' }
]

const chapters = [
  { tag: 'Fondation',     title: 'Architecture Cognitive',     desc: "Le cadre mental pour travailler avec l'IA comme un architecte, pas un exécutant." },
  { tag: 'Méthode',       title: 'Le Prompt Structuré',        desc: "Anatomie d'un prompt efficace : contexte, contraintes, format de sortie." },
  { tag: 'Workflow',      title: 'Boucles de Développement',   desc: "Comment intégrer l'IA dans ton cycle de développement sans perdre le contrôle." },
  { tag: 'Anti-patterns', title: 'Les Anti-Prompts',           desc: 'Les 12 erreurs de prompting qui sabotent ton code — et comment les éviter.' },
  { tag: 'Pratique',      title: 'Cas Réels — PME Africaines', desc: 'Du brief client flou au déploiement : cas documentés étape par étape.' },
  { tag: 'Futur',         title: 'Le Dev Augmenté en 2025',    desc: "Comment rester pertinent et irremplaçable face à l'évolution de l'IA." }
]

const reviews = [
  { name: 'Moussa K.',      role: 'Dev Full-Stack, Dakar',   text: "J'utilisais l'IA depuis 1 an sans résultats constants. Après le chapitre 3, tout a changé. MVP livré en 3 semaines au lieu de 2 mois." },
  { name: 'Aminata S.',     role: 'CTO Startup, Abidjan',    text: "Le framework Architecture Cognitive m'a appris à penser avant de prompter. Basique mais jamais enseigné nulle part." },
  { name: 'Jean-Pierre T.', role: 'Dev Mobile, Ouagadougou', text: "Les anti-prompts du chapitre 4 m'ont choqué — j'utilisais 8 des 12 formulations catastrophiques. Plus maintenant." }
]

const initials = (name) => name.split(' ').map((n) => n[0]).join('')

export default function BookPage() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const openModal = () => setModal(true)

  useDocumentMeta({
    title: 'Le Développeur Augmenté — ebook gratuit | Wendtech',
    description: "Guide pratique gratuit pour apprendre à penser avec l'IA plutôt que lui demander du code : 12 chapitres, frameworks actionnables et cas réels africains.",
    path: '/ebooks'
  })

  return (
    <>
      <ScrollProgress />
      <Topbar />
      <Navbar />

      <main id="contenu">
        {/* ── Héro ── */}
        <section className="hero has-decor">
          <FloatingDecor src="/decor/glow-shape.svg" className="decor--right" parallax={60} pulse />

          <div className="container hero__inner book-hero">
            <div>
              <Reveal>
                <button className="link-back" type="button" onClick={() => navigate('/')}>
                  <ArrowLeft size={16} /> Retour à l'accueil
                </button>
              </Reveal>

              <Reveal delay={0.05}><Eyebrow>Ressource gratuite</Eyebrow></Reveal>

              <Reveal delay={0.1}>
                <h1 className="hero__title">Le Développeur <span className="accent">Augmenté</span></h1>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="hero__lead">
                  Le guide pratique pour <strong>penser avec l'IA</strong> — pas juste lui demander
                  du code. 12 chapitres, frameworks actionnables, cas réels du marché africain.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="hero__actions">
                  <PillButton onClick={openModal} icon={Download} variant="btn--lg">
                    Télécharger gratuitement
                  </PillButton>
                  <PillButton href={book.file} target="_blank" rel="noopener noreferrer"
                    variant="btn--ghost" icon={Eye}>
                    Aperçu PDF
                  </PillButton>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="book-stats">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <p className="book-stats__num accent">{s.num}</p>
                      <p className="stat__label">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="book-hero__cover">
              <img className="ebook__cover" src={book.cover} alt={`Couverture ${book.title}`} />
            </Reveal>
          </div>
        </section>

        {/* ── Bénéfices ── */}
        <section className="section section--alt">
          <div className="container">
            <Reveal><Eyebrow>Ce que tu vas apprendre</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 measure">Pourquoi ce livre est <span className="accent">différent</span></h2>
            </Reveal>

            <div className="cards cards--4">
              {benefits.map((b, i) => (
                <Reveal className="card card--hover" key={b.title} delay={i * 0.07}>
                  <span className="service__icon"><b.icon size={26} strokeWidth={2} /></span>
                  <h3 className="h4">{b.title}</h3>
                  <p className="muted">{b.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Chapitres ── */}
        <section className="section">
          <div className="container">
            <Reveal><Eyebrow>Contenu</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 measure">Les <span className="accent">chapitres</span></h2>
            </Reveal>

            <ol className="chapters">
              {chapters.map((ch, i) => (
                <Reveal as="li" className="chapter" key={ch.title} delay={i * 0.05}>
                  <span className="chapter__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="chapter__body">
                    <span className="chapter__tag">{ch.tag}</span>
                    <h3 className="h4">{ch.title}</h3>
                    <p className="muted">{ch.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Témoignages ── */}
        <section className="section section--alt">
          <div className="container">
            <Reveal><Eyebrow>Témoignages</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 measure">Ce qu'en disent les <span className="accent">développeurs</span></h2>
            </Reveal>

            <div className="cards cards--3">
              {reviews.map((r, i) => (
                <Reveal as="figure" className="card review" key={r.name} delay={i * 0.07}>
                  <div className="review__stars" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <blockquote className="muted-2">« {r.text} »</blockquote>
                  <figcaption className="review__author">
                    <span className="review__avatar">{initials(r.name)}</span>
                    <span>
                      <strong>{r.name}</strong>
                      <span className="muted-3">{r.role}</span>
                    </span>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Appel à l'action ── */}
        <section className="cta">
          <div className="container cta__inner">
            <Reveal><Eyebrow center>Prêt à coder autrement ?</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="cta__title">Télécharge le guide <span className="accent">gratuitement</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <SolidButton onClick={openModal} icon={Download}>Télécharger maintenant</SolidButton>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <AnimatePresence>
        {modal && <LeadForm ebook={book} onClose={() => setModal(false)} />}
      </AnimatePresence>
    </>
  )
}
