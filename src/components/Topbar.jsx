import { Phone, Mail, MapPin } from 'lucide-react'
import { company } from '../data/site'

const Topbar = () => (
  <div className="topbar">
    <div className="container topbar-inner">
      <div className="topbar-item">
        <Phone size={15} />
        <strong>Téléphone</strong>
        {company.phones.map((phone) => (
          <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
        ))}
      </div>

      <div className="topbar-item">
        <Mail size={15} />
        <strong>Courriel</strong>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </div>

      <div className="topbar-item">
        <MapPin size={15} />
        <strong>Adresse</strong>
        <span>{company.addressShort}</span>
      </div>
    </div>
  </div>
)

export default Topbar
