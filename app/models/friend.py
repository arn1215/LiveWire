from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql import func


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
