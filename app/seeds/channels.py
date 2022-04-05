from app.models import db, Channel

def seed_channels():
    demo1 = Channel(
          name='Test Channel 1', server_id=1)

    demo2 = Channel(
          name='Test Channel 2', server_id=1)

    demo3 = Channel(
          name='Test Channel 3', server_id=1)

    demo4 = Channel(
          name='Test Channel 1', server_id=2)

    demo5= Channel(
          name='Test Channel 2', server_id=2)

    demo6 = Channel(
          name='Test Channel 3', server_id=2)

    demo7 = Channel(
          name='Are Dogs Eggs?', server_id=3)

    demo8 = Channel(
          name='Are Eggs Dogs?', server_id=3)

    demo9 = Channel(
          name='What the heck is going on?', server_id=3)

    demo10 = Channel(
          name='Coding Help Page', server_id=4)

    demo11 = Channel(
          name='Fun Page', server_id=4)

    demo12 = Channel(
          name='Wrong Answers Only', server_id=4)

    demo13 = Channel(
          name='Community College Horror Stories', server_id=5)

    demo14 = Channel(
          name='Are zombies real, and should I eat the beef?', server_id=5)

    demo15 = Channel(
          name='PAINTBALL WARS', server_id=5)

    demo16 = Channel(
          name='Is the earth flat?', server_id=6)

    demo17 = Channel(
          name='Do aliens exist?', server_id=6)

    demo18 = Channel(
          name='Who would win in a code off: Drew or Caleb?', server_id=6)

    demo19 = Channel(
          name='PICASSO THIS PICTURE', server_id=7)

    demo20 = Channel(
          name='Music Only Fans', server_id=7)

    demo21 = Channel(
          name='Artistically Challenged', server_id=7)

    demo22 = Channel(
          name='Twitch or Facebook?', server_id=8)

    demo23 = Channel(
          name='Hackusations ONLY', server_id=8)

    demo24 = Channel(
          name='PRO tips', server_id=8)

    demo25 = Channel(
          name='What is meta?', server_id=9)

    demo26 = Channel(
          name='Best Virtual Properties', server_id=9)

    demo27 = Channel(
          name='Spiderman is not real', server_id=9)

    demo28 = Channel(
          name='The Wolfpack', server_id=10)

    demo29 = Channel(
          name='Fun Memories', server_id=10)

    demo30 = Channel(
          name='Memes Only', server_id=10)



    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.add(demo11)
    db.session.add(demo12)
    db.session.add(demo13)
    db.session.add(demo14)
    db.session.add(demo15)
    db.session.add(demo16)
    db.session.add(demo17)
    db.session.add(demo18)
    db.session.add(demo19)
    db.session.add(demo20)
    db.session.add(demo21)
    db.session.add(demo22)
    db.session.add(demo23)
    db.session.add(demo24)
    db.session.add(demo25)
    db.session.add(demo26)
    db.session.add(demo27)
    db.session.add(demo28)
    db.session.add(demo29)
    db.session.add(demo30)

    db.session.commit()



def undo_channels():
    db.session.execute('TRUNCATE servers RESTART IDENTITY CASCADE;')
    db.session.commit()
