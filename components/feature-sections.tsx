import { ArrowUpRight } from 'lucide-react'
import { achievements, contributions, type Feature } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

function FeatureCard({ item, tag }: { item: Feature; tag: string }) {
  return (
    <article className="group flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50">
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{tag}</span>
        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <h3 className="text-pretty text-base font-semibold leading-snug text-foreground">
        {item.title}
      </h3>
      {item.description ? (
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      ) : (
        <p className="font-mono text-xs text-muted-foreground">{'// script / utility'}</p>
      )}
    </article>
  )
}

export function AchievementsSection() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="02"
          command="cat achievements.md"
          title="Work I'm Proud Of"
          blurb="Tools, guides and experiments — the pieces of work worth keeping a record of."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <FeatureCard key={item.title} item={item} tag="build" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContributionsSection() {
  return (
    <section id="contributions" className="scroll-mt-20 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="03"
          command="git log --author=mohannad"
          title="Open Source"
          blurb="Contributions and libraries given back to the open-source community."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contributions.map((item) => (
            <FeatureCard key={item.title} item={item} tag="commit" />
          ))}
        </div>
      </div>
    </section>
  )
}
