from flask import Blueprint, request
from ..models import db, Server, User, Message

server_routes = Blueprint('servers', __name__)


@server_routes.route('/', methods=['GET', 'POST'])
def create_post():

  if request.method == "POST":
      data = request.get_json(force=True)

      server = Server(owner_id=data["owner_id"], name=data["name"], icon=data["icon"], invite_URL=data["invite_URL"])
      db.session.add(server)
      db.session.flush()
      server.name = f"{server.name}: {server.id}"
      db.session.commit()

      return server.to_dict()

  servers = Server.query.all()

  return { "servers": sorted([s.to_dict() for s in servers], key=lambda s: s["id"], reverse=True}
