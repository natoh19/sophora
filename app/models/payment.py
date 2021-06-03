from .db import db

class Payment(db.Model):
    __tablename__ = "payments"
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer)
    currency = db.Column(db.String)
    status = db.Column(db.String)

    orders = db.relationship("Order", back_populates="payments")

    def to_dict(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "currency": self.currency,
            "status": self.status,
        }
