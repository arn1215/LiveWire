from flask import Blueprint, request
from flask_login import login_required
from ..models import db, Server, Channel, Message, server_users
from random import randint

message_routes = Blueprint('messages', __name__)


# get all messages for a channel id/create new message
@message_routes.route('/<int:channel_id>', methods=['GET', 'POST'])
def get_messages(channel_id):
    if request.method == "POST":
      data = request.get_json(force=True)

      message = Message(
        message_owner_id=data["message_owner_id"],
        channel_id=data["channel_id"],
        content=data["content"]
      )

      db.session.add(message)
      db.session.flush()
      db.session.commit()

      return message.to_dict()

    messages = Message.query.filter(Message.channel_id == channel_id)

    return { "messages": [m.to_dict() for m in messages] }


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
  server_list = Server.query.join(server_users).filter(server_users.c.user_join_id == user_id).all()
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
