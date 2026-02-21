import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'ebooks', label: 'Ebooks', page: '/ebooks' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleEbooksClick = (e) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    navigate('/ebooks')
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#accueil" className="logo" onClick={(e) => handleNavClick(e, 'accueil')}>
          WEND<span>TECH</span>
        </a>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.page ?? `#${link.id}`}
                onClick={link.page ? handleEbooksClick : (e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              className="nav-cta"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Devis Gratuit
            </a>
          </li>
        </ul>

        <button 
          className="mobile-menu" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu mobile"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
