'use client'

import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme, type Mode } from './theme-provider'

const OPTIONS: { value: Mode; label: string; Icon: typeof Sun }[] = [
  { value: 'light', label: 'Light mode', Icon: Sun },
  { value: 'dark', label: 'Dark mode', Icon: Moon },
  { value: 'system', label: 'System default', Icon: Monitor },
]

export function ModeToggle() {
  const { mode, setMode } = useTheme()

  return (
    <div
      role="radiogroup"
      aria-label="Color mode"
      className="flex items-center gap-0.5 rounded-md border border-border bg-card p-0.5"
    >
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={mode === value}
          aria-label={label}
          title={label}
          onClick={() => setMode(value)}
          className={`flex size-7 items-center justify-center rounded-sm transition-colors ${
            mode === value
              ? 'bg-primary/15 text-primary'
              : 'text-muted-foreground hover:bg-accent hover:text-foreground'
          }`}
        >
          <Icon className="size-4" />
        </button>
      ))}
    </div>
  )
}
