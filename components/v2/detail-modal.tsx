'use client'

import { useEffect } from 'react'
import { X, ArrowUpRight } from 'lucide-react'
import { SiteIcon } from '@/components/v2/site-icon'

export type DetailItem = {
  title: string
  subtitle?: string
  description?: string
  url?: string
  group?: string
  cover?: string
  meta?: { label: string; value: string }[]
}

export function DetailModal({ item, onClose }: { item: DetailItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  const host = item.url && item.url !== '#' ? safeHost(item.url) : null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-t-xl border border-border bg-card shadow-2xl sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {item.cover ? (
          <div className="relative h-40 w-full overflow-hidden border-b border-border">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.cover})` }}
              role="img"
              aria-label={item.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </div>
        ) : null}
        <div className="flex items-start gap-3 border-b border-border p-5">
          <SiteIcon url={item.url} alt={item.title} size={40} active className="rounded-md" />
          <div className="min-w-0 flex-1">
            {item.group ? (
              <p className="font-mono text-[11px] uppercase tracking-wider text-primary">{item.group}</p>
            ) : null}
            <h3 className="truncate text-lg font-semibold text-foreground">{item.title}</h3>
            {item.subtitle ? (
              <p className="truncate font-mono text-xs text-muted-foreground">{item.subtitle}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-8 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          {item.description ? (
            <p className="text-sm leading-relaxed text-foreground/90">{item.description}</p>
          ) : (
            <p className="font-mono text-sm text-muted-foreground">{'// no notes yet'}</p>
          )}

          {item.meta && item.meta.length > 0 ? (
            <dl className="grid grid-cols-2 gap-3 border-t border-border pt-4">
              {item.meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {m.label}
                  </dt>
                  <dd className="text-sm text-foreground">{m.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {host ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Visit {host}
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function safeHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return null
  }
}
