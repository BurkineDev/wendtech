import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Clients from './components/Clients'
import Ebooks from './components/Ebooks'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BookPage from './components/BookPage'

function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={loading} />
      <a className="skip-link" href="#contenu">Aller au contenu principal</a>
      <Topbar />
      <Navbar />
      <main id="contenu">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Features />
        <Portfolio />
        <Pricing />
        <Clients />
        <Ebooks />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ebooks" element={<BookPage />} />
    </Routes>
  )
}

export default App
