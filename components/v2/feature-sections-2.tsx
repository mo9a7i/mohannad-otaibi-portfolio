'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { achievements, contributions, type Feature } from '@/lib/data'
import { links } from '@/lib/links'
import { SectionHeading } from '@/components/section-heading'
import { SiteIcon } from '@/components/v2/site-icon'
import { DetailModal, type DetailItem } from '@/components/v2/detail-modal'

function FeatureGrid({ items, onOpen }: { items: Feature[]; onOpen: (i: DetailItem) => void }) {
  return (
    <ul className="mt-10 grid gap-3 sm:grid-cols-2">
      {items.map((f) => {
        const url = links[f.title]
        return (
          <li key={f.title}>
            <button
              type="button"
              onClick={() => onOpen({ title: f.title, description: f.description, url })}
              className="group flex h-full w-full items-start gap-3 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <SiteIcon url={url} alt={f.title} size={32} className="mt-0.5 rounded-md" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                  {url ? (
                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  ) : null}
                </div>
                {f.description ? (
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                ) : (
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{'// side project'}</p>
                )}
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export function AchievementsSectionV2() {
  const [selected, setSelected] = useState<DetailItem | null>(null)
  return (
    <section id="work" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="02"
          command="cat achievements.md"
          title="Things I've Built"
          blurb="Tools, guides and experiments that made it out into the world. Click one to read more."
        />
        <FeatureGrid items={achievements} onOpen={setSelected} />
      </div>
      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export function ContributionsSectionV2() {
  const [selected, setSelected] = useState<DetailItem | null>(null)
  return (
    <section id="contributions" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="03"
          command="git log --author=mo9a7i"
          title="Open Source"
          blurb="Packages I publish and projects I've contributed translations, tools and fixes to."
        />
        <FeatureGrid items={contributions} onOpen={setSelected} />
      </div>
      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
