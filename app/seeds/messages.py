from app.models import db, Message

# Adds a demo user, you can add other users here if you want
def seed_messages():
    message1 = Message(
        owner_id=1, channel_id=3, content='')
    message2 = Message(
        owner_id=2, channel_id=4, content='')
    message3 = Message(
        owner_id=3, channel_id=2, content='password')
    message4 = Message(
        owner_id=3, channel_id=2, content='password')
    message5 = Message(
        owner_id=3, channel_id=2, content='password')
    message6 = Message(
        owner_id=3, channel_id=2, content='password')
    message7 = Message(
        owner_id=3, channel_id=2, content='password')
    message8 = Message(
        owner_id=3, channel_id=2, content='password')
    message9 = Message(
        owner_id=3, channel_id=2, content='password')
    message10 = Message(
        owner_id=3, channel_id=2, content='password')
    message11 = Message(
        owner_id=3, channel_id=2, content='password')
    message12 = Message(
        owner_id=3, channel_id=2, content='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
