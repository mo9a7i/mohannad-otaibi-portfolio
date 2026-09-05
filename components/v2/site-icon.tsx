'use client'

import { useState } from 'react'
import { faviconFor, faviconFallback } from '@/lib/links'

type Props = {
  url?: string
  alt: string
  /** px size of the square icon box */
  size?: number
  /** when true, icon is colorized regardless of hover (used inside already-hovered rows) */
  active?: boolean
  className?: string
}

/**
 * Favicon/logo thumbnail. Renders grayscale by default and colorizes on hover
 * (or when `active`). Falls back to Google's favicon service, then to a glyph.
 */
export function SiteIcon({ url, alt, size = 20, active = false, className = '' }: Props) {
  const primary = faviconFor(url)
  const fallback = faviconFallback(url)
  const [src, setSrc] = useState<string | null>(primary)

  const box = `grid shrink-0 place-items-center overflow-hidden rounded-[4px] bg-secondary ${className}`
  const dims = { width: size, height: size }

  if (!src) {
    return (
      <span
        style={dims}
        className={`${box} font-mono text-[10px] text-muted-foreground`}
        aria-hidden="true"
      >
        {alt.slice(0, 1).toUpperCase()}
      </span>
    )
  }

  return (
    <span style={dims} className={box}>
      <img
        src={src || '/placeholder.svg'}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        crossOrigin="anonymous"
        onError={() => setSrc(src === primary ? fallback : null)}
        className={`size-full object-contain transition-[filter,opacity] duration-300 ${
          active ? 'grayscale-0 opacity-100' : 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100'
        }`}
      />
    </span>
  )
}
