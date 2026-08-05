import type { ReactNode } from 'react'

interface PanelContainerProps {
  title: string
  className?: string
  children?: ReactNode
}

function PanelContainer({ title, className = '', children }: PanelContainerProps) {
  return (
    <section
      className={`flex flex-col rounded-lg border border-slate-800 bg-slate-900/60 shadow-lg shadow-cyan-950/20 ${className}`}
    >
      <header className="border-b border-slate-800 px-4 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
          {title}
        </h2>
      </header>
      <div className="flex flex-1 p-4">
        {children ?? (
          <div className="flex flex-1 items-center justify-center">
            <div className="h-full min-h-[12rem] w-full rounded border border-dashed border-slate-700/80 bg-slate-950/40" />
          </div>
        )}
      </div>
    </section>
  )
}

export default PanelContainer
