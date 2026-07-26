import Reveal from './ui/Reveal'
import { Eyebrow } from './ui/Bits'

const clients = [
  { name: 'Camelot Traiteur',           logo: '/clients/camelot.png',       sector: 'Traiteur & Livraison' },
  { name: 'GlobalPC',                   logo: '/clients/globalpc.webp',     sector: 'Informatique' },
  { name: 'Hanh Travel',                logo: '/clients/hanh-travel.png',   sector: 'Tourisme' },
  { name: 'DABO Avocat',                logo: '/clients/dabo-avocat.webp',  sector: 'Cabinet Juridique' },
  { name: 'Peintre Intérieur Québec',   logo: '/clients/peintre-quebec.png', sector: 'Rénovation' }
]

const Clients = () => (
  <section className="section section--alt" id="clients">
    <div className="container">
      <Reveal><Eyebrow>Nos partenaires</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <div className="split">
          <h2 className="h2 split__title">
            Ils nous font <span className="accent">confiance</span>
          </h2>
          <p className="split__text">
            Rejoignez nos clients satisfaits et boostez votre présence digitale.
          </p>
        </div>
      </Reveal>

      <div className="clients-grid">
        {clients.map((client, i) => (
          <Reveal className="client" key={client.name} delay={(i % 5) * 0.06}>
            <img src={client.logo} alt={`Logo ${client.name}`} loading="lazy" width="180" height="80" />
            <span className="client__sector">{client.sector}</span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Clients
