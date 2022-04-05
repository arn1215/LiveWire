# from app.models import db, Message

# # Adds a demo user, you can add other users here if you want
# def seed_messages():
#     message1 = Message(
#         owner_id=1, channel_id=16, content="I've come to the conclusion that the world is flat.")
#     message2 = Message(
#         owner_id=2, channel_id=16, content="What? We've known the world is round for thousands of years!")
#     message3 = Message(
#         owner_id=3, channel_id=16, content="True! Eratosthenes calculated the Earth's circumference around the second century B.C.")
#     message4 = Message(
#         owner_id=3, channel_id=7, content="I need more protein in my diet.")
#     message5 = Message(
#         owner_id=4, channel_id=16, content="What about all those images from space?!")
#     message6 = Message(
#         owner_id=5, channel_id=14, content="Yes, that's why I avoid crowds.")
#     message7 = Message(
#         owner_id=6, channel_id=14, content="They're everywhere where I work.")
#     message8 = Message(
#         owner_id=7, channel_id=14, content="Where do you work?")
#     message9 = Message(
#         owner_id=6, channel_id=14, content="DMV")
#     message10 = Message(
#         owner_id=6, channel_id=17, content="Are they out there?")
#     message11 = Message(
#         owner_id=7, channel_id=17, content="Sure, my friend was abducted just this last week.")
#     message12 = Message(
#         owner_id=8, channel_id=22, content="Twitch!!")

#     db.session.add(message1)
#     db.session.add(message2)
#     db.session.add(message3)
#     db.session.add(message4)
#     db.session.add(message5)
#     db.session.add(message6)
#     db.session.add(message7)
#     db.session.add(message8)
#     db.session.add(message9)
#     db.session.add(message10)
#     db.session.add(message11)
#     db.session.add(message12)

#     db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
# def undo_messages():
#     db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
#     db.session.commit()
