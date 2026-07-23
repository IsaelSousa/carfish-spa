import fuelIcon from '../assets/icons/fuel-tank.svg'
import wrenchIcon from '../assets/icons/wrench.svg'
import washIcon from '../assets/icons/hand-wash.svg'
import { useLanguage } from '../i18n/LanguageContext'

export default function Features() {
  const { t } = useLanguage()

  const coreFeatures = [
    { icon: fuelIcon, ...t.features.core.fuel },
    { icon: wrenchIcon, ...t.features.core.wrench },
    { icon: washIcon, ...t.features.core.wash },
  ]

  const extraFeatures = [
    { emoji: '🚗', ...t.features.extra.multiCar },
    { emoji: '📋', ...t.features.extra.history },
    { emoji: '🔒', ...t.features.extra.login },
  ]

  return (
    <section id="recursos" className="features">
      <div className="section-heading">
        <span className="eyebrow">{t.features.eyebrow}</span>
        <h2>{t.features.title}</h2>
        <p>{t.features.subtitle}</p>
      </div>

      <div className="features__grid features__grid--core">
        {coreFeatures.map((f) => (
          <div className="feature-card feature-card--core" key={f.title}>
            <div className="feature-card__icon">
              <img src={f.icon} alt="" width={28} height={28} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>

      <div className="features__grid features__grid--extra">
        {extraFeatures.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-card__emoji">{f.emoji}</div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
