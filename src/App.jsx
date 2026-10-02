import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Loader from './components/Loader'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Clients from './components/Clients'
import Products from './components/Products'
import Sectors from './components/Sectors'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollProgress from './components/ui/ScrollProgress'
import ServicePage from './components/ServicePage'
import useDocumentMeta from './hooks/useDocumentMeta'
import { ROUTES } from './data/routeMeta'

function HomePage() {
  const [loading, setLoading] = useState(true)

  useDocumentMeta({
    title: ROUTES[0].title,
    description: ROUTES[0].description,
    path: '/'
  })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={loading} />
      <a className="skip-link" href="#contenu">Aller au contenu principal</a>
      <ScrollProgress />
      <Topbar />
      <Navbar />
      <main id="contenu">
        <Hero />
        <Marquee />
        <Products />
        <Sectors />
        <Services />
        <Features />
        <About />
        <Pricing />
        <Clients />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

// Le routeur ne gère pas le défilement : on remonte en haut à chaque
// changement de page, ou on rejoint la section visée par l'ancre.
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ block: 'start' })
    else window.scrollTo(0, 0)
  }, [pathname, hash])
}

function App() {
  useScrollOnNavigate()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:slug" element={<ServicePage />} />
    </Routes>
  )
}

export default App
