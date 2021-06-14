from .db import db


orders_products = db.Table(
    "orders_products",
    db.Column("orders_id", db.Integer, db.ForeignKey("orders.id")),
    db.Column("products_id", db.Integer, db.ForeignKey("products.id"))
)

class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    total = db.Column(db.Integer)


    products = db.relationship("Product", secondary='orders_products')
    users = db.relationship("User", back_populates="orders")


    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "total": self.total,
            "products": [p.to_dict() for p in self.products]
        }
