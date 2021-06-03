from .db import db


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.category_id"))
    image_url = db.Column(db.String(255))
    description = db.Column(db.String(255))
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)


    orders = db.relationship("Order", back_populates="products")
    categories = db.relationship("Category", back_populates="products")
    loves = db.relationship("Love", back_populates="products")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "categoryId": self.categoryId,
            "image_url": self.image_url,
            "description": self.description,
            "price": self.price,
            "quantity": self.quantity,

        }
