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

    db.session.add(message1)
    db.session.add(message2)
    db.session.add(message3)
    db.session.add(message4)
    db.session.add(message5)
    db.session.add(message6)
    db.session.add(message7)
    db.session.add(message8)
    db.session.add(message9)
    db.session.add(message10)
    db.session.add(message11)
    db.session.add(message12)
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
