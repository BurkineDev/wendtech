import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import {
  sanitizeInput,
  validateFormData,
  sanitizeFormData,
  RateLimiter,
  escapeHTML
} from '../utils/security'
import { company, serviceOptions } from '../data/site'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
  { icon: Phone, label: 'Téléphone (Burkina Faso)', value: company.phones[0] },
  { icon: Phone, label: 'Téléphone (Canada)', value: company.phones[1] },
  { icon: Mail, label: 'Courriel', value: company.email },
  { icon: MessageCircle, label: 'WhatsApp', value: company.phones[0] },
  { icon: MapPin, label: 'Adresse', value: company.addressShort }
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

  const handleChange = (e) => {
    const { name, value } = e.target
    const sanitized = value.replace(/<[^>]*>|javascript:|on\w+=/gi, '')
    setFormData((prev) => ({ ...prev, [name]: sanitized }))
    if (status.type) setStatus({ type: '', messages: [] })
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text')
    const sanitized = sanitizeInput(text)
    const { name } = e.target
    setFormData((prev) => ({ ...prev, [name]: prev[name] + sanitized }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!RateLimiter.canSubmit()) {
      const remaining = RateLimiter.getRemainingTime()
      setStatus({
        type: 'warning',
        messages: [`Trop de tentatives. Veuillez patienter ${remaining} secondes.`]
      })
      return
    }

    const validation = validateFormData(formData)
    if (!validation.isValid) {
      setStatus({ type: 'error', messages: validation.errors })
      RateLimiter.recordAttempt()
      return
    }

    setIsSubmitting(true)

    try {
      const sanitizedData = sanitizeFormData(formData)
      const serviceLabel =
        serviceOptions.find((opt) => opt.value === sanitizedData.service)?.label ||
        sanitizedData.service

      const templateParams = {
        title: `Demande ${serviceLabel}`,
        name: sanitizedData.name,
        nom: sanitizedData.name,
        email: sanitizedData.email,
        message: `Service: ${serviceLabel}\nTéléphone: ${sanitizedData.phone}\n\n${sanitizedData.message}`
      }

      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      } else {
        console.log('EmailJS non configuré. Données du formulaire:', templateParams)
      }

      setStatus({
        type: 'success',
        messages: ['Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.']
      })

      RateLimiter.recordAttempt()

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

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container contact-grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Parlons de <span className="hl">votre projet</span>
          </h2>
          <p className="section-desc">
            Prêt à digitaliser votre entreprise ? Contactez-nous pour un devis gratuit
            et sans engagement.
          </p>

          <div className="contact-list">
            {contactInfo.map((info) => (
              <div className="contact-item" key={`${info.label}-${info.value}`}>
                <span className="ci-icon"><info.icon size={20} /></span>
                <div>
                  <span className="ci-label">{info.label}</span>
                  <span className="ci-value">{info.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form onSubmit={handleSubmit} noValidate>
            {status.type && (
              <div className={`form-status ${status.type}`} role="alert">
                {status.messages.length === 1 ? (
                  <span>{status.messages[0]}</span>
                ) : (
                  <ul>
                    {status.messages.map((msg, i) => (
                      <li key={i}>{escapeHTML(msg)}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text" id="name" name="name"
                  value={formData.name} onChange={handleChange} onPaste={handlePaste}
                  placeholder="Votre nom" required maxLength={100} autoComplete="off"
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange} onPaste={handlePaste}
                  placeholder="+XXX XX XX XX XX" required maxLength={20} autoComplete="off"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Courriel</label>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} onPaste={handlePaste}
                placeholder="votre@email.com" required maxLength={254} autoComplete="off"
              />
            </div>

            <div className="field">
              <label htmlFor="service">Service souhaité</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                value={formData.message} onChange={handleChange} onPaste={handlePaste}
                placeholder="Décrivez votre projet…" required minLength={10} maxLength={2000}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
