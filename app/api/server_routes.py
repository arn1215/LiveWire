from flask import Blueprint, request
from flask_login import login_required
from ..models import db, Server, User, Message

server_routes = Blueprint('servers', __name__)


# get all servers/create new server
@server_routes.route('/', methods=['GET', 'POST'])
def create_post():

  if request.method == "POST":
      data = request.get_json(force=True)

      server = Server(owner_id=data["owner_id"], name=data["name"], icon=data["icon"], invite_URL=data["invite_URL"])
      db.session.add(server)
      db.session.flush()
      db.session.commit()

      return server.to_dict()

  servers = Server.query.all()
  return { "servers": sorted([s.to_dict() for s in servers], key=lambda s: s["id"], reverse=True)}


# get one server
@server_routes.route('/<int:server_id>')
# @login_required
def get_one_server(server_id):
  server = Server.query.filter(Server.id == server_id).one()
  return {"server": server.to_dict()}



# edit one server
@server_routes.route('/<int:server_id>')
@login_required
def edit_server(server_id):
  server = Server.query.get(server_id)
  data = request.json
  if 'name' in data.keys():
    server.name = data["name"]
  if 'icon' in data.keys():
    server.icon = data["icon"]
  db.session.commit()
  return server.to_dict()


# delete one server
@server_routes.route('/<int:server_id>', methods=['DELETE'])
@login_required
def delete_server(server_id):
  server = Server.query.filter(Server.id == server_id).first()
  db.session.delete(server)
  db.session.commit()
  return f"Deleted Server: {server_id}"
