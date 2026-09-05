'use client'

import { SlidersHorizontal } from 'lucide-react'
import {
  useTheme,
  type Accent,
  type FontKey,
  type RadiusKey,
} from './theme-provider'

const ACCENTS: { value: Accent; label: string; swatch: string }[] = [
  { value: 'amber', label: 'Amber', swatch: 'oklch(0.8 0.135 74)' },
  { value: 'emerald', label: 'Emerald', swatch: 'oklch(0.72 0.15 156)' },
  { value: 'cyan', label: 'Cyan', swatch: 'oklch(0.76 0.11 210)' },
  { value: 'violet', label: 'Violet', swatch: 'oklch(0.7 0.16 300)' },
  { value: 'rose', label: 'Rose', swatch: 'oklch(0.68 0.19 18)' },
]

const FONTS: { value: FontKey; label: string; className: string }[] = [
  { value: 'geist', label: 'Geist', className: 'font-[family-name:var(--font-geist-sans)]' },
  { value: 'inter', label: 'Inter', className: 'font-[family-name:var(--font-inter)]' },
  { value: 'space', label: 'Space Grotesk', className: 'font-[family-name:var(--font-space)]' },
  { value: 'mono', label: 'IBM Plex Mono', className: 'font-[family-name:var(--font-plex-mono)]' },
]

const RADII: { value: RadiusKey; label: string; preview: string }[] = [
  { value: 'sharp', label: 'Sharp', preview: '0px' },
  { value: 'default', label: 'Default', preview: '5px' },
  { value: 'soft', label: 'Soft', preview: '10px' },
  { value: 'round', label: 'Round', preview: '16px' },
]

function Group({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

const chipBase =
  'inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors'

export function AppearancePanel() {
  const { accent, font, radius, setAccent, setFont, setRadius } = useTheme()

  return (
    <section
      aria-label="Appearance settings"
      className="border-t border-border bg-secondary/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-6 flex items-center gap-2">
          <SlidersHorizontal className="size-4 text-primary" />
          <h2 className="font-mono text-sm text-foreground">appearance</h2>
          <span className="font-mono text-xs text-muted-foreground">
            — make it yours; saved to this browser
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Group label="font">
            {FONTS.map((f) => (
              <button
                key={f.value}
                type="button"
                aria-pressed={font === f.value}
                onClick={() => setFont(f.value)}
                className={`${chipBase} ${f.className} ${
                  font === f.value
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground'
                }`}
              >
                {f.label}
              </button>
            ))}
          </Group>

          <Group label="accent color">
            {ACCENTS.map((a) => (
              <button
                key={a.value}
                type="button"
                aria-pressed={accent === a.value}
                aria-label={a.label}
                title={a.label}
                onClick={() => setAccent(a.value)}
                className={`${chipBase} ${
                  accent === a.value
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground'
                }`}
              >
                <span
                  className="size-4 rounded-full ring-1 ring-inset ring-black/10"
                  style={{ backgroundColor: a.swatch }}
                />
                {a.label}
              </button>
            ))}
          </Group>

          <Group label="roundness">
            {RADII.map((r) => (
              <button
                key={r.value}
                type="button"
                aria-pressed={radius === r.value}
                onClick={() => setRadius(r.value)}
                className={`${chipBase} ${
                  radius === r.value
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground'
                }`}
              >
                <span
                  className="size-4 border border-current"
                  style={{ borderRadius: r.preview }}
                />
                {r.label}
              </button>
            ))}
          </Group>
        </div>
      </div>
    </section>
  )
}
