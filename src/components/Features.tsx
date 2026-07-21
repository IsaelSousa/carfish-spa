import fuelIcon from '../assets/icons/fuel-tank.svg'
import wrenchIcon from '../assets/icons/wrench.svg'
import washIcon from '../assets/icons/hand-wash.svg'

interface Feature {
  icon?: string
  emoji?: string
  title: string
  description: string
}

const CORE_FEATURES: Feature[] = [
  {
    icon: fuelIcon,
    title: 'Abastecimento',
    description:
      'Registre cada abastecimento com litros, valor e quilometragem para acompanhar o consumo do veículo.',
  },
  {
    icon: wrenchIcon,
    title: 'Revisão',
    description:
      'Guarde o histórico de manutenções e revisões, com peças trocadas e valores investidos.',
  },
  {
    icon: washIcon,
    title: 'Lavagem',
    description:
      'Anote datas e custos das lavagens para nunca perder o controle da manutenção estética.',
  },
]

const EXTRA_FEATURES: Feature[] = [
  {
    emoji: '🚗',
    title: 'Múltiplos veículos',
    description: 'Cadastre vários carros e alterne entre eles em segundos.',
  },
  {
    emoji: '📋',
    title: 'Histórico completo',
    description: 'Filtre e reveja todas as atividades registradas por tipo e data.',
  },
  {
    emoji: '🔒',
    title: 'Login seguro',
    description: 'Autenticação via Google com Firebase, sem senhas para lembrar.',
  },
]

// const EXTRA_FEATURES: Feature[] = [
//   {
//     emoji: '🚗',
//     title: 'Múltiplos veículos',
//     description: 'Cadastre vários carros e alterne entre eles em segundos.',
//   },
//   {
//     emoji: '📋',
//     title: 'Histórico completo',
//     description: 'Filtre e reveja todas as atividades registradas por tipo e data.',
//   },
//   {
//     emoji: '👥',
//     title: 'Colaboradores',
//     description: 'Compartilhe o veículo com outras pessoas para registrar atividades juntos.',
//   },
//   {
//     emoji: '🔒',
//     title: 'Login seguro',
//     description: 'Autenticação via Google com Firebase, sem senhas para lembrar.',
//   },
// ]

export default function Features() {
  return (
    <section id="recursos" className="features">
      <div className="section-heading">
        <span className="eyebrow">Recursos</span>
        <h2>Tudo o que seu veículo precisa, em um só lugar</h2>
        <p>Três registros essenciais para manter o carro sempre em dia.</p>
      </div>

      <div className="features__grid features__grid--core">
        {CORE_FEATURES.map((f) => (
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
        {EXTRA_FEATURES.map((f) => (
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
