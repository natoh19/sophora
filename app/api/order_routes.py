from flask import Blueprint, jsonify, request
import json
from flask_login import login_required
import os
import stripe



order_routes = Blueprint('orders', __name__, url_prefix = '/api/orders')


# stripe.api_key = "sk_test_51Iws9eDTZpv1JDZFVUGIXMqSgrj6K2nX0Sbyx2lOMhLH7Blqa4n4urGqZN9dlsbdFr8luyaB5OEANPTWZOc9u29400RY1xSzkQ"
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')


def calculate_order_amount(items):
    # Replace this constant with a calculation of the order's amount
    # Calculate the order total on the server to prevent
    # people from directly manipulating the amount on the client
    return 1400
@order_routes.route('/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        print(request.get_json())
        data = request.get_json()
        intent = stripe.PaymentIntent.create(
            amount=calculate_order_amount(data['items']),
            currency='usd'
        )
        return jsonify({
          'clientSecret': intent['client_secret']
        })
    except Exception as e:
        return jsonify(error=str(e)), 403


@order_routes.route('/webhook', methods=['POST'])
def webhook():
    event = None
    payload = request.data
    try:
        event = json.loads(payload)
    except:
        print('⚠️  Webhook error while parsing basic request.' + str(e))
        return jsonify(success=False)
    # Handle the event
    if event and event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']  # contains a stripe.PaymentIntent
        print('Payment for {} succeeded'.format(payment_intent['amount']))
        # Then define and call a method to handle the successful payment intent.
        print(event)
        # handle_payment_intent_succeeded(payment_intent)
    elif event['type'] == 'payment_method.attached':
        payment_method = event['data']['object']  # contains a stripe.PaymentMethod
        # Then define and call a method to handle the successful attachment of a PaymentMethod.
        # handle_payment_method_attached(payment_method)
    else:
        # Unexpected event type
        print('Unhandled event type {}'.format(event['type']))
    return jsonify(success=True)
