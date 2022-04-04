
from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql import func


class Message(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    channel_id = db.Column(db.Integer, db.ForeignKey(
        "channel.id"), nullable=False)
    content = db.Column(db.String(4000), nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=func.now())
    # Relationships
    user = db.relationship("User", back_populates="message")
    channel = db.relationship("Channel", back_populates="message")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'channel_id': self.channel_id,
            'content': self.content,
            'createad_at': self.created_at
        }
