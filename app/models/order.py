from .db import db
from sqlalchemy.ext.associationproxy import association_proxy


class OrderProduct(db.Model):
    __tablename__ = "order_products"
    id = db.Column(db.Integer, primary_key=True)
    orders_id = db.Column(db.Integer, db.ForeignKey("orders.id"))
    products_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    quantity = db.Column(db.Integer)
    products = db.relationship("Product", backref="orderProduct")
    orders = db.relationship("Order", backref="orderProduct")
    def __init__(self, order=None, product=None, quantity=None):
        self.orders.append(order)
        self.products.append(product)
        self.quantity = quantity


class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    # product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    # payment_id = db.Column(db.Integer, db.ForeignKey("payments.id"))
    # status = db.Column(db.String)
    total = db.Column(db.Integer)
    currency = db.Column(db.String)

    payments = db.relationship("Payment", back_populates="orders")
    # products = db.relationship("Product", secondary='orders_products')
    users = db.relationship("User", back_populates="orders")


    products = association_proxy('orderProducts', 'products')





    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            # "payment_id": self.payment_id,
            "total": self.total,
            "status": self.status,
            "products": self.products()
        }
