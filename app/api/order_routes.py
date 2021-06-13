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
        # print('++++++DATA', data)
    productObj= [p['id'] for p in data["products"]]
        # print('+++projectobj', productObj)
    products = Product.query.filter(Product.id.in_(productObj)).all()
        # print('+++++', products)
    totalCost = sum([p['price'] * p['qty'] for p in data['products']])
        # print('++++++TOTALCOST', totalCost)
        # intent = stripe.PaymentIntent.create(
        #     amount=totalCost,
        #     currency='usd'
        # )

        # print('=====INTENT', intent)
    db.session.flush()

    order = Order(user_id=data['user_id'] ,total=totalCost)
    db.session.add(order)
    db.session.commit()
    for p in products:
        # op=OrderProduct(order, products[i], data['products'][i]['qty'])
        order.products.append(p)
        db.session.add(p)
    db.session.commit()


        # print('++++ order', order)
        # print(order.products())
        # print(order.orderProducts)
        # ordersDict = {'order': order.to_dict()}
        # print('++++++orderDict', ordersDict)
    return order.to_dict()

@order_routes.route("/")
def getOrders():
    userId = current_user.id
    orders=[]
    for order in current_user.orders:
        orders.append(Order.query.get(order.user_id).to_dict())
    print('++++++++++ORDERS', orders)
    return jsonify(orders)
