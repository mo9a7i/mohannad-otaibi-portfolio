import { games } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function GamesSection() {
  const playedCount = games.filter((g) => g.played).length

  return (
    <section id="games" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="04"
          command="./launch --games"
          title="Downtime"
          blurb={`Games I play when I have the time. ${playedCount} of ${games.length} logged.`}
        />
        <ul className="mt-10 divide-y divide-border overflow-hidden rounded-lg border border-border">
          {games.map((game) => (
            <li
              key={game.name}
              className="flex items-center gap-4 bg-card px-4 py-3 transition-colors hover:bg-accent"
            >
              <span
                className={`size-2 shrink-0 rounded-full ${game.played ? 'bg-primary' : 'bg-muted-foreground/40'}`}
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1 truncate text-sm text-foreground">{game.name}</span>
              {game.studio ? (
                <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                  {game.studio}
                </span>
              ) : null}
              <span className="w-12 shrink-0 text-right font-mono text-xs text-muted-foreground">
                {game.year ?? '—'}
              </span>
              <span
                className={`w-20 shrink-0 text-right font-mono text-[11px] uppercase tracking-wider ${
                  game.played ? 'text-primary' : 'text-muted-foreground/60'
                }`}
              >
                {game.played ? 'played' : 'backlog'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
