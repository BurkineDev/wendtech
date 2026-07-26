import { Facebook, Linkedin, MessageCircle, Phone, Mail } from 'lucide-react'
import { useNavigate, Link } from 'react-router'
import { CONTACT, NAV_LINKS, SOCIALS } from '../data/site'

const socialIcons = { Facebook, LinkedIn: Linkedin, WhatsApp: MessageCircle }

// On n'affiche que les réseaux dont l'adresse est renseignée dans data/site.js :
// une icône sans destination vaut moins que pas d'icône du tout.
const activeSocials = SOCIALS.filter((s) => s.url && s.url !== '#')

const serviceLinks = [
  { label: 'Création de site web',        to: '/services/creation-site-web' },
  { label: 'Site e-commerce',             to: '/services/site-e-commerce' },
  { label: 'Application mobile',          to: '/services/application-mobile' },
  { label: "Plateforme d'inscriptions",   to: '/services/plateforme-inscriptions' },
  { label: 'Consulting digital',          to: null },
  { label: 'Maintenance & hébergement',   to: null }
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
          {activeSocials.length > 0 && (
            <div className="footer__social">
              {activeSocials.map((social) => {
                const Icon = socialIcons[social.label]
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          )}
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
          {serviceLinks.map((link) => (
            link.to
              ? <Link key={link.label} to={link.to}>{link.label}</Link>
              : <a key={link.label} href="#services" onClick={(e) => goToSection(e, 'services')}>{link.label}</a>
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
