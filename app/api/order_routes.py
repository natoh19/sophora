from app.api.product_routes import products
from flask import Blueprint, jsonify, request
import json
from flask_login import login_required, current_user
import os
from app.models import  db, Order, Product



order_routes = Blueprint('orders', __name__, url_prefix = '/api/orders')


@order_routes.route('/', methods=['POST'])
def create_order():
    data = request.get_json()

    productObj= [p['id'] for p in data["products"]]
    products = Product.query.filter(Product.id.in_(productObj)).all()
    totalCost = sum([p['price'] * p['qty'] for p in data['products']])
    db.session.flush()

    order = Order(user_id=data['user_id'] ,total=totalCost)
    db.session.add(order)
    db.session.commit()
    for p in products:
        order.products.append(p)
        db.session.add(p)
    db.session.commit()

    return order.to_dict()

@order_routes.route("/")
def getOrders():
    userId = current_user.id
    orders=[]
    for order in current_user.orders:
        orders.append(Order.query.get(order.user_id).to_dict())
    return jsonify(orders)
