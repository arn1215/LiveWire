# from .db import db
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin

# server_users = db.Table(
#     "server_users",
#     db.Column(
#     "id",
#     db.Integer,
#     primary_key=True
#     ),
#     db.Column(
#       "server_id",
#       db.Integer,
#       db.ForeignKey("servers.id"),
#       primary_key=True
#     ),
#     db.Column(
#         "user_id",
#         db.Integer,
#         db.ForeignKey("users.id"),
#         primary_key=True
#     )
# )

# class User(db.Model, UserMixin):
#     __tablename__ = 'users'

#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(40), nullable=False, unique=True)
#     email = db.Column(db.String(255), nullable=False, unique=True)
#     hashed_password = db.Column(db.String(255), nullable=False)

#     message = db.relationship("Message", back_populates="user")
#     servers = db.relationship("Server", secondary='server_users', back_populates='users')
#     @property
#     def password(self):
#         return self.hashed_password

#     @password.setter
#     def password(self, password):
#         self.hashed_password = generate_password_hash(password)

#     def check_password(self, password):
#         return check_password_hash(self.password, password)

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'username': self.username,
#             'email': self.email
#         }
