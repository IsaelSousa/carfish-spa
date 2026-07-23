import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Locale, type TranslationTree } from './translations'

const STORAGE_KEY = 'carfish-lang'

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'pt'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  return window.navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationTree
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (next: Locale) => setLocaleState(next)

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
