from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import DateTime
from sqlalchemy.sql import func



server_users = db.Table(
    "server_users",
    db.Column(
      "server_join_id",
      db.Integer,
      db.ForeignKey("servers.id"),
      primary_key=True
    ),
    db.Column(
        "user_join_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    )
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    message = db.relationship("Message", back_populates="user")
    server_many = db.relationship("Server", secondary=server_users, back_populates="users_many")
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'servers': [server.to_dict() for server in self.server_many]
        }


class Server(db.Model):
    __tablename__ = 'servers'
    __table_args__= {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    name = db.Column(db.String(50))
    icon = db.Column(db.String(255))
    invite_URL = db.Column(db.String(255))
    # Relationships
    channels = db.relationship("Channel", back_populates="server", cascade='all, delete')
    users_many = db.relationship("User", secondary=server_users, back_populates="server_many")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'icon': self.icon,
            'invite_URL': self.invite_URL,
            'channels': [channel.to_dict() for channel in self.channels],
            #'users': [user.to_dict() for user in self.users_many]
        }


class Channel(db.Model):
    __tablename__ = "channels"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    server_id = db.Column(db.Integer, db.ForeignKey(
        "servers.id"), nullable=False)
    # Relationships
    server = db.relationship("Server", back_populates="channels")
    messages = db.relationship("Message", back_populates="channel", cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'server_id': self.server_id,
            'messages': [message.to_dict() for message in self.messages]
        }




class Message(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.Integer, primary_key=True)
    message_owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    channel_id = db.Column(db.Integer, db.ForeignKey(
        "channels.id"), nullable=False)
    content = db.Column(db.String(4000), nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=func.now())
    # Relationships
    user = db.relationship("User", back_populates="message")
    channel = db.relationship("Channel", back_populates="messages")

    def to_dict(self):
        return {
            'id': self.id,
            'message_owner_id': self.message_owner_id,
            'channel_id': self.channel_id,
            'content': self.content,
            'created_at': self.created_at
        }

class Friend(db.Model):
    __tablename__ = 'friends'
    id = db.Column(db.Integer, primary_key=True)
    accepted = db.Column(db.Boolean, nullable=False)
    sender_user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    recipient_user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    created_at = db.Column(DateTime(timezone=True), default=func.now())
    updated_at = db.Column(DateTime(timezone=True),
                           onupdate=func.utc_timestamp())
    # Relationships


    def to_dict(self):
        return {
            'id': self.id,
            'accepted': self.accepted,
            'sender_user_id': self.sender_user_id,
            'recipient_user_id': self.recipient_user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }
