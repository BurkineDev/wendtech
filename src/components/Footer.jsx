import { Facebook, Linkedin, MessageCircle } from 'lucide-react'

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'ebooks', label: 'Ebooks' },
    { id: 'contact', label: 'Contact' }
  ]

  const serviceLinks = [
    { label: 'Développement Web' },
    { label: 'Apps Mobiles' },
    { label: 'Consulting Digital' },
    { label: 'Maintenance' },
    { label: 'Plateforme d\'Inscriptions' }
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/share/18V5CWkTVQ/?mibextid=wwXIfr' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: MessageCircle, label: 'WhatsApp', url: 'https://wa.me/22665170778' }
  ]

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#accueil" className="logo" onClick={(e) => handleNavClick(e, 'accueil')}>
              WEND<span>TECH</span>
            </a>
            <p>
              Votre partenaire digital international. Nous accompagnons les PME et entreprises
              dans leur transformation numérique avec des solutions innovantes et accessibles.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>+226 65 17 07 78</li>
              <li>+1 819 219 0558</li>
              <li>saristide99@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Wendtech. Tous droits réservés.</p>
          <p>Conçu avec ❤️ par Wendtech</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
