import os

from app import create_app
from app.services.packet_capture import packet_capture_service

app = create_app()


def _start_capture_if_needed() -> None:
    if os.environ.get("WERKZEUG_RUN_MAIN") == "true":
        packet_capture_service.start()
    elif __name__ == "__main__" and not app.debug:
        packet_capture_service.start()


_start_capture_if_needed()

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
