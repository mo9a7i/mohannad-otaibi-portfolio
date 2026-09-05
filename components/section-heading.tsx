import type { ReactNode } from 'react'

export function SectionHeading({
  index,
  command,
  title,
  blurb,
  action,
}: {
  index: string
  command: string
  title: string
  blurb?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="text-primary">{index}</span>
          <span className="text-border">/</span>
          <span>
            <span className="text-primary">$</span> {command}
          </span>
        </div>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {blurb ? <p className="max-w-xl text-pretty text-sm text-muted-foreground">{blurb}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
