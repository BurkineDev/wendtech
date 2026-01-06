import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={loading} />
      <div className="bg-grid" />
      <div className="bg-glow" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <Pricing />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
