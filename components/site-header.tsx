'use client'

import { useEffect, useState } from 'react'
import { navSections, profile } from '@/lib/data'

export function SiteHeader() {
  const [active, setActive] = useState<string>(navSections[0].id)

  useEffect(() => {
    const ids = navSections.map((s) => s.id)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="text-primary">{profile.handle}</span>
          <span className="text-muted-foreground">:~$</span>
          <span className="h-4 w-2 animate-pulse bg-primary" aria-hidden="true" />
        </a>
        <nav aria-label="Sections" className="flex max-w-[60%] items-center gap-1 overflow-x-auto">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              className={`whitespace-nowrap rounded-sm px-2.5 py-1 font-mono text-xs transition-colors ${
                active === s.id
                  ? 'bg-primary/15 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
