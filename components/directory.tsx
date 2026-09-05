'use client'

import { useMemo, useState } from 'react'
import { Search, Cpu, SquareTerminal, Command, Boxes, CircleDot, Building2, Bookmark } from 'lucide-react'
import { directory } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

const groupIcons: Record<string, typeof Cpu> = {
  software: Cpu,
  systems: SquareTerminal,
  languages: Command,
  frameworks: Boxes,
  standards: CircleDot,
  organizations: Building2,
  bookmarks: Bookmark,
}

export function Directory() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return directory
    return directory
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) || item.note?.toLowerCase().includes(q),
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  const total = useMemo(() => filtered.reduce((n, g) => n + g.items.length, 0), [filtered])

  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        index="01"
        command="ls ~/stack"
        title="The Stack"
        blurb="Software, operating systems, languages and the toolchains I keep close. Search to jump straight to something."
        action={
          <label className="flex w-full items-center gap-2 rounded-md border border-border bg-card px-3 py-2 font-mono text-sm md:w-72">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="grep the stack..."
              aria-label="Search the stack"
              className="w-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </label>
        }
      />

      <p className="mt-4 font-mono text-xs text-muted-foreground" aria-live="polite">
        {total} {total === 1 ? 'entry' : 'entries'}
        {query ? ` matching "${query}"` : ''}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center font-mono text-sm text-muted-foreground">
          {'// no matches — try a different query'}
        </p>
      ) : (
        <div className="mt-10 space-y-12">
          {filtered.map((group) => {
            const Icon = groupIcons[group.id] ?? CircleDot
            return (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <div className="mb-4 flex items-baseline gap-3">
                  <Icon className="size-4 translate-y-0.5 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">{group.label}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{group.blurb}</span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {group.items.length}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
                    >
                      <span className="size-1.5 rounded-full bg-primary/60 transition-colors group-hover:bg-primary" />
                      {item.name}
                      {item.note ? (
                        <span className="font-mono text-xs text-muted-foreground">— {item.note}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
