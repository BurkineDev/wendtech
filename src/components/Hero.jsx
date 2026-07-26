import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Reveal from './ui/Reveal'
import { Eyebrow, PillButton } from './ui/Bits'
import { STATS } from '../data/site'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Compteur animé de 0 vers `target`.
 * La valeur finale s'affiche immédiatement si les animations sont réduites,
 * et un filet de sécurité la force si requestAnimationFrame est bridé.
 */
const CounterStat = ({ target, suffix, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const [count, setCount] = useState(target)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    if (prefersReducedMotion()) { setCount(target); return }

    const duration = 1600
    let raf = null
    let t0 = null

    const safety = setTimeout(() => {
      if (raf !== null) cancelAnimationFrame(raf)
      setCount(target)
    }, duration + 800)

    const tick = (now) => {
      if (t0 === null) t0 = now
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
      else { raf = null; clearTimeout(safety) }
    }

    setCount(0)
    raf = requestAnimationFrame(tick)

    return () => {
      if (raf !== null) cancelAnimationFrame(raf)
      clearTimeout(safety)
    }
  }, [inView, target])

  return (
    <div ref={ref}>
      <div className="stat__num">{count}{suffix}</div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

const Hero = () => (
  <section className="hero" id="accueil">
    <img className="hero__ripples" src="/decor/hero-ripples.svg" alt="" aria-hidden="true" />

    <div className="container hero__inner">
      <Reveal><Eyebrow>Agence digitale internationale</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <h1 className="hero__title">
          La technologie au service de{' '}
          <span className="accent">votre croissance digitale</span>.
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="hero__lead">
          Nous accompagnons les PME et entreprises du monde entier dans leur transformation
          numérique avec des solutions web et mobiles performantes, abordables et adaptées
          à chaque contexte.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="hero__actions">
          <PillButton href="#contact" variant="btn--lg">Demander un devis</PillButton>
          <PillButton href="#services" variant="btn--ghost" icon={null}>Nos services</PillButton>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="stats">
          {STATS.map((stat) => (
            <CounterStat key={stat.label} target={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)

export default Hero
