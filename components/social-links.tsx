'use client'

import { useState, type SVGProps } from 'react'
import { FileText } from 'lucide-react'
import { socials, profile, type Social } from '@/lib/data'
import { faviconFor, faviconFallback } from '@/lib/links'

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65Z" />
    </svg>
  )
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8ZM9.6 15.6V8.4l6.24 3.6L9.6 15.6Z" />
    </svg>
  )
}

function TwitchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M2.15 0 .5 4.13v16.5h5.66V24h3.1l3.3-3.37h4.62L23 15.15V0H2.15Zm18.37 14.16-3.3 3.37h-5.66l-3.3 3.37v-3.37H3.8V2.2h16.72v11.96Zm-4.95-7.8v6h-2.2v-6h2.2Zm-5.5 0v6H7.87v-6h2.2Z" />
    </svg>
  )
}

const iconMap: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  youtube: YouTubeIcon,
  twitch: TwitchIcon,
}

function FaviconMark({ social }: { social: Social }) {
  const primary = faviconFor(social.href)
  const fallback = faviconFallback(social.href)
  const [src, setSrc] = useState<string | null>(primary)

  if (!src) {
    return (
      <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
        {social.label.slice(0, 1)}
      </span>
    )
  }

  return (
    <img
      src={src || '/placeholder.svg'}
      alt=""
      width={18}
      height={18}
      loading="lazy"
      crossOrigin="anonymous"
      onError={() => setSrc(src === primary ? fallback : null)}
      className="size-[18px] object-contain grayscale opacity-70 transition-[filter,opacity] duration-300 group-hover:grayscale-0 group-hover:opacity-100"
    />
  )
}

export function SocialLinks({
  className = '',
  size = 36,
  showResume = true,
}: {
  className?: string
  size?: number
  showResume?: boolean
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socials.map((s) => {
        const Icon = iconMap[s.id]
        return (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.label}
            title={s.label}
            className="group grid place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-primary"
            style={{ width: size, height: size }}
          >
            {Icon ? <Icon className="size-[18px]" /> : <FaviconMark social={s} />}
          </a>
        )
      })}
      {showResume ? (
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 font-mono text-xs text-primary transition-colors hover:bg-primary/20"
          style={{ height: size }}
        >
          <FileText className="size-3.5" />
          résumé
        </a>
      ) : null}
    </div>
  )
}
