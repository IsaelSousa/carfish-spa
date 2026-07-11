import { useEffect, useState } from 'react'
import logo from '../assets/carfish-logo.png'

const LINKS = [
  { href: '#recursos', label: 'Recursos' },
  { href: '#telas', label: 'Telas do app' },
  { href: '#planos', label: 'Planos' },
  { href: '#privacidade', label: 'Privacidade' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#topo" className="navbar__brand">
          <img src={logo} alt="CarFish" className="navbar__logo" />
          <span>CARFISH</span>
        </a>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href="#baixar" className="navbar__cta" onClick={handleLinkClick}>
            Baixar o app
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
