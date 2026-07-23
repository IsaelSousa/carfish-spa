import { useEffect, useState } from 'react'
import logo from '../assets/carfish-logo.png'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const LINKS = [
    { href: '#recursos', label: t.nav.recursos },
    { href: '#telas', label: t.nav.telas },
    // { href: '#planos', label: 'Planos' },
    { href: '#novidades', label: t.nav.novidades },
    { href: '#privacidade', label: t.nav.privacidade },
  ]

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
          <div className="navbar__lang" role="group" aria-label="Language">
            <button
              type="button"
              className={`navbar__lang-btn ${locale === 'pt' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLocale('pt')}
            >
              PT
            </button>
            <button
              type="button"
              className={`navbar__lang-btn ${locale === 'en' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
          </div>
          <a href="#baixar" className="navbar__cta" onClick={handleLinkClick}>
            {t.nav.baixar}
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={t.nav.abrirMenu}
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
