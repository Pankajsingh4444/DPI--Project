from flask import Blueprint, jsonify

from app.services.packet_capture import packet_capture_service

packets_bp = Blueprint("packets", __name__, url_prefix="/api")


@packets_bp.route("/packets", methods=["GET"])
def get_packets():
    return jsonify(packet_capture_service.get_packets())
