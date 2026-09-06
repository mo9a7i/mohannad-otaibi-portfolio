'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type Mode = 'light' | 'dark' | 'system'

type ThemeState = {
  mode: Mode
  setMode: (m: Mode) => void
}

const ThemeContext = createContext<ThemeState | null>(null)

function applyMode(mode: Mode) {
  const sysLight = window.matchMedia('(prefers-color-scheme: light)').matches
  const light = mode === 'light' || (mode === 'system' && sysLight)
  document.documentElement.classList.toggle('light', light)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('dark')

  // Hydrate from localStorage on mount.
  useEffect(() => {
    setModeState((localStorage.getItem('theme-mode') as Mode) || 'dark')
  }, [])

  // Keep the DOM in sync with system changes while in "system" mode.
  useEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const handler = () => applyMode('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const setMode = useCallback((m: Mode) => {
    setModeState(m)
    localStorage.setItem('theme-mode', m)
    applyMode(m)
  }, [])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
