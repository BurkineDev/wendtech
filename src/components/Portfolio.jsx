import { ShoppingCart, Store, Building2, Smartphone, Globe, Code, ArrowUpRight } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Eyebrow } from './ui/Bits'

const realisations = [
  { icon: Globe,       title: 'Sites vitrines',        description: 'Présentez votre entreprise avec un site moderne et professionnel.' },
  { icon: ShoppingCart, title: 'E-commerce',            description: 'Vendez vos produits en ligne avec des solutions de paiement intégrées.' },
  { icon: Smartphone,  title: 'Applications mobiles',  description: 'Apps Android/iOS pour gérer votre activité où que vous soyez.' },
  { icon: Store,       title: 'Gestion de stocks',     description: 'Suivez vos inventaires et évitez les ruptures de stock.' },
  { icon: Code,        title: 'Solutions sur mesure',  description: 'Développement personnalisé selon vos besoins spécifiques.' },
  { icon: Building2,   title: 'Transformation digitale', description: 'Accompagnement complet pour digitaliser votre entreprise.' }
]

const Portfolio = () => (
  <section className="section section--alt" id="portfolio">
    <div className="container">
      <Reveal><Eyebrow>Ce que nous réalisons</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <div className="split">
          <h2 className="h2 split__title">Des réalisations adaptées à chaque entreprise</h2>
          <p className="split__text">
            Des solutions digitales pensées pour les besoins concrets des PME,
            partout dans le monde.
          </p>
        </div>
      </Reveal>

      <div className="cards cards--3">
        {realisations.map((item, i) => (
          <Reveal className="card card--hover" key={item.title} delay={(i % 3) * 0.07}>
            <div className="service__head">
              <span className="service__icon"><item.icon size={26} strokeWidth={2} /></span>
              <ArrowUpRight size={26} strokeWidth={2} className="accent" />
            </div>
            <h3 className="h3">{item.title}</h3>
            <p className="muted">{item.description}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 'clamp(32px, 4vw, 52px)', fontSize: 19 }}>
          <span className="muted-2">Créons quelque chose de grand ensemble.</span>
          <a className="link-accent" href="#contact">Devis gratuit</a>
        </p>
      </Reveal>
    </div>
  </section>
)

export default Portfolio
