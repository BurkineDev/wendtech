import { Facebook, Linkedin, MessageCircle, MapPin, ArrowRight } from 'lucide-react'
import { company } from '../data/site'

const quickLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'services', label: 'Services' },
  { id: 'realisations', label: 'Réalisations' },
  { id: 'forfaits', label: 'Forfaits' }
]

const serviceLinks = [
  'Développement web',
  'Applications mobiles',
  'Sites e-commerce',
  "Plateforme d'inscriptions",
  'Consulting digital',
  'Maintenance & hébergement'
]

const Footer = () => {
  const goTo = (e, targetId) => {
    e.preventDefault()
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const socials = [
    { icon: Facebook, label: 'Facebook', url: company.facebook },
    { icon: Linkedin, label: 'LinkedIn', url: company.linkedin },
    { icon: MessageCircle, label: 'WhatsApp', url: `https://wa.me/${company.whatsapp}` }
  ]

  return (
    <footer>
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="eyebrow">Collaborons</span>
            <h2>Travaillons ensemble</h2>
          </div>
          <a href="#contact" className="btn btn-primary" onClick={(e) => goTo(e, 'contact')}>
            Nous joindre <ArrowRight size={17} />
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#accueil" className="logo" onClick={(e) => goTo(e, 'accueil')}>
              WEND<span>TECH</span>
            </a>
            <p>
              {company.tagline}. Nous accompagnons les PME et entreprises dans leur
              transformation numérique avec des solutions innovantes et accessibles.
            </p>
            <div className="socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Nous joindre</h4>
            <ul>
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                </li>
              ))}
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              {company.locations.map((location) => (
                <li className="addr" key={location}>
                  <MapPin size={16} /> {location}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Liens rapides</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => goTo(e, link.id)}>{link.label}</a>
                </li>
              ))}
              <li><a href="/ebooks">Ebooks</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" onClick={(e) => goTo(e, 'services')}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
          <nav>
            <a href="#contact" onClick={(e) => goTo(e, 'contact')}>Nous contacter</a>
            <a href="#apropos" onClick={(e) => goTo(e, 'apropos')}>À propos</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
