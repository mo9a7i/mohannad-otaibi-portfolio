'use client'

import dynamic from 'next/dynamic'
import { MapPin } from 'lucide-react'
import { places } from '@/lib/places'
import { SectionHeading } from '@/components/section-heading'

const PlacesMap = dynamic(() => import('@/components/v2/places-map'), {
  ssr: false,
  loading: () => (
    <div className="grid h-[420px] w-full place-items-center rounded-lg border border-border bg-card">
      <span className="font-mono text-xs text-muted-foreground">loading map…</span>
    </div>
  ),
})

export function PlacesSection() {
  const countries = new Set(places.map((p) => p.country)).size

  return (
    <section id="places" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="05"
          command="traceroute ~/places"
          title="Places I've Been"
          blurb={`${places.length} spots across ${countries} countries. Pins are static — maintained in a JSON I edit by hand.`}
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-border">
          <PlacesMap />
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {places.map((p) => (
            <li
              key={`${p.name}-${p.country}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              <MapPin className={`size-3 ${p.home ? 'text-primary' : 'text-muted-foreground'}`} />
              {p.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
