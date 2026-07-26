import { Asterisk } from 'lucide-react'
import { MARQUEE_ITEMS } from '../data/site'

/** Le groupe est rendu deux fois : la piste défile de 0 à -50 %, sans couture. */
const Group = ({ hidden }) => (
  <div className="marquee__group" aria-hidden={hidden || undefined}>
    {MARQUEE_ITEMS.map((item) => (
      <span className="marquee__item" key={item}>
        {item}
        <Asterisk size={30} strokeWidth={2.4} />
      </span>
    ))}
  </div>
)

const Marquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee__track">
      <Group />
      <Group hidden />
    </div>
  </div>
)

export default Marquee
