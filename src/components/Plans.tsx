interface Plan {
  name: string
  price: string
  slots: number
  collaborators: number
  popular?: boolean
}

const PLANS: Plan[] = [
  { name: 'Gratuito', price: 'R$ 0', slots: 3, collaborators: 0 },
  { name: 'Basic', price: 'R$ 9,90/mês', slots: 1, collaborators: 1 },
  { name: 'Pro', price: 'R$ 19,90/mês', slots: 5, collaborators: 3, popular: true },
  { name: 'Business', price: 'R$ 39,90/mês', slots: 15, collaborators: 10 },
]

export default function Plans() {
  return (
    <section id="planos" className="plans">
      <div className="section-heading">
        <span className="eyebrow">Planos</span>
        <h2>Comece de graça, cresça quando precisar</h2>
        <p>Toda conta já vem com 3 veículos inclusos. Precisa de mais? Adicione um plano.</p>
      </div>

      <div className="plans__grid">
        {PLANS.map((plan) => (
          <div className={`plan-card ${plan.popular ? 'plan-card--popular' : ''}`} key={plan.name}>
            {plan.popular && <span className="plan-card__badge">Mais popular</span>}
            <h3>{plan.name}</h3>
            <p className="plan-card__price">{plan.price}</p>
            <ul>
              <li>
                {plan.name === 'Gratuito'
                  ? '3 veículos inclusos'
                  : `+${plan.slots} vaga${plan.slots > 1 ? 's' : ''} de veículo`}
              </li>
              <li>
                {plan.collaborators > 0
                  ? `+${plan.collaborators} colaborador${plan.collaborators > 1 ? 'es' : ''}`
                  : 'Sem colaboradores extras'}
              </li>
              <li>Abastecimento, revisão e lavagem ilimitados</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
