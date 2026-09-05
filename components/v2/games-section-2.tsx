'use client'

import { useState } from 'react'
import { games } from '@/lib/data'
import { gameLinks } from '@/lib/links'
import { SectionHeading } from '@/components/section-heading'
import { SiteIcon } from '@/components/v2/site-icon'
import { DetailModal, type DetailItem } from '@/components/v2/detail-modal'

export function GamesSectionV2() {
  const [selected, setSelected] = useState<DetailItem | null>(null)
  const playedCount = games.filter((g) => g.played).length

  return (
    <section id="games" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="04"
          command="./launch --games"
          title="Downtime"
          blurb={`Games I play when I have the time. ${playedCount} of ${games.length} logged. Hover a cover, click for the store link.`}
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {games.map((game) => {
            const url = gameLinks[game.name]
            return (
              <li key={game.name}>
                <button
                  type="button"
                  onClick={() =>
                    setSelected({
                      title: game.name,
                      subtitle: game.studio,
                      url,
                      group: 'Game',
                      meta: [
                        { label: 'Studio', value: game.studio ?? '—' },
                        { label: 'Year', value: game.year ?? '—' },
                        { label: 'Status', value: game.played ? 'Played' : 'Backlog' },
                      ],
                    })
                  }
                  className="group flex h-full w-full flex-col gap-3 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-primary/50 hover:bg-accent"
                >
                  <div className="flex items-center justify-between">
                    <SiteIcon url={url} alt={game.name} size={40} className="rounded-md" />
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider ${
                        game.played ? 'text-primary' : 'text-muted-foreground/60'
                      }`}
                    >
                      {game.played ? 'played' : 'backlog'}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-pretty text-sm font-medium leading-snug text-foreground">
                      {game.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {game.studio ? `${game.studio} · ` : ''}
                      {game.year ?? '—'}
                    </p>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
