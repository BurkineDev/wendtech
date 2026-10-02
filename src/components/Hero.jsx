import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
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

/** Les ondulations du héro descendent moins vite que la page et respirent. */
const HeroRipples = () => {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 120])

  if (reduce) {
    return <img className="hero__ripples" src="/decor/hero-ripples.svg" alt="" aria-hidden="true" />
  }

  return (
    <motion.img
      className="hero__ripples"
      src="/decor/hero-ripples.svg"
      alt=""
      aria-hidden="true"
      style={{ y }}
      animate={{ scale: [1, 1.05, 1], opacity: [0.55, 0.4, 0.55] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const Hero = () => (
  <section className="hero" id="accueil">
    <HeroRipples />

    <div className="container hero__inner">
      <Reveal><Eyebrow>Logiciels & solutions numériques · Afrique de l'Ouest</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <h1 className="hero__title">
          Des logiciels pensés pour{' '}
          <span className="accent">l'Afrique de l'Ouest</span>.
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="hero__lead">
          Applications, plateformes et SaaS qui fonctionnent dans les conditions réelles de la
          sous-région : paiement Mobile Money, commandes sur WhatsApp, réseau instable, règles
          fiscales et sociales locales. Pour les entreprises, les institutions et les porteurs
          de projets — en santé, finance, commerce, agriculture, éducation et au-delà.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="hero__actions">
          <PillButton href="#contact" variant="btn--lg">Parlons de votre projet</PillButton>
          <PillButton href="#produits" variant="btn--ghost" icon={null}>Nos produits</PillButton>
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
