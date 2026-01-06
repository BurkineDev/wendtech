// ============================================
// SECURITY UTILITIES - Protection XSS & Validation
// ============================================

/**
 * Échappe les caractères HTML dangereux
 */
export const escapeHTML = (str) => {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

/**
 * Sanitise une chaîne - supprime les balises et caractères dangereux
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '') // Supprime les balises HTML
    .replace(/[<>\"'`\\]/g, '') // Supprime caractères dangereux
    .replace(/javascript:/gi, '') // Supprime javascript:
    .replace(/on\w+=/gi, '') // Supprime les event handlers
    .replace(/data:/gi, '') // Supprime data: URIs
    .trim()
    .slice(0, 5000); // Limite la longueur
};

/**
 * Valide un email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Valide un numéro de téléphone
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,20}$/;
  return phoneRegex.test(phone);
};

/**
 * Valide un nom
 */
export const isValidName = (name) => {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,100}$/;
  return nameRegex.test(name);
};

/**
 * Génère un token CSRF
 */
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Rate Limiter pour les soumissions de formulaire
 */
class RateLimiterClass {
  constructor(maxAttempts = 3, windowMs = 60000) {
    this.attempts = [];
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  canSubmit() {
    const now = Date.now();
    this.attempts = this.attempts.filter(time => now - time < this.windowMs);
    return this.attempts.length < this.maxAttempts;
  }

  recordAttempt() {
    this.attempts.push(Date.now());
  }

  getRemainingTime() {
    if (this.attempts.length === 0) return 0;
    const oldestAttempt = Math.min(...this.attempts);
    const remaining = this.windowMs - (Date.now() - oldestAttempt);
    return Math.ceil(remaining / 1000);
  }

  reset() {
    this.attempts = [];
  }
}

export const RateLimiter = new RateLimiterClass();

/**
 * Valide les données du formulaire
 */
export const validateFormData = (data) => {
  const errors = [];

  if (!data.name || !isValidName(data.name)) {
    errors.push('Nom invalide. Utilisez uniquement des lettres (2-100 caractères).');
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.push('Numéro de téléphone invalide.');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Adresse email invalide.');
  }

  const validServices = ['site-vitrine', 'e-commerce', 'app-mobile', 'consulting', 'plateforme-inscriptions', 'autre'];
  if (!data.service || !validServices.includes(data.service)) {
    errors.push('Veuillez sélectionner un service valide.');
  }

  if (!data.message || data.message.length < 10 || data.message.length > 2000) {
    errors.push('Message invalide (10-2000 caractères requis).');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Sanitise toutes les données du formulaire
 */
export const sanitizeFormData = (data) => ({
  name: sanitizeInput(data.name),
  phone: sanitizeInput(data.phone),
  email: sanitizeInput(data.email),
  service: sanitizeInput(data.service),
  message: sanitizeInput(data.message),
  timestamp: new Date().toISOString(),
  csrfToken: generateCSRFToken()
});
