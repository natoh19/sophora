from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  first_name = db.Column(db.String(255))
  last_name = db.Column(db.String(255))
  hashed_password = db.Column(db.String(255), nullable = False)

  orders = db.relationship("Order", back_populates="users")
  loves = db.relationship("Love", back_populates="users")


  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "email": self.email,
      "loves": {love.product_id: love.product_id for love in self.loves}

    }
