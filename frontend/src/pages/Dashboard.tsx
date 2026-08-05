import DashboardLayout from '../components/layout/DashboardLayout'
import AlertsList from '../components/dashboard/AlertsList'
import PacketTable from '../components/dashboard/PacketTable'
import PanelContainer from '../components/dashboard/PanelContainer'
import StatCard from '../components/dashboard/StatCard'
import { alerts, packets, statValues } from '../data/mockDashboardData'

const statCards = [
  { title: 'Total Packets', value: statValues.totalPackets },
  { title: 'Active Threats', value: statValues.activeThreats },
  { title: 'Packets / Sec', value: statValues.packetsPerSec },
  { title: 'Alerts', value: statValues.alerts },
]

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <StatCard key={card.title} title={card.title} value={card.value} />
          ))}
        </div>

        <PanelContainer title="Packet Table" className="min-h-[16rem]">
          <PacketTable packets={packets} />
        </PanelContainer>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <PanelContainer title="Traffic Chart" className="min-h-[20rem] xl:col-span-2" />
          <PanelContainer title="Alerts" className="min-h-[20rem]">
            <AlertsList alerts={alerts} />
          </PanelContainer>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
