interface StatCardProps {
  title: string
  value: string
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-cyan-950/20">
      <p className="text-sm font-medium text-slate-400">{title}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-cyan-400">{value}</p>
    </div>
  )
}

export default StatCard
