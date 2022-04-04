from flask import Blueprint, request
from flask_login import login_required
from ..models import db, Server, User, Message, server_users

server_routes = Blueprint('servers', __name__)


# get one server
@server_routes.route('/<int:server_id>')
@login_required
def get_one_server(server_id):
  server = Server.query.filter(Server.id == server_id).one()
  return {"server": server.to_dict()}






# get all servers/create new server
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
  return { "servers": sorted([s.to_dict() for s in servers], key=lambda s: s["id"], reverse=True)}
