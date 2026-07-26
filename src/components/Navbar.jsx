import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Grip, X, Phone, Mail, MapPin } from 'lucide-react'
import { PillButton } from './ui/Bits'
import { CONTACT, NAV_LINKS } from '../data/site'

const Navbar = () => {
  const [stuck, setStuck] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Verrouille le défilement de la page quand le menu latéral est ouvert.
  useEffect(() => {
    document.body.classList.toggle('is-locked', drawerOpen)
    return () => document.body.classList.remove('is-locked')
  }, [drawerOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const goToSection = useCallback((e, id) => {
    e.preventDefault()
    setDrawerOpen(false)
    if (id === 'ebooks') { navigate('/ebooks'); return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [navigate])

  const drawer = (
    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            className="drawer-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setDrawerOpen(false)}
          />
          <motion.aside
            className="drawer"
            aria-label="Menu"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="drawer__head">
              <span className="logo logo--sm">WEND<span>TECH</span></span>
              <button className="drawer__close" type="button" aria-label="Fermer le menu" onClick={() => setDrawerOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <nav className="drawer__nav" aria-label="Navigation du menu">
              {NAV_LINKS.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => goToSection(e, link.id)}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="drawer__contact">
              <p>
                <Phone size={18} />
                <span>
                  <a href={CONTACT.phoneBF.href}>{CONTACT.phoneBF.display}</a><br />
                  <a href={CONTACT.phoneCA.href}>{CONTACT.phoneCA.display}</a>
                </span>
              </p>
              <p><Mail size={18} /><a href={CONTACT.email.href}>{CONTACT.email.display}</a></p>
              <p><MapPin size={18} />{CONTACT.location}</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <header className={`header${stuck ? ' is-stuck' : ''}`}>
        <a className="logo" href="#accueil" onClick={(e) => goToSection(e, 'accueil')} aria-label="Wendtech — accueil">
          WEND<span>TECH</span>
        </a>

        <nav className="nav" aria-label="Navigation principale">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.id}
              className={`nav__link${i === 0 ? ' is-active' : ''}`}
              href={`#${link.id}`}
              onClick={(e) => goToSection(e, link.id)}
            >
              {link.label}
            </a>
          ))}
          <PillButton className="nav__cta" href="#contact" onClick={(e) => goToSection(e, 'contact')}>
            Devis Gratuit
          </PillButton>
        </nav>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={drawerOpen}
          aria-label={drawerOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <Grip size={20} />
        </button>
      </header>

      {createPortal(drawer, document.body)}
    </>
  )
}

export default Navbar
