import { Target, Globe, Wallet, Rocket } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Eyebrow } from './ui/Bits'
import FloatingDecor from './ui/FloatingDecor'

const features = [
  {
    number: '01',
    icon: Target,
    title: 'Conçu pour le terrain',
    description: "Mobile Money, WhatsApp, réseau instable, téléphones d'entrée de gamme : c'est notre point de départ, pas une adaptation après coup."
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Nos propres produits en production',
    description: 'Bio-Lien et PayFlow tournent tous les jours. Nous savons ce que demande un logiciel utilisé pour de vrai, au-delà de la mise en ligne.'
  },
  {
    number: '03',
    icon: Globe,
    title: 'Les règles locales intégrées',
    description: "Fiscalité, cotisations sociales, protection des données : nous lisons les textes du Burkina, de la Côte d'Ivoire et du Mali, et les appliquons dans le code."
  },
  {
    number: '04',
    icon: Wallet,
    title: 'Accessible et sans dépendance',
    description: 'Des tarifs pensés pour les budgets de la région. Le code, les données et les accès restent les vôtres.'
  }
]

const Features = () => (
  <section className="section section--alt has-decor" id="pourquoi">
    <FloatingDecor src="/decor/orb-ribbed.svg" className="decor--right" spin={70} parallax={80} />

    <div className="container">
      <Reveal><Eyebrow>Pourquoi nous choisir</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <div className="split">
          <h2 className="h2 split__title">
            Pourquoi choisir <span className="accent">Wendtech</span> ?
          </h2>
          <p className="split__text">
            Une équipe ouest-africaine qui construit et exploite ses propres logiciels,
            avec les standards techniques d'aujourd'hui.
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
