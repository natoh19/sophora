from app.models import db, Category

def seed_categories():

    makeup = Category(type="Makeup")

    skincare = Category(type="Skincare")

    fragrance = Category(type="Fragrance")

    bathandbody = Category(type="Bath and Body")

    haircare = Category(type="Haircare")


    db.session.add(makeup)
    db.session.add(skincare)
    db.session.add(fragrance)
    db.session.add(haircare)
    db.session.add(bathandbody)
    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
