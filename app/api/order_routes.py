from app.api.product_routes import products
from flask import Blueprint, jsonify, request
import json
from flask_login import login_required, current_user
import os
from app.models import  db, Order, Product, Payment, OrderProduct



order_routes = Blueprint('orders', __name__, url_prefix = '/api/orders')


# stripe.api_key = "sk_test_51Iws9eDTZpv1JDZFVUGIXMqSgrj6K2nX0Sbyx2lOMhLH7Blqa4n4urGqZN9dlsbdFr8luyaB5OEANPTWZOc9u29400RY1xSzkQ"
# stripe.api_key = os.getenv('STRIPE_SECRET_KEY')



# @order_routes.route('/create-payment-intent', methods=['POST'])
# def create_payment():
#     try:
#         print(request.get_json())
#         data = request.get_json()
#         stripeOrder_id = data['order_id']


#         order = Order.query.get(stripeOrder_id)
#         payment = Payment(amount=order.total, currency="usd", status="INCOMPLETE", order_id=stripeOrder_id)
#         db.session.add(payment)
#         db.session.commit()
#         order.status = "PAYMENT_INTENT_CREATED"
#         order.payment_id = payment.id;
#         db.session.add(order)
#         db.session.commit()
#         return jsonify({
#           'clientSecret': intent['client_secret']
#         })
#     except Exception as e:
#         return jsonify(error=str(e)), 403

# @order_routes.route('/', methods=['PATCH'])
# def updateOrder():
#     try:
#         data = request.get_json()
#         # print('data is', data)
#         status = data['status']
#         order = Order.query.get(data['order_id'])
#         if (status == "success"):
#             order.status = "PAYMENT_SUCCESS"
#             payment = Payment.query.get(order.payment_id)
#             payment.status = "SUCCESS"
#         else:
#             order.status = "PAYMENT_FAILED"
#             payment = Payment.query.get(order.payment_id)
#             payment.status = "FAILURE"
#         db.session.add(order)
#         db.session.add(payment)
#         db.session.commit()
#         return jsonify({})
#     except Exception as e:
#         return jsonify(error=str(e)), 403


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

    order = Order(user_id=data['user_id'], currency="usd",total=totalCost)
    db.session.add(order)
    db.session.commit()
    for i in range(len(data['products'])):
        op=OrderProduct(order, products[i], data['products']['qty'][i])
        db.session.add(op)
    db.session.commit()


        # print('++++ order', order)
        # print(order.products())
        # print(order.orderProducts)
        # ordersDict = {'order': order.to_dict()}
        # print('++++++orderDict', ordersDict)
    return jsonify(order=order.to_dict())








#  user = User(
#             email=form.data['email'],
#             password=form.data['password']
#         )



# @order_routes.route('/webhook', methods=['POST'])
# def webhook():
#     event = None
#     payload = request.data
#     try:
#         event = json.loads(payload)
#         print('webhook data is', event)
#     except:
#         print('⚠️  Webhook error while parsing basic request.' + str(e))
#         return jsonify(success=False)
#     # Handle the event
#     if event and event['type'] == 'payment_intent.succeeded':
#         payment_intent = event['data']['object']  # contains a stripe.PaymentIntent
#         print('Payment for {} succeeded'.format(payment_intent['amount']))
#         # Then define and call a method to handle the successful payment intent.
#         print(event)
#         # handle_payment_intent_succeeded(payment_intent)
#     elif event['type'] == 'payment_method.attached':
#         payment_method = event['data']['object']  # contains a stripe.PaymentMethod
#         # Then define and call a method to handle the successful attachment of a PaymentMethod.
#         # handle_payment_method_attached(payment_method)
#     else:
#         # Unexpected event type
#         print('Unhandled event type {}'.format(event['type']))
#     return jsonify(success=True)
