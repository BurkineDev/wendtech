import { Smile } from 'lucide-react'
import Reveal from './ui/Reveal'
import { SolidButton } from './ui/Bits'

const CTA = () => {
  const goToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="cta has-decor">
      <img className="decor decor--center" src="/decor/cta-glow.svg" alt="" aria-hidden="true" loading="lazy" />

      <div className="cta__inner">
        <Reveal><p className="eyebrow eyebrow--center">Collaborons</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="cta__title">
            Travaillons <span className="accent">ensemble</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <SolidButton href="#contact" onClick={goToContact} icon={Smile}>
            Nous joindre
          </SolidButton>
        </Reveal>
      </div>
    </section>
  )
}

export default CTA
