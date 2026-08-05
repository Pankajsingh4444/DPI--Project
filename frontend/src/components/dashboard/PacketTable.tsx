import type { Packet } from '../../types/dashboard'

interface PacketTableProps {
  packets: Packet[]
}

const protocolStyles: Record<Packet['protocol'], string> = {
  TCP: 'text-cyan-400 bg-cyan-500/10 ring-cyan-500/20',
  UDP: 'text-blue-400 bg-blue-500/10 ring-blue-500/20',
  ICMP: 'text-violet-400 bg-violet-500/10 ring-violet-500/20',
}

function PacketTable({ packets }: PacketTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-800 text-xs uppercase tracking-wide text-slate-500">
            <th className="px-3 py-2 font-medium">Source IP</th>
            <th className="px-3 py-2 font-medium">Destination IP</th>
            <th className="px-3 py-2 font-medium">Protocol</th>
            <th className="px-3 py-2 font-medium">Size</th>
            <th className="px-3 py-2 font-medium">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/80">
          {packets.map((packet) => (
            <tr key={`${packet.sourceIp}-${packet.destinationIp}-${packet.time}`} className="text-slate-300">
              <td className="px-3 py-2.5 font-mono text-xs">{packet.sourceIp}</td>
              <td className="px-3 py-2.5 font-mono text-xs">{packet.destinationIp}</td>
              <td className="px-3 py-2.5">
                <span
                  className={`inline-flex rounded px-2 py-0.5 text-xs font-medium ring-1 ${protocolStyles[packet.protocol]}`}
                >
                  {packet.protocol}
                </span>
              </td>
              <td className="px-3 py-2.5 font-mono text-xs">{packet.size} B</td>
              <td className="px-3 py-2.5 font-mono text-xs text-slate-500">{packet.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PacketTable
