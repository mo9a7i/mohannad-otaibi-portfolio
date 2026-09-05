import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Directory } from '@/components/directory'
import { AchievementsSection, ContributionsSection } from '@/components/feature-sections'
import { GamesSection } from '@/components/games-section'
import { QuotesSection } from '@/components/quotes-section'
import { ContactSection } from '@/components/contact-section'
import { profile } from '@/lib/data'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Directory />
        <AchievementsSection />
        <ContributionsSection />
        <GamesSection />
        <QuotesSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 font-mono text-xs text-muted-foreground md:flex-row md:px-8">
          <span>
            <span className="text-primary">$</span> echo &quot;{profile.name} — {profile.location}&quot;
          </span>
          <span>Built as a better version of mohannadotaibi.com</span>
        </div>
      </footer>
    </div>
  )
}
