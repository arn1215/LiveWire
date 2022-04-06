from flask import Blueprint, request
from flask_login import login_required
from ..models import db, Message
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


# edit one message
@message_routes.route('/<int:message_id>', methods=['PUT'])
# @login_required
def edit_message(message_id):
    data = request.get_json(force=True)
    message = Message.query.get(message_id)

    if 'content' in data.keys():
        message.content = data['content']

    db.session.commit()
    return message.to_dict()



# delete one message
@message_routes.route('/delete/<int:message_id>', methods=['DELETE'])
# @login_required
def delete_message(message_id):
  message = Message.query.filter(Message.id == message_id).first()
  db.session.delete(message)
  db.session.commit()
  return f"Deleted Server: {message_id}"
