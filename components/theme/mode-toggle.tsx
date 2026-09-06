'use client'

import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme, type Mode } from './theme-provider'

const CYCLE: Record<Mode, Mode> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
}

const META: Record<Mode, { label: string; Icon: typeof Sun }> = {
  system: { label: 'System default', Icon: Monitor },
  light: { label: 'Light mode', Icon: Sun },
  dark: { label: 'Dark mode', Icon: Moon },
}

export function ModeToggle() {
  const { mode, setMode } = useTheme()
  const { label, Icon } = META[mode]

  return (
    <button
      type="button"
      aria-label={`Theme: ${label}. Click to change.`}
      title={label}
      onClick={() => setMode(CYCLE[mode])}
      className="flex size-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      <Icon className="size-4" />
    </button>
  )
}
