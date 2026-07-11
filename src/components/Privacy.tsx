import { privacyMeta, privacySections } from '../data/privacyContent'

export default function Privacy() {
  return (
    <section id="privacidade" className="privacy">
      <div className="section-heading">
        <span className="eyebrow">Privacidade</span>
        <h2>{privacyMeta.title}</h2>
        <p>{privacyMeta.updatedAt}</p>
      </div>

      <div className="privacy__panel">
        <div className="privacy__notice">
          <strong>{privacyMeta.betaNotice.title}</strong>
          <p>{privacyMeta.betaNotice.body}</p>
        </div>

        <p className="privacy__intro">{privacyMeta.intro}</p>

        {privacySections.map((section) => (
          <article className="privacy__section" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
