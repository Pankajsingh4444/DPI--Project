import logging
import os
import threading
from collections import deque
from datetime import datetime
from typing import Optional

logger = logging.getLogger(__name__)


class PacketCaptureService:
    MAX_PACKETS = 100
    SNIFF_FILTER = "tcp or udp or icmp"

    def __init__(self, max_packets: int = MAX_PACKETS):
        self._max_packets = max_packets
        self._packets: deque[dict] = deque(maxlen=max_packets)
        self._lock = threading.Lock()
        self._thread: Optional[threading.Thread] = None
        self._running = False

    def start(self) -> None:
        if self._running:
            return

        self._running = True
        self._thread = threading.Thread(
            target=self._capture_loop,
            name="packet-capture",
            daemon=True,
        )
        self._thread.start()
        logger.info("Packet capture service started")

    def get_packets(self) -> list[dict]:
        with self._lock:
            return list(self._packets)

    def _capture_loop(self) -> None:
        try:
            from scapy.all import sniff

            sniff(
                prn=self._handle_packet,
                store=False,
                filter=self.SNIFF_FILTER,
            )
        except Exception:
            self._running = False
            logger.exception("Packet capture failed to start or stopped unexpectedly")

    def _handle_packet(self, packet) -> None:
        parsed = self._parse_packet(packet)
        if parsed is None:
            return

        with self._lock:
            self._packets.append(parsed)

    def _parse_packet(self, packet) -> Optional[dict]:
        try:
            from scapy.layers.inet import IP, TCP, UDP, ICMP

            if IP not in packet:
                return None

            ip_layer = packet[IP]

            if TCP in packet:
                protocol = "TCP"
            elif UDP in packet:
                protocol = "UDP"
            elif ICMP in packet:
                protocol = "ICMP"
            else:
                return None

            timestamp = datetime.fromtimestamp(float(packet.time)).strftime("%H:%M:%S")

            return {
                "source_ip": ip_layer.src,
                "destination_ip": ip_layer.dst,
                "protocol": protocol,
                "packet_length": len(packet),
                "timestamp": timestamp,
            }
        except Exception:
            return None


packet_capture_service = PacketCaptureService()
