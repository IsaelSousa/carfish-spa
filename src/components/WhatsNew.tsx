import { useLanguage } from '../i18n/LanguageContext'

export default function WhatsNew() {
  const { t } = useLanguage()

  return (
    <section id="novidades" className="whats-new">
      <div className="section-heading">
        <span className="eyebrow">{t.whatsNew.eyebrow}</span>
        <h2>{t.whatsNew.title}</h2>
        <p>{t.whatsNew.intro}</p>
      </div>

      <div className="whats-new__panel">
        {t.whatsNew.releases.map((release) => (
          <article className="whats-new__release" key={release.version}>
            <div className="whats-new__release-header">
              <span className="whats-new__version">v{release.version}</span>
              <span className="whats-new__date">{release.date}</span>
            </div>

            {release.groups.map((group) => (
              <div className="whats-new__group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}
