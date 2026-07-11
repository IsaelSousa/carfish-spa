import logo from '../assets/carfish-logo.png'

export default function Footer() {
  return (
    <>
      <section id="baixar" className="download-cta">
        <div className="download-cta__inner">
          <h2>Pronto para organizar a manutenção do seu carro?</h2>
          <p>CarFish está em versão beta para Android. Experimente gratuitamente.</p>
          <a href="#topo" className="btn btn--primary btn--lg">
            Entrar com Google
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
            <a href="#recursos">Recursos</a>
            <a href="#telas">Telas do app</a>
            <a href="#planos">Planos</a>
            <a href="#privacidade">Privacidade</a>
          </nav>
          <p className="footer__contact">Contato: carfish364@gmail.com</p>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} CarFish. Todos os direitos reservados. Este site é uma
          apresentação não-oficial do aplicativo.
        </p>
      </footer>
    </>
  )
}
