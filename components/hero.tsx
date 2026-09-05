import { MapPin, Mail, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/data'

const stats = [
  { label: 'tools tracked', value: '150+' },
  { label: 'languages', value: '17' },
  { label: 'years in the terminal', value: '15+' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <span className="w-fit rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            {profile.role}
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.bio}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch <ArrowUpRight className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
            >
              <Mail className="size-4" /> {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-primary" /> {profile.location}
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
              <span className="size-3 rounded-full bg-destructive/80" />
              <span className="size-3 rounded-full bg-primary/80" />
              <span className="size-3 rounded-full bg-muted-foreground/50" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">whoami — bash</span>
            </div>
            <div className="space-y-1.5 p-5 font-mono text-sm leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <p className="text-foreground">{profile.name.toLowerCase().replace(/\s+/g, '_')}</p>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat roles.txt
              </p>
              <p className="text-foreground">developer · devops · security · self-hoster</p>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> uptime --since
              </p>
              <p className="text-foreground">
                shipping since 2010 <span className="animate-pulse text-primary">▋</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border border-t border-border px-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 px-2 py-5 text-center md:px-6">
            <span className="text-xl font-semibold text-foreground md:text-2xl">{s.value}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
