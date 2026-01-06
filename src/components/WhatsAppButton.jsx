import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = '22665170778'
  const message = encodeURIComponent('Bonjour Wendtech ! Je souhaite avoir des informations sur vos services.')

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="whatsapp-icon">
        <MessageCircle size={28} />
      </div>
      {isHovered && (
        <span className="whatsapp-tooltip">
          Discutons sur WhatsApp
        </span>
      )}
    </a>
  )
}

export default WhatsAppButton
