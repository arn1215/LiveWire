from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
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


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
