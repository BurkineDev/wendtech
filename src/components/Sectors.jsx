import { HeartPulse, Wallet, ShoppingBag, Sprout, GraduationCap, Landmark, Asterisk } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Eyebrow } from './ui/Bits'

/** Secteurs couverts, chacun avec les besoins concrets auxquels on répond. */
const sectors = [
  {
    icon: HeartPulse,
    title: 'Santé',
    text: "Moins de papier et de files d'attente, un meilleur suivi des patients.",
    needs: [
      'Dossier patient numérique',
      'Rendez-vous et rappels par SMS ou WhatsApp',
      'Gestion de pharmacie et des stocks de médicaments',
      'Téléconsultation légère, adaptée aux réseaux lents'
    ]
  },
  {
    icon: Wallet,
    title: 'Finance & microfinance',
    text: "Faire circuler l'argent là où il circule déjà : sur le téléphone.",
    needs: [
      'Paiements Orange Money, Moov Money, Wave',
      "Gestion de tontines, d'épargne et de microcrédits",
      'Paie et déclarations sociales conformes',
      'Tableaux de bord pour le suivi des encaissements'
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Commerce & distribution',
    text: 'Vendre là où sont les clients : WhatsApp, TikTok, Instagram.',
    needs: [
      'Boutique en ligne avec commande sur WhatsApp',
      'Caisse, stocks et inventaires',
      'Livraison et paiement à la livraison',
      'Suivi des ventes par produit et par vendeur'
    ]
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    text: 'Relier producteurs, coopératives et acheteurs, sans intermédiaire de trop.',
    needs: [
      'Mise en relation producteurs et acheteurs',
      'Gestion des membres et des collectes de coopérative',
      'Traçabilité des lots et des récoltes',
      'Information sur les prix, même sans smartphone'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Éducation & formation',
    text: 'Des inscriptions qui tiennent le jour J, un suivi scolaire accessible aux parents.',
    needs: [
      'Inscriptions en ligne anti-surcharge',
      'Gestion scolaire : élèves, notes, bulletins',
      'Paiement des frais par Mobile Money',
      'Plateformes de formation à distance légères'
    ]
  },
  {
    icon: Landmark,
    title: 'Institutions & ONG',
    text: 'Dématérialiser les démarches et piloter les programmes avec des données fiables.',
    needs: [
      'Démarches et demandes en ligne',
      'Collecte de données terrain, même hors connexion',
      "Tableaux de bord de suivi et d'évaluation",
      'Protection des données personnelles dès la conception'
    ]
  }
]

const Sectors = () => (
  <section className="section section--alt" id="secteurs">
    <div className="container">
      <Reveal><Eyebrow>Secteurs</Eyebrow></Reveal>

      <Reveal delay={0.05}>
        <div className="split">
          <h2 className="h2 split__title">
            Des solutions pour les secteurs qui font <span className="accent">avancer la région</span>
          </h2>
          <p className="split__text">
            Chaque secteur a ses contraintes : réseau instable, paiement mobile, règles locales,
            utilisateurs peu habitués au numérique. Nous partons de là.
          </p>
        </div>
      </Reveal>

      <div className="cards cards--3">
        {sectors.map((sector, i) => (
          <Reveal className="card card--hover" key={sector.title} delay={(i % 3) * 0.07}>
            <span className="service__icon"><sector.icon size={26} strokeWidth={2} /></span>
            <h3 className="h3">{sector.title}</h3>
            <p className="muted">{sector.text}</p>
            <ul className="service__features">
              {sector.needs.map((need) => (
                <li key={need}><Asterisk size={14} strokeWidth={2.6} />{need}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="card sector-open">
          <div>
            <h3 className="h3">Un projet innovant qui ne rentre dans <span className="accent">aucune case</span> ?</h3>
            <p className="muted">
              Climat, mobilité, énergie, intelligence artificielle, culture… Nous sommes ouverts
              aux projets nouveaux : du prototype à la plateforme en production.
            </p>
          </div>
          <a className="link-accent" href="#contact">Parlons-en</a>
        </div>
      </Reveal>
    </div>
  </section>
)

export default Sectors
