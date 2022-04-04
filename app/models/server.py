from .db import db


class Server(db.Model):
    __tablename__ = 'servers'
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    name = db.Column(db.String(50))
    icon = db.Column(db.String(255))
    invite_URL = db.Column(db.String(255))
    # Relationships
    channels = db.relationship("Channel", back_populates="server")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'icon': self.icon,
            'invite_URL': self.invite_URL
        }



class Channel(db.Model):
    __tablename__ = "channels"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    server_id = db.Column(db.Integer, db.ForeignKey(
        "servers.id"), nullable=False)
    # Relationships
    server = db.relationship("Server", back_populates="channels")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'server_id': self.server_id
        }