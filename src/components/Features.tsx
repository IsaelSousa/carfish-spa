import fuelIcon from '../assets/icons/fuel-tank.svg'
import wrenchIcon from '../assets/icons/wrench.svg'
import washIcon from '../assets/icons/hand-wash.svg'
import { useLanguage } from '../i18n/LanguageContext'

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16v-4.5L6 6h12l2 5.5V16" />
      <path d="M3 16h18v2.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V17H6.5v1.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V16Z" />
      <circle cx="7.5" cy="16" r="1.4" />
      <circle cx="16.5" cy="16" r="1.4" />
      <path d="M5 11.5h14" />
    </svg>
  )
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6h11M9 12h11M9 18h11" />
      <circle cx="4.5" cy="6" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="18" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </svg>
  )
}

export default function Features() {
  const { t } = useLanguage()

  const coreFeatures = [
    { icon: fuelIcon, ...t.features.core.fuel },
    { icon: wrenchIcon, ...t.features.core.wrench },
    { icon: washIcon, ...t.features.core.wash },
  ]

  const extraFeatures = [
    { Icon: CarIcon, ...t.features.extra.multiCar },
    { Icon: ListIcon, ...t.features.extra.history },
    { Icon: LockIcon, ...t.features.extra.login },
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
              <img src={f.icon} alt="" width={26} height={26} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>

      <div className="features__extra">
        {extraFeatures.map(({ Icon, title, description }) => (
          <div className="feature-row" key={title}>
            <div className="feature-row__icon">
              <Icon />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
