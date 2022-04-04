from app.models import db, Server


# Adds a demo user, you can add other users here if you want
def seed_servers():
    demo = Server(
         owner_id=1, name='Test server', icon='https://e7.pngegg.com/pngimages/621/237/png-clipart-what-emoji-2-ghost-it-coque-happy-ghost-emoji-text-logo.png', invite_URL='www.hey.com')

    demo2 = Server(
         owner_id=1, name='Test server 2', icon='https://e7.pngegg.com/pngimages/621/237/png-clipart-what-emoji-2-ghost-it-coque-happy-ghost-emoji-text-logo.png', invite_URL='www.hey.com')

    demo3 = Server(
         owner_id=2, name='EGG DOG', icon='https://static.wikia.nocookie.net/meme/images/b/bf/Gfx_eggdog.png/revision/latest/scale-to-width-down/250?cb=20191212182052g', invite_URL='www.hey.com')

    
    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_servers():
    db.session.execute('TRUNCATE servers RESTART IDENTITY CASCADE;')
    db.session.commit()
