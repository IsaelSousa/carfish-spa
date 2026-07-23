import logo from '../assets/carfish-logo.png'
import fuelIcon from '../assets/icons/fuel-tank.svg'
import wrenchIcon from '../assets/icons/wrench.svg'
import washIcon from '../assets/icons/hand-wash.svg'
import PhoneFrame from './PhoneFrame'
import { useLanguage } from '../i18n/LanguageContext'

export default function ScreensShowcase() {
  const { t } = useLanguage()
  const { select, home, history } = t.screens

  return (
    <section id="telas" className="screens">
      <div className="section-heading">
        <span className="eyebrow">{t.screens.eyebrow}</span>
        <h2>{t.screens.title}</h2>
        <p>{t.screens.subtitle}</p>
      </div>

      <div className="screens__grid">
        <div className="screen-item">
          <PhoneFrame>
            <div className="mock mock--select">
              <div className="mock-appbar">
                <img src={logo} alt="" className="mock-appbar__logo" />
                <span />
                <span className="mock-appbar__icon">⋮</span>
              </div>
              <div className="mock-select__usage">{select.usage}</div>
              <div className="mock-select__list">
                <div className="mock-select__item">
                  <div>
                    <strong>{select.car1Name}</strong>
                    <span>{select.car1Desc}</span>
                  </div>
                  <span className="mock-select__trash">🗑</span>
                </div>
                <div className="mock-select__item">
                  <div>
                    <strong>{select.car2Name}</strong>
                    <span>{select.car2Desc}</span>
                  </div>
                  <span className="mock-select__trash">🗑</span>
                </div>
              </div>
              <div className="mock-fab">+</div>
            </div>
          </PhoneFrame>
          <h3>{select.cardTitle}</h3>
          <p>{select.cardDescription}</p>
        </div>

        <div className="screen-item">
          <PhoneFrame>
            <div className="mock mock--home">
              <div className="mock-appbar">
                <img src={logo} alt="" className="mock-appbar__logo" />
                <span>CARFISH</span>
                <span className="mock-appbar__plate">{select.car1Name}</span>
              </div>
              <div className="mock-home__beta">{home.beta}</div>
              <div className="mock-home__buttons">
                <button>
                  <img src={fuelIcon} alt="" /> {home.buttonFuel}
                </button>
                <button>
                  <img src={wrenchIcon} alt="" /> {home.buttonWrench}
                </button>
                <button>
                  <img src={washIcon} alt="" /> {home.buttonWash}
                </button>
              </div>
              <div className="mock-home__sheet">
                <div className="mock-home__sheet-header">
                  <span>▾</span>
                  <strong>{home.sheetTitle}</strong>
                  <span>↻</span>
                </div>
                {home.activities.map((activity) => (
                  <div className="mock-home__activity" key={activity.title + activity.date}>
                    <span className={`dot dot--${activity.kind}`} />
                    <div>
                      <strong>{activity.title}</strong>
                      <span>{activity.detail}</span>
                    </div>
                    <span className="mock-home__date">{activity.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </PhoneFrame>
          <h3>{home.cardTitle}</h3>
          <p>{home.cardDescription}</p>
        </div>

        <div className="screen-item">
          <PhoneFrame variant="dark">
            <div className="mock mock--history">
              <div className="mock-appbar mock-appbar--dark">
                <span>{history.headerTitle}</span>
              </div>
              <div className="mock-history__filters">
                {history.filters.map((filter, index) => (
                  <span className={`chip ${index === 0 ? 'chip--active' : ''}`} key={filter}>
                    {filter}
                  </span>
                ))}
              </div>
              <div className="mock-history__list">
                {history.items.map((item, index) => (
                  <div className="mock-history__item" key={item.title + item.detail + index}>
                    <span className={`dot dot--${item.kind}`} />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.detail}</span>
                    </div>
                    <strong className="mock-history__value">{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </PhoneFrame>
          <h3>{history.cardTitle}</h3>
          <p>{history.cardDescription}</p>
        </div>
      </div>
    </section>
  )
}
