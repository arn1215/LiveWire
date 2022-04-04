from .db import db

server_users = db.Table(
    "server_users",
    db.Column(
      "server_id",
      db.Integer,
      db.ForeignKey("servers.id"),
      primary_key=True
    ),
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey("users.id"),
        primary_key=True
    )

)


class Server(db.Model):
    __tablename__ = 'servers'
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    name = db.Column(db.String(50))
    icon = db.Column(db.String(255))
    invite_URL = db.Column(db.String(255))
    # Relationships
    channels = db.relationship("Channel", back_populates="server")
    users = db.relationship("User", secondary='server_users', back_populates="servers" )

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'icon': self.icon,
            'invite_URL': self.invite_URL,
            'channels': [channel.to_dict() for channel in self.channels],
            'users': [user.to_dict() for user in self.users]
        }
