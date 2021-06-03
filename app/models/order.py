from .db import db

class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    payment_id = db.Column(db.Integer, db.ForeignKey("payments.id"))
    status = db.Column(db.String)
    total = db.Column(db.Numeric)
    currency = db.Column(db.String)

    payments = db.relationship("Payment", back_populates="orders")
    products = db.relationship("Product", back_populates="orders")
    users = db.relationship("User", back_populates="orders")



    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "payment_id": self.payment_id,
            "total": self.total,
            "status": self.status,
            "products": [product.to_dict() for product in self.products]
        }
