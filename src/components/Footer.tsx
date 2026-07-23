import logo from '../assets/carfish-logo.png'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <>
      <section id="baixar" className="download-cta">
        <div className="download-cta__inner">
          <h2>{t.footer.ctaTitle}</h2>
          <p>{t.footer.ctaDescription}</p>
          <a href="#topo" className="btn btn--primary btn--lg">
            {t.footer.ctaButton}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={logo} alt="CarFish" />
            <span>CARFISH</span>
          </div>
          <nav className="footer__links">
            <a href="#recursos">{t.nav.recursos}</a>
            <a href="#telas">{t.nav.telas}</a>
            {/* <a href="#planos">Planos</a> */}
            <a href="#novidades">{t.nav.novidades}</a>
            <a href="#privacidade">{t.nav.privacidade}</a>
          </nav>
          <p className="footer__contact">{t.footer.contactLabel}</p>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} CarFish. {t.footer.copy}
        </p>
      </footer>
    </>
  )
}
