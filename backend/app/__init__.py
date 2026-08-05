from flask import Flask
from flask_cors import CORS

from app.config import Config
from app.extensions import db, jwt
from app.routes import register_routes


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    CORS(app, origins=app.config["CORS_ORIGINS"])
    db.init_app(app)
    jwt.init_app(app)

    register_routes(app)

    return app
