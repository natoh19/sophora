from .db import db

orders_products=db.Table('orders_products',
    db.Column("orders_id", db.Integer, db.ForeignKey("orders.id")),
    db.Column("products_id", db.Integer, db.ForeignKey("products.id"))
)

class OrderProduct(db.Model):
    __tablename__ ="order_products"
    id = db.Column(db.Integer, primary_key=True)
    orders_id = db.Column(db.Integer, db.ForeignKey("orders.id"))
    products_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    products= db.relationship("Product", backref="orderProduct")
    orders =db.relationship("Order", backref="orderProduct")


class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    # product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    # payment_id = db.Column(db.Integer, db.ForeignKey("payments.id"))
    status = db.Column(db.String)
    total = db.Column(db.Integer)
    currency = db.Column(db.String)

    payments = db.relationship("Payment", back_populates="orders")
    # products = db.relationship("Product", secondary='orders_products')
    users = db.relationship("User", back_populates="orders")

    def products(self):
        products = [p.orderProduct for p in self.orderProduct if p.id == self.id]
        allProducts = []
        for prod in products:
            for p in prod:
                allProducts.extend(p.orderProduct)
        return allProducts



    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            # "payment_id": self.payment_id,
            "total": self.total,
            "status": self.status,
            "products": self.products()
        }
