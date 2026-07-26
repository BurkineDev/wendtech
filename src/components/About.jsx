import { Lightbulb, Users, Shield, TrendingUp } from 'lucide-react'
import Reveal from './ui/Reveal'
import { Eyebrow, PillButton } from './ui/Bits'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation continue',
    text: "Nous suivons l'évolution des technologies pour proposer des solutions actuelles, pas des recettes dépassées."
  },
  {
    icon: Users,
    title: 'Accessibilité',
    text: 'Des tarifs et des outils pensés pour que chaque commerçant, artisan ou PME puisse franchir le pas du numérique.'
  },
  {
    icon: Shield,
    title: 'Confiance',
    text: 'Vous gardez la main sur vos comptes, vos données et vos accès. Aucun verrouillage, aucune dépendance.'
  },
  {
    icon: TrendingUp,
    title: 'Impact positif',
    text: 'Notre réussite se mesure à la vôtre : plus de visibilité, plus de ventes, plus de temps gagné.'
  }
]

const About = () => (
  <section className="section" id="apropos">
    <div className="container two-col">
      <div>
        <Reveal><Eyebrow>À propos de l'agence</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h2 className="h2">
            Wendtech, une agence digitale{' '}
            <span className="accent">internationale</span> au service des PME.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: 36 }}>
            <PillButton href="#contact">Nous contacter</PillButton>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <img
            className="about__visual"
            src="/decor/ball-honeycomb.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            style={{ marginTop: 50 }}
          />
        </Reveal>
      </div>

      <div>
        <Reveal>
          <p className="muted-2" style={{ lineHeight: 1.7, marginBottom: 44 }}>
            Wendtech est une agence digitale internationale, spécialisée dans le développement
            web et mobile, ainsi que le consulting pour les PME et les entreprises de toutes
            tailles, partout dans le monde. Fondée avec la vision de démocratiser le numérique
            pour tous, nous croyons que chaque commerçant, artisan ou entrepreneur mérite une
            présence en ligne professionnelle pour booster ses ventes et sa visibilité.
          </p>
        </Reveal>

        <div className="timeline">
          {values.map((value, i) => (
            <Reveal className="timeline__item" key={value.title} delay={i * 0.07}>
              <value.icon size={44} strokeWidth={1.4} className="accent" />
              <h3 className="h3">{value.title}</h3>
              <p className="muted">{value.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
