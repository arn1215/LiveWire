from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Channel, User, Server

channel_routes = Blueprint('channels', __name__)




# edit one channel
@channel_routes.route('/<int:channel_id>', methods=['PUT'])
# @login_required
def edit_channel(channel_id):
  channel = Channel.query.get(channel_id)
  data = request.get_json(force=True)
  channel.name = data
  db.session.commit()
  return channel.to_dict()

# delete one channel
@channel_routes.route('/delete/<int:channel_id>', methods=['DELETE'])
# @login_required
def delete_channel(channel_id):
  channel = Channel.query.filter(Channel.id == channel_id).first()
  db.session.delete(channel)
  db.session.commit()
  return f"Deleted Channel: {channel_id}"

# get one channel by id
@channel_routes.route('/<int:channel_id>', methods=['GET'])
# @login_required
def get_one_channel(channel_id):
  channel = Channel.query.filter(Channel.id == channel_id).first()
  return channel.to_dict()

# get channels by server_id
@channel_routes.route('/byServer/<int:server_id>')
# @login_required
def get_server_channels(server_id):
    channels = Channel.query.filter(Channel.server_id == server_id).all()
    return { "channels": [channel.to_dict() for channel in channels] }

# create a channel
@channel_routes.route('/', methods=['POST'])
def create_channel():
    if request.method == "POST":
      data = request.get_json(force=True)

      channel = Channel(
        name=data["name"],
        server_id=data["serverId"]
      )

      db.session.add(channel)
      db.session.flush()
      db.session.commit()

      return channel.to_dict()

# joining a dm
@channel_routes.route('/dm/<int:user_id_1>/<int:user_id_2>', methods=['POST'])
# @login_required
def create_dm_channel(user_id_1, user_id_2):
  first_user = User.query.get(user_id_1)
  second_user = User.query.get(user_id_2)
  root = Server.query.get(first_user.root_server)
  root2 = Server.query.get(second_user.root_server)

  dm_channel = Channel(
    name=f'{first_user.username} and {second_user.username}',
    server_id= first_user.root_server
  )

  db.session.add(dm_channel)
  db.session.commit()

  root.users_many.append(second_user)
  root2.users_many.append(first_user)

  db.session.commit()


  return dm_channel.to_dict()
