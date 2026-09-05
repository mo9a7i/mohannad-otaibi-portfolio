'use client'

import { useState } from 'react'
import { games } from '@/lib/data'
import { gameLinks } from '@/lib/links'
import { SectionHeading } from '@/components/section-heading'
import { DetailModal, type DetailItem } from '@/components/v2/detail-modal'

const COVER_BASE = 'https://mohannadotaibi.com/assets/images/games'

function gameCover(name: string) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '_')
  return `${COVER_BASE}/${slug}.jpg`
}

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
          blurb={`Games I play when I have the time. ${playedCount} of ${games.length} logged. Covers are greyscale — hover to bring them to life, click for details.`}
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {games.map((game) => {
            const url = gameLinks[game.name]
            const cover = gameCover(game.name)
            return (
              <li key={game.name}>
                <button
                  type="button"
                  onClick={() =>
                    setSelected({
                      title: game.name,
                      subtitle: game.studio,
                      url,
                      cover,
                      group: 'Game',
                      meta: [
                        { label: 'Studio', value: game.studio ?? '—' },
                        { label: 'Year', value: game.year ?? '—' },
                        { label: 'Status', value: game.played ? 'Played' : 'Backlog' },
                      ],
                    })
                  }
                  className="group relative block h-full w-full overflow-hidden rounded-lg border border-border text-left transition-colors hover:border-primary/60"
                >
                  <div
                    className="aspect-[3/4] w-full bg-cover bg-center bg-secondary grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${cover})` }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <span
                    className={`absolute right-2 top-2 rounded-sm px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider backdrop-blur-sm ${
                      game.played
                        ? 'bg-primary/85 text-primary-foreground'
                        : 'bg-background/70 text-muted-foreground'
                    }`}
                  >
                    {game.played ? 'played' : 'backlog'}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="text-pretty text-sm font-medium leading-snug text-foreground">
                      {game.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
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
