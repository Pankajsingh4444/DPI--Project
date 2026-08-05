function TopNavbar() {
  return (
    <header className="flex flex-col gap-3 border-b border-slate-800 bg-slate-900/80 px-4 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <h1 className="text-lg font-semibold text-slate-100 md:text-xl">
        Deep Packet Inspection — SOC Dashboard
      </h1>

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          System Online
        </span>
        <span className="rounded-md border border-slate-700 bg-slate-950/60 px-3 py-1 font-mono text-xs text-slate-500">
          --:--:--
        </span>
      </div>
    </header>
  )
}

export default TopNavbar
