'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Send, Check, FileText } from 'lucide-react'
import { profile } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { SocialLinks } from '@/components/social-links'

const fieldClass =
  'w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="06"
          command="./say-hi"
          title="Let's Get in Touch"
          blurb="For projects, questions, or simply saying hi. I'll try to respond within 2–5 business days."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="firstName" className="font-mono text-xs text-muted-foreground">
                  first name
                </label>
                <input id="firstName" name="firstName" required className={fieldClass} placeholder="Ada" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lastName" className="font-mono text-xs text-muted-foreground">
                  last name
                </label>
                <input id="lastName" name="lastName" className={fieldClass} placeholder="Lovelace" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-xs text-muted-foreground">
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="font-mono text-xs text-muted-foreground">
                  phone
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+966 ..." />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
                message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${fieldClass} resize-y`}
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check className="size-4" /> Message queued
                </>
              ) : (
                <>
                  <Send className="size-4" /> Send message
                </>
              )}
            </button>
          </form>

          <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">Quick Connect</h3>
            <p className="text-sm text-muted-foreground">
              Feel free to reach out through any of these channels.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-md border border-border px-3 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <Mail className="size-4 text-primary" />
              {profile.email}
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-md border border-border px-3 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <MessageCircle className="size-4 text-primary" />
              WhatsApp message
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-md border border-border px-3 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent"
            >
              <FileText className="size-4 text-primary" />
              Download résumé
            </a>
            <div className="flex items-center gap-3 rounded-md border border-border px-3 py-2.5 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {profile.location}
            </div>
            <div className="mt-1 flex items-center gap-1 border-t border-border pt-4">
              <SocialLinks showResume={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
