const navItems = [
  { label: 'Dashboard', active: true },
  { label: 'Live Packets', active: false },
  { label: 'Threat Detection', active: false },
  { label: 'Reports', active: false },
]

function Sidebar() {
  return (
    <aside className="border-b border-slate-800 bg-slate-900 md:flex md:w-64 md:flex-shrink-0 md:flex-col md:border-b-0 md:border-r">
      <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-5 md:px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/30">
          <svg
            className="h-5 w-5 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>
        <div>
          <p className="text-lg font-bold tracking-tight text-slate-100">DPI</p>
          <p className="text-xs text-slate-500">Deep Packet Inspection</p>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto px-2 py-3 md:flex-col md:overflow-visible md:px-3 md:py-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`whitespace-nowrap rounded-md px-3 py-2 text-left text-sm font-medium transition-colors md:px-4 md:py-2.5 ${
              item.active
                ? 'bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20'
                : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
