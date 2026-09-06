import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { DirectoryV2 } from '@/components/v2/directory-2'
import { AchievementsSectionV2, ContributionsSectionV2 } from '@/components/v2/feature-sections-2'
import { GamesSectionV2 } from '@/components/v2/games-section-2'
import { PlacesSection } from '@/components/v2/places-section'
import { QuotesSection } from '@/components/quotes-section'
import { ContactSection } from '@/components/contact-section'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { profile, navSectionsV2 } from '@/lib/data'

export const metadata: Metadata = {
  title: `${profile.name} — Interactive Workbench`,
  description:
    'An interactive version with logos, expandable detail cards and a map of places visited.',
}

export default function PageV2() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader sections={navSectionsV2} actions={<ModeToggle />} />
        <main>
          <Hero />
          <DirectoryV2 />
          <AchievementsSectionV2 />
          <ContributionsSectionV2 />
          <GamesSectionV2 />
          <PlacesSection />
          <QuotesSection />
          <ContactSection />
        </main>
        <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 font-mono text-xs text-muted-foreground md:flex-row md:px-8">
          <span>
            <span className="text-primary">$</span> echo &quot;{profile.name} — {profile.location}&quot;
          </span>
          <span>Interactive edition — logos, detail cards &amp; map</span>
        </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
