from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, Server, User, Message, server_users
from random import randint

server_routes = Blueprint('servers', __name__)


# get all servers/create new server
@server_routes.route('/', methods=['GET', 'POST'])
def create_post():

  if request.method == "POST":
      data = request.get_json(force=True)

      server = Server(
        owner_id=current_user.id,
        name=data["name"],
        icon=data["icon"],
        invite_URL= (f'{randint(100, 10000)}'),
        users_many=[current_user]
      )

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
@server_routes.route('/<int:server_id>', methods=['PUT'])
# @login_required
def edit_server(server_id):
  server = Server.query.get(server_id)
  data = request.json
  if 'name' in data.keys():
    server.name = data['name']
  if 'icon' in data.keys():
    server.icon = data["icon"]
  db.session.commit()
  return server.to_dict()


# delete one server
@server_routes.route('/delete/<int:server_id>', methods=['DELETE'])
# @login_required
def delete_server(server_id):
  server = Server.query.filter(Server.id == server_id).first()
  db.session.delete(server)
  db.session.commit()
  return f"Deleted Server: {server_id}"



# get a user's servers
@server_routes.route('/byUser/<int:user_id>')
# @login_required
def load_on_login(user_id):
  server_list = Server.query.join(server_users).join(User).filter(server_users.c.user_join_id == user_id).all()
  return {"servers": [server.to_dict() for server in server_list]}


# get server by invite
@server_routes.route('/serverInvite/<server_invite>')
# @login_required
def get_server_invite(server_invite):
  server = Server.query.filter(Server.invite_URL == server_invite).one()
  if server:
    return {"server": server.to_dict()}
  else:
    return 'Server Does Not Exist!'


# post joining a server
@server_routes.route('/joinServer', methods=['POST'])
# @login_required
def join_server():
  data = request.json

  server = Server.query.filter(Server.invite_URL == data["invite_URL"])

  server.users_many.append(current_user)
  db.session.commit(server)

  return server.to_dict()
#potentially need to add to user array/depends on redux store

# call user/ update user property associated with server
