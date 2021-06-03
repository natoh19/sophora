from .db import db

class Category(db.Model):
    __tablename__ = 'categories'

    category_id= db.Column(db.Integer, primary_key=True)
    type= db.Column(db.String)

    products = db.relationship("Product", back_populates="categories")

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.name,
            "products": [product.to_dict() for product in self.products],
            "loves": []
        }
