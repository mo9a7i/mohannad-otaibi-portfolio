'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type Mode = 'light' | 'dark' | 'system'
export type Accent = 'amber' | 'emerald' | 'cyan' | 'violet' | 'rose'
export type FontKey = 'geist' | 'inter' | 'space' | 'mono'
export type RadiusKey = 'sharp' | 'default' | 'soft' | 'round'

type ThemeState = {
  mode: Mode
  accent: Accent
  font: FontKey
  radius: RadiusKey
  setMode: (m: Mode) => void
  setAccent: (a: Accent) => void
  setFont: (f: FontKey) => void
  setRadius: (r: RadiusKey) => void
}

const ThemeContext = createContext<ThemeState | null>(null)

function applyMode(mode: Mode) {
  const sysLight = window.matchMedia('(prefers-color-scheme: light)').matches
  const light = mode === 'light' || (mode === 'system' && sysLight)
  document.documentElement.classList.toggle('light', light)
}

function applyAttr(name: string, value: string, isDefault: boolean) {
  if (isDefault) document.documentElement.removeAttribute(`data-${name}`)
  else document.documentElement.setAttribute(`data-${name}`, value)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('dark')
  const [accent, setAccentState] = useState<Accent>('amber')
  const [font, setFontState] = useState<FontKey>('geist')
  const [radius, setRadiusState] = useState<RadiusKey>('default')

  // Hydrate from localStorage on mount.
  useEffect(() => {
    setModeState((localStorage.getItem('theme-mode') as Mode) || 'dark')
    setAccentState((localStorage.getItem('theme-accent') as Accent) || 'amber')
    setFontState((localStorage.getItem('theme-font') as FontKey) || 'geist')
    setRadiusState((localStorage.getItem('theme-radius') as RadiusKey) || 'default')
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

  const setAccent = useCallback((a: Accent) => {
    setAccentState(a)
    localStorage.setItem('theme-accent', a)
    applyAttr('accent', a, a === 'amber')
  }, [])

  const setFont = useCallback((f: FontKey) => {
    setFontState(f)
    localStorage.setItem('theme-font', f)
    applyAttr('font', f, f === 'geist')
  }, [])

  const setRadius = useCallback((r: RadiusKey) => {
    setRadiusState(r)
    localStorage.setItem('theme-radius', r)
    applyAttr('radius', r, r === 'default')
  }, [])

  return (
    <ThemeContext.Provider
      value={{ mode, accent, font, radius, setMode, setAccent, setFont, setRadius }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
