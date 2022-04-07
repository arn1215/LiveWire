from app.models import db, User, Server, Message, Friend, Channel
from random import randint

# Adds a demo user, you can add other users here if you want
def seed_all():

    #user seeds
    demo = User(
        username='Demo', email='demo@aa.io', password='password')

    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')

    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')

    betty = User(
        username='betty', email='bettywhite@aa.io', password='password')

    craig = User(
        username='craig', email='imgoingtomyroom@aa.io', password='password')

    marty = User(
        username='marty', email='mcfly@aa.io', password='password')

    lola = User(
        username='lola', email='lola@aa.io', password='password')

    jeremy = User(
        username='jeremy', email='jeremy@aa.io', password='password')

    yoshi= User(
        username='yoshi', email='yoshi@aa.io', password='password')

    jett = User(
        username='jett', email='jettsmine@aa.io', password='password')

    scott = User(
        username='scott', email='scotty@aa.io', password='password')

    debra = User(
        username='debra', email='debra@aa.io', password='password')

    destroyer = User(
        username='destroyer96', email='destroyer@aa.io', password='password')

    #server seeds
    server1 = Server(
         owner_id=1, name='Test server', icon='https://e7.pngegg.com/pngimages/621/237/png-clipart-what-emoji-2-ghost-it-coque-happy-ghost-emoji-text-logo.png', invite_URL= (f'{randint(100, 10000)}'))

    server2 = Server(
         owner_id=1, name='Test server 2', icon='https://e7.pngegg.com/pngimages/621/237/png-clipart-what-emoji-2-ghost-it-coque-happy-ghost-emoji-text-logo.png', invite_URL= (f'{randint(100, 10000)}'))

    server3 = Server(
         owner_id=2, name='EGG DOG', icon='https://static.wikia.nocookie.net/meme/images/b/bf/Gfx_eggdog.png/revision/latest/scale-to-width-down/250?cb=20191212182052g', invite_URL= (f'{randint(100, 10000)}'))

    server4 = Server(
         owner_id=3, name='BROGRAMMERS', icon='https://pbs.twimg.com/profile_images/1097177754963988480/3l0y3F-3_400x400.jpg', invite_URL= (f'{randint(100, 10000)}'))

    server5 = Server(
         owner_id=3, name='Commmunity', icon='https://m.media-amazon.com/images/M/MV5BZjk1NTA3NjQtMmY2Ni00MjA4LWExOGItODUzZTkyZDY3MDRjXkEyXkFqcGdeQW1yb2Njbw@@._V1_QL75_UX500_CR0,0,500,281_.jpg', invite_URL= (f'{randint(100, 10000)}'))

    server6 = Server(
         owner_id=2, name='DebateCord', icon='https://c.files.bbci.co.uk/12E7/production/_108793840_gettyimages-1167635390.jpg', invite_URL= (f'{randint(100, 10000)}'))

    server7 = Server(
         owner_id=2, name='Artists', icon='https://www.domusweb.it/content/dam/domusweb/en/art/2014/10/16/marcel_duchamp/Duchamp_01-LHOO_home.jpg.foto.rmedium.jpg', invite_URL= (f'{randint(100, 10000)}'))

    server8 = Server(
         owner_id=1, name='StreamersCord', icon='https://images-na.ssl-images-amazon.com/images/I/81qeA0ZGF8L.png', invite_URL= (f'{randint(100, 10000)}'))

    server9 = Server(
         owner_id=1, name='METACord', icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35MLJVZwc7c0K4aOJIp_8p5Q5GAVyeFuNNQ&usqp=CAU', invite_URL= (f'{randint(100, 10000)}'))

    server10 = Server(
         owner_id=1, name='LiveWire Gang', icon='https://pbs.twimg.com/tweet_video_thumb/D29rDOtW0AA7CJI.jpg', invite_URL= (f'{randint(100, 10000)}'))

    #channel seeds
    channel1 = Channel(
          name='Test Channel 1', server_id=1)

    channel2 = Channel(
          name='Test Channel 2', server_id=1)

    channel3 = Channel(
          name='Test Channel 3', server_id=1)

    channel4 = Channel(
          name='Test Channel 1', server_id=2)

    channel5= Channel(
          name='Test Channel 2', server_id=2)

    channel6 = Channel(
          name='Test Channel 3', server_id=2)

    channel7 = Channel(
          name='Are Dogs Eggs?', server_id=3)

    channel8 = Channel(
          name='Are Eggs Dogs?', server_id=3)

    channel9 = Channel(
          name='What the heck is going on?', server_id=3)

    channel10 = Channel(
          name='Coding Help Page', server_id=4)

    channel11 = Channel(
          name='Fun Page', server_id=4)

    channel12 = Channel(
          name='Wrong Answers Only', server_id=4)

    channel13 = Channel(
          name='Community College Horror Stories', server_id=5)

    channel14 = Channel(
          name='Are zombies real, and should I eat the beef?', server_id=5)

    channel15 = Channel(
          name='PAINTBALL WARS', server_id=5)

    channel16 = Channel(
          name='Is the earth flat?', server_id=6)

    channel17 = Channel(
          name='Do aliens exist?', server_id=6)

    channel18 = Channel(
          name='Who would win in a code off: Drew or Caleb?', server_id=6)

    channel19 = Channel(
          name='PICASSO THIS PICTURE', server_id=7)

    channel20 = Channel(
          name='Music Only Fans', server_id=7)

    channel21 = Channel(
          name='Artistically Challenged', server_id=7)

    channel22 = Channel(
          name='Twitch or Facebook?', server_id=8)

    channel23 = Channel(
          name='Hackusations ONLY', server_id=8)

    channel24 = Channel(
          name='PRO tips', server_id=8)

    channel25 = Channel(
          name='What is meta?', server_id=9)

    channel26 = Channel(
          name='Best Virtual Properties', server_id=9)

    channel27 = Channel(
          name='Spiderman is not real', server_id=9)

    channel28 = Channel(
          name='The Wolfpack', server_id=10)

    channel29 = Channel(
          name='Fun Memories', server_id=10)

    channel30 = Channel(
          name='Memes Only', server_id=10)

    #message seeds
    message1 = Message(
        message_owner_id=1, channel_id=16, content="I've come to the conclusion that the world is flat.")

    message2 = Message(
        message_owner_id=2, channel_id=16, content="What? We've known the world is round for thousands of years!")

    message3 = Message(
        message_owner_id=3, channel_id=16, content="True! Eratosthenes calculated the Earth's circumference around the second century B.C.")

    message4 = Message(
        message_owner_id=3, channel_id=7, content="I need more protein in my diet.")

    message5 = Message(
        message_owner_id=4, channel_id=16, content="What about all those images from space?!")

    message6 = Message(
        message_owner_id=5, channel_id=14, content="Yes, that's why I avoid crowds.")

    message7 = Message(
        message_owner_id=6, channel_id=14, content="They're everywhere where I work.")

    message8 = Message(
        message_owner_id=7, channel_id=14, content="Where do you work?")

    message9 = Message(
        message_owner_id=6, channel_id=14, content="DMV")

    message10 = Message(
        message_owner_id=6, channel_id=17, content="Are they out there?")

    message11 = Message(
        message_owner_id=7, channel_id=17, content="Sure, my friend was abducted just this last week.")

    message12 = Message(
        message_owner_id=8, channel_id=22, content="Twitch!!")





    #users
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(betty)
    db.session.add(craig)
    db.session.add(marty)
    db.session.add(lola)
    db.session.add(jeremy)
    db.session.add(yoshi)
    db.session.add(jett)
    db.session.add(scott)
    db.session.add(debra)
    db.session.add(destroyer)


    db.session.commit()

    #servers
    db.session.add(server1)
    db.session.add(server2)
    db.session.add(server3)
    db.session.add(server4)
    db.session.add(server5)
    db.session.add(server6)
    db.session.add(server7)
    db.session.add(server8)
    db.session.add(server9)
    db.session.add(server10)

    server1.users_many.append(demo);
    server2.users_many.append(demo);
    server3.users_many.append(marnie);
    server4.users_many.append(bobbie);
    server5.users_many.append(bobbie);
    server6.users_many.append(marnie);
    server7.users_many.append(marnie);
    server8.users_many.append(demo);
    server9.users_many.append(demo);
    server10.users_many.append(demo);

    db.session.commit()


    #channels
    db.session.add(channel1)
    db.session.add(channel2)
    db.session.add(channel3)
    db.session.add(channel4)
    db.session.add(channel5)
    db.session.add(channel6)
    db.session.add(channel7)
    db.session.add(channel8)
    db.session.add(channel9)
    db.session.add(channel10)
    db.session.add(channel11)
    db.session.add(channel12)
    db.session.add(channel13)
    db.session.add(channel14)
    db.session.add(channel15)
    db.session.add(channel16)
    db.session.add(channel17)
    db.session.add(channel18)
    db.session.add(channel19)
    db.session.add(channel20)
    db.session.add(channel21)
    db.session.add(channel22)
    db.session.add(channel23)
    db.session.add(channel24)
    db.session.add(channel25)
    db.session.add(channel26)
    db.session.add(channel27)
    db.session.add(channel28)
    db.session.add(channel29)
    db.session.add(channel30)

    db.session.commit()

    #messages
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


    # user appends

#     marnie.servers.append(server1)

    db.session.commit();


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_all():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE servers RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE channels RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE messages RESTART IDENTITY CASCADE;')
    db.session.commit()
