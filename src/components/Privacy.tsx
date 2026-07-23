import { useLanguage } from '../i18n/LanguageContext'

export default function Privacy() {
  const { t } = useLanguage()

  return (
    <section id="privacidade" className="privacy">
      <div className="section-heading section-heading--start">
        <span className="eyebrow">{t.privacy.eyebrow}</span>
        <h2>{t.privacy.title}</h2>
        <p>{t.privacy.updatedAt}</p>
      </div>

      <div className="privacy__panel">
        <div className="privacy__notice">
          <strong>{t.privacy.betaNoticeTitle}</strong>
          <p>{t.privacy.betaNoticeBody}</p>
        </div>

        <p className="privacy__intro">{t.privacy.intro}</p>

        {t.privacy.sections.map((section) => (
          <article className="privacy__section" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
