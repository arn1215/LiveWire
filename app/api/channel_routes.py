from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Channel

channel_routes = Blueprint('channels', __name__)

@channel_routes.route('/', methods=['GET', 'POST'])
def create_channel():
    if request.method == "POST":
      data = request.get_json(force=True)

      channel = Channel(name=data["name"], server_id=data["server_id"])
      db.session.add(channel)
      db.session.flush()
      db.session.commit()

      return channel.to_dict()

    channels = Channel.query.all()
    return { "channels": [c.to_dict() for c in channels] }

# edit one channel
@channel_routes.route('/<int:channel_id>')
# @login_required
def edit_channel(channel_id):
  channel = Channel.query.get(channel_id)
  data = request.json
  if 'name' in data.keys():
    channel.name = data["name"]
  db.session.commit()
  return channel.to_dict()

# delete one channel
@channel_routes.route('/<int:channel_id>', methods=['DELETE'])
# @login_required
def delete_channel(channel_id):
  channel = Channel.query.filter(Channel.id == channel_id).first()
  db.session.delete(channel)
  db.session.commit()
  return f"Deleted Channel: {channel_id}"
