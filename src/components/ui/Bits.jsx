import { Asterisk, ArrowUpRight } from 'lucide-react'

/** Intitulé de section en petites capitales espacées, précédé de l'astérisque lime. */
export const Eyebrow = ({ children, center = false }) => (
  <p className={`eyebrow${center ? ' eyebrow--center' : ''}`}>
    {!center && <Asterisk size={18} strokeWidth={2.4} />}
    {children}
  </p>
)

/**
 * Bouton pilule : libellé sombre + pastille lime circulaire.
 * Rendu en <a> par défaut, en <button> si `onClick` est fourni sans `href`.
 */
export const PillButton = ({
  children,
  href,
  onClick,
  icon: Icon = ArrowUpRight,
  variant = '',
  type = 'button',
  disabled = false,
  className: extraClass = '',
  ...rest
}) => {
  const className = ['btn', variant, extraClass].filter(Boolean).join(' ')
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {Icon && (
        <span className="btn__icon">
          <Icon size={22} strokeWidth={2} />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick} {...rest}>
        {inner}
      </a>
    )
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled} {...rest}>
      {inner}
    </button>
  )
}

/** Bouton plein lime, sans pastille (grand appel à l'action). */
export const SolidButton = ({ children, href, onClick, icon: Icon, className: extraClass = '', ...rest }) => {
  const className = ['btn', 'btn--solid', extraClass].filter(Boolean).join(' ')
  const inner = (
    <span className="btn__label">
      {Icon && <Icon size={24} strokeWidth={2} />}
      {children}
    </span>
  )
  return href
    ? <a className={className} href={href} onClick={onClick} {...rest}>{inner}</a>
    : <button className={className} type="button" onClick={onClick} {...rest}>{inner}</button>
}
