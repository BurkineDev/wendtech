import { Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT } from '../data/site'

const Topbar = () => (
  <div className="topbar">
    <div className="topbar__item">
      <Phone size={18} />
      <span>Téléphone</span>
      <a href={CONTACT.phoneBF.href}>{CONTACT.phoneBF.display}</a>
      <a href={CONTACT.phoneCA.href}>{CONTACT.phoneCA.display}</a>
    </div>
    <div className="topbar__item">
      <Mail size={18} />
      <span>Courriel</span>
      <a href={CONTACT.email.href}>{CONTACT.email.display}</a>
    </div>
    <div className="topbar__item">
      <MapPin size={18} />
      <span>{CONTACT.location}</span>
    </div>
  </div>
)

export default Topbar
