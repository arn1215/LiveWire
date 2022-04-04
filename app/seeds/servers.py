from app.models import db, Server


# Adds a demo user, you can add other users here if you want
def seed_servers():
    demo = Server(
         owner_id=1, name='Test server', icon='https://e7.pngegg.com/pngimages/621/237/png-clipart-what-emoji-2-ghost-it-coque-happy-ghost-emoji-text-logo.png', invite_URL='www.hey.com')

    demo2 = Server(
         owner_id=1, name='Test server 2', icon='https://e7.pngegg.com/pngimages/621/237/png-clipart-what-emoji-2-ghost-it-coque-happy-ghost-emoji-text-logo.png', invite_URL='www.hey.com')

    demo3 = Server(
         owner_id=2, name='EGG DOG', icon='https://static.wikia.nocookie.net/meme/images/b/bf/Gfx_eggdog.png/revision/latest/scale-to-width-down/250?cb=20191212182052g', invite_URL='www.hey.com')

    demo4 = Server(
         owner_id=3, name='BROGRAMMERS', icon='https://pbs.twimg.com/profile_images/1097177754963988480/3l0y3F-3_400x400.jpg', invite_URL='www.hey.com')

    demo5 = Server(
         owner_id=3, name='Commmunity', icon='https://m.media-amazon.com/images/M/MV5BZjk1NTA3NjQtMmY2Ni00MjA4LWExOGItODUzZTkyZDY3MDRjXkEyXkFqcGdeQW1yb2Njbw@@._V1_QL75_UX500_CR0,0,500,281_.jpg', invite_URL='www.hey.com')

    demo6 = Server(
         owner_id=2, name='DebateCord', icon='https://c.files.bbci.co.uk/12E7/production/_108793840_gettyimages-1167635390.jpg', invite_URL='www.hey.com')

    demo7 = Server(
         owner_id=2, name='Artists', icon='https://www.domusweb.it/content/dam/domusweb/en/art/2014/10/16/marcel_duchamp/Duchamp_01-LHOO_home.jpg.foto.rmedium.jpg', invite_URL='www.hey.com')

    demo8 = Server(
         owner_id=1, name='StreamersCord', icon='https://images-na.ssl-images-amazon.com/images/I/81qeA0ZGF8L.png', invite_URL='www.hey.com')

    demo9 = Server(
         owner_id=1, name='METACord', icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35MLJVZwc7c0K4aOJIp_8p5Q5GAVyeFuNNQ&usqp=CAU', invite_URL='www.hey.com')

    demo10 = Server(
         owner_id=1, name='LiveWire Gang', icon='https://pbs.twimg.com/tweet_video_thumb/D29rDOtW0AA7CJI.jpg', invite_URL='www.hey.com')
    
    
    
    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_servers():
    db.session.execute('TRUNCATE servers RESTART IDENTITY CASCADE;')
    db.session.commit()
