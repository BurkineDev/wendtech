import { useState } from 'react'
import { Phone, Mail, MessageCircle, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import {
  sanitizeInput,
  validateFormData,
  sanitizeFormData,
  RateLimiter
} from '../utils/security'
import Reveal from './ui/Reveal'
import { Eyebrow, PillButton } from './ui/Bits'
import { CONTACT } from '../data/site'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
  { icon: Phone,         label: 'Téléphone',  value: CONTACT.phoneBF.display, href: CONTACT.phoneBF.href },
  { icon: Phone,         label: 'Téléphone',  value: CONTACT.phoneCA.display, href: CONTACT.phoneCA.href },
  { icon: Mail,          label: 'Courriel',   value: CONTACT.email.display,   href: CONTACT.email.href },
  { icon: MessageCircle, label: 'WhatsApp',   value: CONTACT.phoneBF.display, href: CONTACT.whatsapp.url }
]

const serviceOptions = [
  { value: '', label: 'Sélectionnez un service' },
  { value: 'site-vitrine', label: 'Site Vitrine' },
  { value: 'e-commerce', label: 'Site E-commerce' },
  { value: 'app-mobile', label: 'Application Mobile' },
  { value: 'consulting', label: 'Consulting Digital' },
  { value: 'plateforme-inscriptions', label: "Plateforme d'Inscriptions" },
  { value: 'autre', label: 'Autre' }
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState({ type: '', messages: [] })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Nettoyage à la volée : on retire les balises et schémas dangereux.
  const handleChange = (e) => {
    const { name, value } = e.target
    const sanitized = value.replace(/<[^>]*>|javascript:|on\w+=/gi, '')
    setFormData((prev) => ({ ...prev, [name]: sanitized }))
    if (status.type) setStatus({ type: '', messages: [] })
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text')
    const { name } = e.target
    setFormData((prev) => ({ ...prev, [name]: prev[name] + sanitizeInput(text) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!RateLimiter.canSubmit()) {
      setStatus({
        type: 'warning',
        messages: [`Trop de tentatives. Veuillez patienter ${RateLimiter.getRemainingTime()} secondes.`]
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
      const data = sanitizeFormData(formData)
      const serviceLabel = serviceOptions.find((o) => o.value === data.service)?.label || data.service

      const templateParams = {
        title: `Demande ${serviceLabel}`,
        name: data.name,
        nom: data.name,
        email: data.email,
        message: `Service: ${serviceLabel}\nTéléphone: ${data.phone}\n\n${data.message}`
      }

      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      } else {
        console.log('EmailJS non configuré. Données du formulaire :', templateParams)
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
    <section className="section section--alt has-decor" id="contact">
      <img className="decor decor--left" src="/decor/cta-glow.svg" alt="" aria-hidden="true" loading="lazy" />

      <div className="container two-col">
        <div>
          <Reveal><Eyebrow>Contact</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 mb-sm">Parlons de votre projet</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="muted">
              Prêt à digitaliser votre entreprise ? Contactez-nous pour un devis gratuit
              et sans engagement.
            </p>
          </Reveal>

          <div className="contact-details">
            {contactInfo.map((item, i) => (
              <Reveal className="contact-item" key={`${item.label}-${item.value}-${i}`} delay={i * 0.06}>
                <span className="contact-item__icon"><item.icon size={22} /></span>
                <span>
                  <span className="contact-item__label">{item.label}</span>
                  <a className="contact-item__value" href={item.href}>{item.value}</a>
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="card" delay={0.1}>
          <form className="form" onSubmit={handleSubmit} noValidate>
            {status.type && (
              <div className={`form-status form-status--${status.type}`} role="alert">
                {status.messages.length === 1 ? (
                  <span>{status.messages[0]}</span>
                ) : (
                  <>
                    <strong>Erreur(s) :</strong>
                    <ul>{status.messages.map((msg, i) => <li key={i}>{msg}</li>)}</ul>
                  </>
                )}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input id="name" name="name" type="text" value={formData.name}
                  onChange={handleChange} onPaste={handlePaste}
                  placeholder="Votre nom" required maxLength={100} autoComplete="off" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input id="phone" name="phone" type="tel" value={formData.phone}
                  onChange={handleChange} onPaste={handlePaste}
                  placeholder="+XX XX XX XX XX" required maxLength={20} autoComplete="off" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email}
                onChange={handleChange} onPaste={handlePaste}
                placeholder="votre@email.com" required maxLength={254} autoComplete="off" />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service souhaité</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message}
                onChange={handleChange} onPaste={handlePaste}
                placeholder="Décrivez votre projet…" required minLength={10} maxLength={2000} />
            </div>

            <PillButton type="submit" variant="btn--block" icon={Send} disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
            </PillButton>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
