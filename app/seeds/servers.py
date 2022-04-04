from app.models import db, Server


# Adds a demo user, you can add other users here if you want
def seed_servers():
    demo = Server(
        id=1, owner_id=1, name='Test server', icon='https://e7.pngegg.com/pngimages/621/237/png-clipart-what-emoji-2-ghost-it-coque-happy-ghost-emoji-text-logo.png', invite_URL='www.hey.com')


    db.session.add(demo)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_servers():
    db.session.execute('TRUNCATE servers RESTART IDENTITY CASCADE;')
    db.session.commit()
