import type { Alert } from '../../types/dashboard'

interface AlertsListProps {
  alerts: Alert[]
}

const severityStyles: Record<Alert['severity'], string> = {
  Low: 'text-slate-400 bg-slate-500/10 ring-slate-500/20',
  Medium: 'text-amber-400 bg-amber-500/10 ring-amber-500/20',
  High: 'text-red-400 bg-red-500/10 ring-red-500/20',
}

function AlertsList({ alerts }: AlertsListProps) {
  return (
    <ul className="flex w-full flex-col gap-3">
      {alerts.map((alert) => (
        <li
          key={`${alert.timestamp}-${alert.description}`}
          className="rounded-md border border-slate-800 bg-slate-950/40 px-3 py-3"
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <span
              className={`inline-flex rounded px-2 py-0.5 text-xs font-medium ring-1 ${severityStyles[alert.severity]}`}
            >
              {alert.severity}
            </span>
            <span className="font-mono text-xs text-slate-500">{alert.timestamp}</span>
          </div>
          <p className="text-sm text-slate-300">{alert.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default AlertsList
