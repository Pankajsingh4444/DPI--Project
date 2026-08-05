export interface Packet {
  sourceIp: string
  destinationIp: string
  protocol: 'TCP' | 'UDP' | 'ICMP'
  size: number
  time: string
}

export interface Alert {
  severity: 'Low' | 'Medium' | 'High'
  description: string
  timestamp: string
}
