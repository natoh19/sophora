from .db import db


class Love(db.Model):
    __tablename__ = 'loves'

    id = db.Column(db.Integer, primary_key=True)
    product_id=db.Column(db.Integer, db.ForeignKey("products.id"))
    user_id=db.Column(db.Integer, db.ForeignKey("users.id"))


    products = db.relationship("Product", back_populates="loves")
    users = db.relationship("User", back_populates="loves")

    def to_dict(self):
        return {
            "id": self.id,
            "sku": self.sku,
            "name": self.name,
            "categoryId": self.category_id,
            "image_url": self.image_url,
            "description": self.description,
            "price": self.regular_price,
            "quantity": self.quantity,
        }
