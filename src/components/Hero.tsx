import logo from '../assets/carfish-logo.png'
import PhoneFrame from './PhoneFrame'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__inner">
        <div className="hero__copy">
          <span className="badge badge--beta">Versão beta disponível</span>
          <h1>
            Todo o cuidado com seu carro,
            <br />
            organizado em um só app.
          </h1>
          <p>
            CarFish é o app que registra abastecimentos, revisões e lavagens do seu
            veículo — com histórico completo, múltiplos carros e compartilhamento
            com colaboradores.
          </p>
          <div className="hero__actions">
            <a href="#baixar" className="btn btn--primary">
              Baixar o app
            </a>
            <a href="#telas" className="btn btn--ghost">
              Ver telas do app
            </a>
          </div>
          <div className="hero__stats">
            <div>
              <strong>3</strong>
              <span>tipos de registro</span>
            </div>
            <div>
              <strong>LGPD</strong>
              <span>dados protegidos</span>
            </div>
            <div>
              <strong>multi-carro</strong>
              <span>e colaboradores</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <PhoneFrame variant="dark">
            <div className="mock mock--login">
              <img src={logo} alt="" className="mock-login__logo" />
              <p className="mock-login__title">CARFISH</p>
              <div className="mock-login__spacer" />
              <button className="mock-login__google">
                <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 44c5.5 0 10.5-2.1 14.3-5.6l-6.6-5.6C29.6 34.7 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.6l-6.6 5.1C9.6 39.7 16.2 44 24 44z"/>
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6.6 5.6C41.5 36.1 44 30.6 44 24c0-1.3-.1-2.7-.4-3.5z"/>
                </svg>
                Entrar com Google
              </button>
              <p className="mock-login__privacy">Política de Privacidade</p>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}
