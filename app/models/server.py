from .db import db


class Server(db.Model):
    __tablename__ = 'servers'
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("User.id"))
    name = db.Column(db.String(50))
    icon = db.Column(db.String(255))
    invite_URL = db.Column(db.String(255))
    # Relationships
    channel = db.relationship("Channel", back_populates="server")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'icon': self.icon,
            'invite_URL': self.invite_URL
        }
