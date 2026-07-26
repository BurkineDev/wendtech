import { Facebook, Linkedin, MessageCircle, Phone, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { CONTACT, NAV_LINKS } from '../data/site'

const socialIcons = { Facebook, LinkedIn: Linkedin, WhatsApp: MessageCircle }

const serviceLinks = [
  'Développement Web',
  'Applications Mobiles',
  'Consulting Digital',
  'Maintenance & Hébergement',
  "Plateforme d'Inscriptions"
]

const Footer = () => {
  const navigate = useNavigate()

  const goToSection = (e, id) => {
    e.preventDefault()
    if (id === 'ebooks') { navigate('/ebooks'); return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="logo logo--sm" href="#accueil" onClick={(e) => goToSection(e, 'accueil')}>
            WEND<span>TECH</span>
          </a>
          <p className="muted">
            Votre partenaire digital international. Nous accompagnons les PME et entreprises
            dans leur transformation numérique avec des solutions innovantes et accessibles.
          </p>
          <div className="footer__social">
            {[
              { label: 'Facebook', url: '#' },
              { label: 'LinkedIn', url: '#' },
              { label: 'WhatsApp', url: CONTACT.whatsapp.url }
            ].map((social) => {
              const Icon = socialIcons[social.label]
              return (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        <nav className="footer__col" aria-label="Navigation">
          <h3 className="h5">Navigation</h3>
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => goToSection(e, link.id)}>
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Services">
          <h3 className="h5">Services</h3>
          {serviceLinks.map((label) => (
            <a key={label} href="#services" onClick={(e) => goToSection(e, 'services')}>
              {label}
            </a>
          ))}
        </nav>

        <div className="footer__col">
          <h3 className="h5">Contact</h3>
          <a href={CONTACT.phoneBF.href}><Phone size={15} style={{ display: 'inline', marginRight: 8, verticalAlign: -2 }} />{CONTACT.phoneBF.display}</a>
          <a href={CONTACT.phoneCA.href}><Phone size={15} style={{ display: 'inline', marginRight: 8, verticalAlign: -2 }} />{CONTACT.phoneCA.display}</a>
          <a href={CONTACT.email.href}><Mail size={15} style={{ display: 'inline', marginRight: 8, verticalAlign: -2 }} />{CONTACT.email.display}</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Wendtech. Tous droits réservés.</p>
        <p>Entreprise immatriculée au Burkina Faso.</p>
      </div>
    </footer>
  )
}

export default Footer
