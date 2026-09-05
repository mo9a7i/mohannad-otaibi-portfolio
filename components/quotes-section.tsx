import { Quote as QuoteIcon } from 'lucide-react'
import { quotes } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function QuotesSection() {
  return (
    <section id="quotes" className="scroll-mt-20 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="05"
          command="fortune"
          title="Words I Live By"
          blurb="A rotating set of lines I keep close — mostly about automation, change and staying quiet."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote) => (
            <figure
              key={quote.text}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6"
            >
              <QuoteIcon className="size-5 text-primary" aria-hidden="true" />
              <blockquote className="text-pretty text-base leading-relaxed text-foreground">
                {quote.text}
              </blockquote>
              <figcaption className="mt-auto font-mono text-xs text-muted-foreground">
                — {quote.author}
                {quote.source ? <span className="text-muted-foreground/70"> · {quote.source}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
