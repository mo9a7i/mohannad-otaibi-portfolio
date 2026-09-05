'use client'

import { useMemo, useState } from 'react'
import { Search, Cpu, SquareTerminal, Command, Boxes, CircleDot, Building2, Bookmark } from 'lucide-react'
import { directory } from '@/lib/data'
import { links } from '@/lib/links'
import { SectionHeading } from '@/components/section-heading'
import { SiteIcon } from '@/components/v2/site-icon'
import { DetailModal, type DetailItem } from '@/components/v2/detail-modal'

const groupIcons: Record<string, typeof Cpu> = {
  software: Cpu,
  systems: SquareTerminal,
  languages: Command,
  frameworks: Boxes,
  standards: CircleDot,
  organizations: Building2,
  bookmarks: Bookmark,
}

export function DirectoryV2() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<DetailItem | null>(null)

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
        blurb="Software, operating systems, languages and toolchains. Hover a logo to bring it to life, click any entry for details and the link."
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
                  <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                    {group.blurb}
                  </span>
                  <span className="ml-auto font-mono text-xs text-muted-foreground">
                    {group.items.length}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const url = links[item.name]
                    return (
                      <li key={item.name}>
                        <button
                          type="button"
                          onClick={() =>
                            setSelected({
                              title: item.name,
                              subtitle: item.note,
                              url,
                              group: group.label,
                            })
                          }
                          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card py-1.5 pl-1.5 pr-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
                        >
                          <SiteIcon url={url} alt={item.name} size={18} />
                          {item.name}
                          {item.note ? (
                            <span className="font-mono text-xs text-muted-foreground">— {item.note}</span>
                          ) : null}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      )}

      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
