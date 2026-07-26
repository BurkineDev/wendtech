import { Target, Globe, Wallet, Rocket } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Eyebrow } from './ui/Bits'

const features = [
  {
    number: '01',
    icon: Target,
    title: 'Solutions sur mesure',
    description: 'Des solutions personnalisées adaptées aux besoins spécifiques des PME et commerçants burkinabè.'
  },
  {
    number: '02',
    icon: Globe,
    title: 'Expertise locale',
    description: 'Nous comprenons les réalités du marché burkinabè et les défis uniques de nos entrepreneurs.'
  },
  {
    number: '03',
    icon: Wallet,
    title: 'Prix accessibles',
    description: 'Des tarifs transparents et adaptés au budget des entreprises locales, sans compromis sur la qualité.'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Accompagnement complet',
    description: "De l'idée au lancement, nous vous guidons à chaque étape de votre transformation digitale."
  }
]

const Features = () => (
  <section className="section has-decor" id="pourquoi">
    <img className="decor decor--right" src="/decor/orb-ribbed.svg" alt="" aria-hidden="true" loading="lazy" />

    <div className="container">
      <Reveal><Eyebrow>Pourquoi nous choisir</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <div className="split">
          <h2 className="h2 split__title">
            Pourquoi choisir <span className="accent">Wendtech</span> ?
          </h2>
          <p className="split__text">
            Une expertise locale combinée à des technologies modernes pour propulser
            votre entreprise, quel que soit votre point de départ.
          </p>
        </div>
      </Reveal>

      <div className="cards cards--4">
        {features.map((feature, i) => (
          <Reveal className="benefit" key={feature.number} delay={(i % 4) * 0.07}>
            <div className="benefit__head">
              <span className="benefit__num">{feature.number}</span>
              <feature.icon size={40} strokeWidth={1.5} />
            </div>
            <h3 className="h4">{feature.title}</h3>
            <p className="muted">{feature.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Features
