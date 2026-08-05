import type { Alert, Packet } from '../types/dashboard'

export const statValues = {
  totalPackets: '15,248',
  activeThreats: '12',
  packetsPerSec: '328',
  alerts: '5',
}

export const packets: Packet[] = [
  {
    sourceIp: '192.168.1.105',
    destinationIp: '8.8.8.8',
    protocol: 'TCP',
    size: 74,
    time: '14:31:02',
  },
  {
    sourceIp: '10.0.0.12',
    destinationIp: '192.168.1.1',
    protocol: 'UDP',
    size: 512,
    time: '14:31:05',
  },
  {
    sourceIp: '172.16.0.44',
    destinationIp: '172.16.0.1',
    protocol: 'ICMP',
    size: 64,
    time: '14:31:08',
  },
  {
    sourceIp: '203.0.113.45',
    destinationIp: '192.168.1.10',
    protocol: 'TCP',
    size: 60,
    time: '14:31:12',
  },
  {
    sourceIp: '192.168.1.50',
    destinationIp: '142.250.80.46',
    protocol: 'UDP',
    size: 1280,
    time: '14:31:15',
  },
  {
    sourceIp: '198.51.100.22',
    destinationIp: '192.168.1.1',
    protocol: 'ICMP',
    size: 84,
    time: '14:31:18',
  },
  {
    sourceIp: '192.168.1.200',
    destinationIp: '10.0.0.5',
    protocol: 'TCP',
    size: 52,
    time: '14:31:22',
  },
  {
    sourceIp: '10.0.0.88',
    destinationIp: '224.0.0.251',
    protocol: 'UDP',
    size: 256,
    time: '14:31:25',
  },
  {
    sourceIp: '192.168.1.15',
    destinationIp: '192.168.1.255',
    protocol: 'UDP',
    size: 78,
    time: '14:31:28',
  },
  {
    sourceIp: '172.16.0.99',
    destinationIp: '8.8.4.4',
    protocol: 'TCP',
    size: 66,
    time: '14:31:31',
  },
]

export const alerts: Alert[] = [
  {
    severity: 'High',
    description: 'Port Scan detected from 203.0.113.45 targeting ports 22, 80, 443',
    timestamp: '14:28:15',
  },
  {
    severity: 'Medium',
    description: 'Suspicious Port 4444 connection attempt from 192.168.1.200',
    timestamp: '14:29:02',
  },
  {
    severity: 'High',
    description: 'ICMP Flood detected from 198.51.100.22 — 850 packets in 10 seconds',
    timestamp: '14:30:11',
  },
  {
    severity: 'Low',
    description: 'Unknown Host resolution failure for api.internal.corp.local',
    timestamp: '14:30:45',
  },
  {
    severity: 'Medium',
    description: 'Multiple Failed Connections from 192.168.1.200 to 10.0.0.5:22',
    timestamp: '14:31:33',
  },
]
