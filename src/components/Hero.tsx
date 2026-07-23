import logo from '../assets/carfish-logo.png'
import PhoneFrame from './PhoneFrame'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="topo" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <span className="badge badge--beta">{t.hero.badge}</span>
          <h1>
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
          </h1>
          <p>{t.hero.description}</p>
          <div className="hero__actions">
            <a href="#baixar" className="btn btn--primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#telas" className="btn btn--ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <ul className="hero__trust">
            {t.hero.stats.map((stat) => (
              <li key={stat.label}>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>
                  <strong>{stat.value}</strong> {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <PhoneFrame variant="dark">
            <div className="mock mock--login">
              <img src={logo} alt="" className="mock-login__logo" />
              <p className="mock-login__title">{t.hero.mockLoginTitle}</p>
              <div className="mock-login__spacer" />
              <button className="mock-login__google">
                <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 44c5.5 0 10.5-2.1 14.3-5.6l-6.6-5.6C29.6 34.7 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.6l-6.6 5.1C9.6 39.7 16.2 44 24 44z"/>
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6.6 5.6C41.5 36.1 44 30.6 44 24c0-1.3-.1-2.7-.4-3.5z"/>
                </svg>
                {t.hero.mockLoginGoogle}
              </button>
              <p className="mock-login__privacy">{t.hero.mockLoginPrivacy}</p>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}
