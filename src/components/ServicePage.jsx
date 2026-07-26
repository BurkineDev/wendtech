import { useParams, Navigate, useNavigate } from 'react-router'
import { Asterisk, ArrowLeft } from 'lucide-react'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollProgress from './ui/ScrollProgress'
import Reveal from './ui/Reveal'
import FloatingDecor from './ui/FloatingDecor'
import { Eyebrow, PillButton } from './ui/Bits'
import { getService } from '../data/services'
import { ROUTES, SITE } from '../data/routeMeta'
import useDocumentMeta from '../hooks/useDocumentMeta'

const ServicePage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = getService(slug)
  const meta = ROUTES.find((r) => r.path === `/services/${slug}`)

  useDocumentMeta({
    title: meta?.title ?? 'Nos services | Wendtech',
    description: meta?.description ?? '',
    path: `/services/${slug}`
  })

  if (!service) return <Navigate to="/" replace />

  const Icon = service.icon

  // Décrit l'offre pour les moteurs de recherche.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.eyebrow,
    description: meta?.description ?? service.lead,
    url: `${SITE}/services/${service.slug}`,
    provider: { '@type': 'ProfessionalService', name: 'Wendtech', '@id': `${SITE}/#organisation` },
    areaServed: [
      { '@type': 'Country', name: 'Burkina Faso' },
      { '@type': 'Country', name: 'Canada' }
    ]
  }

  return (
    <>
      <ScrollProgress />
      <Topbar />
      <Navbar />

      <main id="contenu">
        <section className="hero has-decor">
          <FloatingDecor src="/decor/glow-shape.svg" className="decor--right" parallax={60} pulse />

          <div className="container hero__inner">
            <Reveal>
              <button className="link-back" type="button" onClick={() => navigate('/')}>
                <ArrowLeft size={16} /> Retour à l'accueil
              </button>
            </Reveal>

            <Reveal delay={0.05}>
              <Eyebrow>{service.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="hero__title">{service.title}</h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="hero__lead">{service.lead}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <PillButton href="/#contact" variant="btn--lg">Demander un devis</PillButton>
            </Reveal>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container two-col">
            <div>
              {service.intro.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="muted-2" style={{ lineHeight: 1.75, marginBottom: 24 }}>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="card" delay={0.1}>
              <span className="service__icon"><Icon size={26} strokeWidth={2} /></span>
              <h2 className="h3">Ce qui est inclus</h2>
              <ul className="service__features">
                {service.features.map((f) => (
                  <li key={f}><Asterisk size={14} strokeWidth={2.6} />{f}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal><Eyebrow>Comment on travaille</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 measure">Trois étapes, sans surprise</h2>
            </Reveal>

            <div className="cards cards--3">
              {service.steps.map((step, i) => (
                <Reveal className="card" key={step.title} delay={i * 0.07}>
                  <span className="service__num">ÉTAPE 0{i + 1}</span>
                  <h3 className="h3">{step.title}</h3>
                  <p className="muted">{step.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <p className="inline-cta">
                <span className="muted-2">Un projet en tête ?</span>
                <a className="link-accent" href="/#contact">Parlons-en, le devis est gratuit</a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}

export default ServicePage
