from .db import db


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    brand = db.Column(db.String(255))
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.category_id"))
    image_url_main = db.Column(db.String(255))
    imageOne=db.Column(db.String(255))
    imageTwo=db.Column(db.String(255))
    imageThree=db.Column(db.String(255))
    summary = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)


    categories = db.relationship("Category", back_populates="products")
    loves = db.relationship("Love", back_populates="products")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "brand": self.brand,
            "categoryId": self.categoryId,
            "image_url_main": self.image_url_main,
            "imageOne": self.imageOne,
            "imageTwo": self.imageTwo,
            "imageThree": self.imageThree,
            "summary": self.summary,
            "description": self.description,
            "price": self.price,
            "quantity": self.quantity,

        }
