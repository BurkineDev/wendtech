import { ArrowUpRight, Asterisk } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Eyebrow, PillButton } from './ui/Bits'

/** SaaS conçus et exploités par Wendtech. */
const products = [
  {
    name: 'Bio-Lien',
    url: 'https://www.bio-lien.com',
    image: '/produits/bio-lien.jpg',
    tagline: 'La boutique en ligne en un seul lien',
    description:
      'Créez votre boutique en 5 minutes, partagez votre lien sur TikTok et Instagram, ' +
      'recevez vos commandes directement sur WhatsApp.',
    features: [
      'Boutique prête en quelques minutes',
      'Commandes reçues sur WhatsApp',
      'Tableau de bord des ventes'
    ],
    markets: "Afrique de l'Ouest"
  },
  {
    name: 'PayFlow',
    url: 'https://payflow.expert',
    image: '/produits/payflow.jpg',
    tagline: 'La paie qui montre son travail',
    description:
      'Logiciel de paie pour cabinets comptables et employeurs : chaque ligne de bulletin ' +
      'renvoie au texte de loi qui la fonde.',
    features: [
      'Calculs fiscaux et sociaux conformes',
      'Bulletins justifiés ligne par ligne',
      'Pensé pour les cabinets comptables'
    ],
    markets: "Burkina Faso · Côte d'Ivoire · Mali"
  }
]

const Products = () => (
  <section className="section" id="produits">
    <div className="container">
      <Reveal><Eyebrow>Nos produits</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <div className="split">
          <h2 className="h2 split__title">Les SaaS que nous <span className="accent">construisons</span></h2>
          <p className="split__text">
            En plus des projets clients, nous concevons et faisons tourner nos propres
            logiciels, utilisés chaque jour par des entreprises africaines.
          </p>
        </div>
      </Reveal>

      <div className="cards cards--2">
        {products.map((p, i) => (
          <Reveal as="article" className="card card--hover product" key={p.name} delay={i * 0.08}>
            <a className="product__media" href={p.url} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              <img src={p.image} alt={`Aperçu de ${p.name}`} loading="lazy" width="1200" height="630" />
            </a>

            <div className="service__head">
              <div>
                <h3 className="h3">{p.name}</h3>
                <p className="product__tagline">{p.tagline}</p>
              </div>
              <ArrowUpRight size={26} strokeWidth={2} className="accent" />
            </div>

            <p className="muted">{p.description}</p>

            <ul className="service__features">
              {p.features.map((f) => (
                <li key={f}><Asterisk size={14} strokeWidth={2.6} />{f}</li>
              ))}
            </ul>

            <div className="product__foot">
              <span className="product__markets">{p.markets}</span>
              <PillButton href={p.url} target="_blank" rel="noopener noreferrer">
                Découvrir {p.name}
              </PillButton>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Products
