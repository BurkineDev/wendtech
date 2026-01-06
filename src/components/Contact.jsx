import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import {
  sanitizeInput,
  validateFormData,
  sanitizeFormData,
  RateLimiter,
  escapeHTML
} from '../utils/security'

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
  { icon: MapPin, label: 'Adresse', value: 'Bobo Dioulasso, Burkina Faso' },
  { icon: MapPin, label: 'B.P', value: 'SC BP 1096 BOBO' },
  { icon: Phone, label: 'Téléphone BF', value: '+226 65 17 07 78' },
  { icon: Phone, label: 'Téléphone CA', value: '+1 819 219 0558' },
  { icon: Mail, label: 'Email', value: 'saristide99@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+226 65 17 07 78' }
]

const serviceOptions = [
  { value: '', label: 'Sélectionnez un service' },
  { value: 'site-vitrine', label: 'Site Vitrine' },
  { value: 'e-commerce', label: 'Site E-commerce' },
  { value: 'app-mobile', label: 'Application Mobile' },
  { value: 'consulting', label: 'Consulting Digital' },
  { value: 'plateforme-inscriptions', label: 'Plateforme d\'Inscriptions' },
  { value: 'autre', label: 'Autre' }
]

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ type: '', messages: [] })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sanitize input in real-time
  const handleChange = (e) => {
    const { name, value } = e.target
    // Remove dangerous characters as user types
    const sanitized = value.replace(/<[^>]*>|javascript:|on\w+=/gi, '')
    setFormData(prev => ({ ...prev, [name]: sanitized }))
    // Clear status when user starts typing
    if (status.type) setStatus({ type: '', messages: [] })
  }

  // Handle paste to sanitize pasted content
  const handlePaste = (e) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text')
    const sanitized = sanitizeInput(text)
    const { name } = e.target
    setFormData(prev => ({ ...prev, [name]: prev[name] + sanitized }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Rate limiting check
    if (!RateLimiter.canSubmit()) {
      const remaining = RateLimiter.getRemainingTime()
      setStatus({
        type: 'warning',
        messages: [`Trop de tentatives. Veuillez patienter ${remaining} secondes.`]
      })
      return
    }

    // Validate form data
    const validation = validateFormData(formData)
    if (!validation.isValid) {
      setStatus({ type: 'error', messages: validation.errors })
      RateLimiter.recordAttempt()
      return
    }

    setIsSubmitting(true)

    try {
      // Get sanitized data
      const sanitizedData = sanitizeFormData(formData)

      // Find service label for email
      const serviceLabel = serviceOptions.find(opt => opt.value === sanitizedData.service)?.label || sanitizedData.service

      // Prepare email template parameters
      const templateParams = {
        from_name: sanitizedData.name,
        from_email: sanitizedData.email,
        phone: sanitizedData.phone,
        service: serviceLabel,
        message: sanitizedData.message,
        to_email: 'saristide99@gmail.com'
      }

      // Send email via EmailJS
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )
      } else {
        // Fallback: log data if EmailJS not configured
        console.log('EmailJS non configuré. Données du formulaire:', templateParams)
      }

      // Success
      setStatus({
        type: 'success',
        messages: ['Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.']
      })

      RateLimiter.recordAttempt()

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
        setStatus({ type: '', messages: [] })
      }, 5000)

    } catch (error) {
      console.error('Erreur envoi email:', error)
      setStatus({
        type: 'error',
        messages: ['Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.']
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="contact" id="contact">
      <motion.div
        ref={ref}
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="contact-info" variants={itemVariants}>
          <span className="section-tag">Contact</span>
          <h2>Parlons de Votre Projet</h2>
          <p>
            Prêt à digitaliser votre entreprise ? Contactez-nous pour un devis 
            gratuit et sans engagement.
          </p>
          
          <div className="contact-details">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <item.icon size={22} color="#00f0ff" />
                </div>
                <div className="contact-item-text">
                  <span className="label">{item.label}</span>
                  <span className="value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="contact-form" variants={itemVariants}>
          <form onSubmit={handleSubmit} noValidate>
            {/* Status Messages */}
            {status.type && (
              <div className={`form-${status.type}`} role="alert">
                {status.type === 'error' && <strong>⚠️ Erreur(s) :</strong>}
                {status.type === 'success' && '✅ '}
                {status.type === 'warning' && '⏳ '}
                {status.messages.length === 1 ? (
                  <span>{status.messages[0]}</span>
                ) : (
                  <ul style={{ margin: '0.5rem 0 0 1.5rem', padding: 0 }}>
                    {status.messages.map((msg, i) => (
                      <li key={i}>{escapeHTML(msg)}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  placeholder="Votre nom"
                  required
                  maxLength={100}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onPaste={handlePaste}
                  placeholder="+226 XX XX XX XX"
                  required
                  maxLength={20}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onPaste={handlePaste}
                placeholder="votre@email.com"
                required
                maxLength={254}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service souhaité</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onPaste={handlePaste}
                placeholder="Décrivez votre projet..."
                required
                minLength={10}
                maxLength={2000}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma Demande'}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
