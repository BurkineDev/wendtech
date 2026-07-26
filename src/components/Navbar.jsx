import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { navServices } from '../data/site'

const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'ebooks', label: 'Ebooks' }
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    setServicesOpen(false)
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goToEbooksPage = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    navigate('/ebooks')
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#accueil" className="logo" onClick={(e) => goTo(e, 'accueil')}>
          WEND<span>TECH</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.id === 'ebooks' ? '/ebooks' : `#${link.id}`}
                onClick={link.id === 'ebooks' ? goToEbooksPage : (e) => goTo(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li
            className="has-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <ChevronDown size={15} />
            </button>

            {servicesOpen && (
              <ul className="dropdown">
                {navServices.map((service) => (
                  <li key={service.label}>
                    <a href={service.href} onClick={(e) => goTo(e, 'services')}>
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="#contact" className="nav-cta" onClick={(e) => goTo(e, 'contact')}>
              Devis gratuit
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
