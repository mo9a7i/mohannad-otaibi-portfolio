import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono, Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex-mono' })

const themeInitScript = `(function(){try{var d=document.documentElement;var m=localStorage.getItem('theme-mode')||'dark';var sysLight=window.matchMedia('(prefers-color-scheme: light)').matches;var light=m==='light'||(m==='system'&&sysLight);d.classList.toggle('light',light);var a=localStorage.getItem('theme-accent');if(a)d.setAttribute('data-accent',a);var f=localStorage.getItem('theme-font');if(f)d.setAttribute('data-font',f);var r=localStorage.getItem('theme-radius');if(r)d.setAttribute('data-radius',r);}catch(e){}})();`

export const metadata: Metadata = {
  title: 'Mohannad Faihan Otaibi — Developer & DevOps Engineer',
  description:
    'The stack, tools, operating systems, dev skills, open-source work and bookmarks of Mohannad Faihan Otaibi — a developer, DevOps and security engineer based in Riyadh, Saudi Arabia.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1c22',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`bg-background ${geistSans.variable} ${geistMono.variable} ${inter.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
