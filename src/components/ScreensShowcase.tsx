import logo from '../assets/carfish-logo.png'
import fuelIcon from '../assets/icons/fuel-tank.svg'
import wrenchIcon from '../assets/icons/wrench.svg'
import washIcon from '../assets/icons/hand-wash.svg'
import PhoneFrame from './PhoneFrame'

export default function ScreensShowcase() {
  return (
    <section id="telas" className="screens">
      <div className="section-heading">
        <span className="eyebrow">Telas do app</span>
        <h2>Uma experiência simples do primeiro ao último clique</h2>
        <p>Da seleção do veículo ao registro de uma nova atividade.</p>
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
              <div className="mock-select__usage">2 de 2 veículos utilizados</div>
              <div className="mock-select__list">
                <div className="mock-select__item">
                  <div>
                    <strong>ABC-1234</strong>
                    <span>Fiat Argo 2022</span>
                  </div>
                  <span className="mock-select__trash">🗑</span>
                </div>
                <div className="mock-select__item">
                  <div>
                    <strong>XYZ-5678</strong>
                    <span>Honda Civic 2020</span>
                  </div>
                  <span className="mock-select__trash">🗑</span>
                </div>
              </div>
              <div className="mock-fab">+</div>
            </div>
          </PhoneFrame>
          <h3>Selecionar veículo</h3>
          <p>Cadastre quantos veículos precisar e alterne entre eles a qualquer momento.</p>
        </div>

        <div className="screen-item">
          <PhoneFrame>
            <div className="mock mock--home">
              <div className="mock-appbar">
                <img src={logo} alt="" className="mock-appbar__logo" />
                <span>CARFISH</span>
                <span className="mock-appbar__plate">ABC-1234</span>
              </div>
              <div className="mock-home__beta">🧪 Versão beta</div>
              <div className="mock-home__buttons">
                <button>
                  <img src={fuelIcon} alt="" /> Abastecimento
                </button>
                <button>
                  <img src={wrenchIcon} alt="" /> Revisão
                </button>
                <button>
                  <img src={washIcon} alt="" /> Lavagem
                </button>
              </div>
              <div className="mock-home__sheet">
                <div className="mock-home__sheet-header">
                  <span>▾</span>
                  <strong>Últimas atividades</strong>
                  <span>↻</span>
                </div>
                <div className="mock-home__activity">
                  <span className="dot dot--fuel" />
                  <div>
                    <strong>Abastecimento</strong>
                    <span>42L · R$ 268,00</span>
                  </div>
                  <span className="mock-home__date">08/07</span>
                </div>
                <div className="mock-home__activity">
                  <span className="dot dot--wash" />
                  <div>
                    <strong>Lavagem completa</strong>
                    <span>R$ 45,00</span>
                  </div>
                  <span className="mock-home__date">03/07</span>
                </div>
                <div className="mock-home__activity">
                  <span className="dot dot--wrench" />
                  <div>
                    <strong>Troca de óleo</strong>
                    <span>R$ 180,00</span>
                  </div>
                  <span className="mock-home__date">28/06</span>
                </div>
              </div>
            </div>
          </PhoneFrame>
          <h3>Tela inicial</h3>
          <p>Acesso rápido aos três tipos de registro e ao resumo das últimas atividades.</p>
        </div>

        <div className="screen-item">
          <PhoneFrame variant="dark">
            <div className="mock mock--history">
              <div className="mock-appbar mock-appbar--dark">
                <span>Histórico · ABC-1234</span>
              </div>
              <div className="mock-history__filters">
                <span className="chip chip--active">Todos</span>
                <span className="chip">Abastecimento</span>
                <span className="chip">Revisão</span>
                <span className="chip">Lavagem</span>
              </div>
              <div className="mock-history__list">
                <div className="mock-history__item">
                  <span className="dot dot--fuel" />
                  <div>
                    <strong>Abastecimento</strong>
                    <span>08/07/2026 · 42L</span>
                  </div>
                  <strong className="mock-history__value">R$ 268,00</strong>
                </div>
                <div className="mock-history__item">
                  <span className="dot dot--wash" />
                  <div>
                    <strong>Lavagem completa</strong>
                    <span>03/07/2026</span>
                  </div>
                  <strong className="mock-history__value">R$ 45,00</strong>
                </div>
                <div className="mock-history__item">
                  <span className="dot dot--wrench" />
                  <div>
                    <strong>Troca de óleo</strong>
                    <span>28/06/2026</span>
                  </div>
                  <strong className="mock-history__value">R$ 180,00</strong>
                </div>
                <div className="mock-history__item">
                  <span className="dot dot--fuel" />
                  <div>
                    <strong>Abastecimento</strong>
                    <span>20/06/2026 · 38L</span>
                  </div>
                  <strong className="mock-history__value">R$ 241,00</strong>
                </div>
              </div>
            </div>
          </PhoneFrame>
          <h3>Histórico completo</h3>
          <p>Filtre por tipo de atividade e veja todos os registros do veículo em ordem cronológica.</p>
        </div>
      </div>
    </section>
  )
}
