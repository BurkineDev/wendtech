import { marqueeItems } from '../data/site'

const Marquee = () => (
  <section className="marquee" aria-hidden="true">
    <div className="marquee-track">
      {[0, 1].map((group) => (
        <div className="marquee-group" key={group}>
          {marqueeItems.map((label) => (
            <span className="marquee-item" key={`${group}-${label}`}>{label}</span>
          ))}
        </div>
      ))}
    </div>
  </section>
)

export default Marquee
