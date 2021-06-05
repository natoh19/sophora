from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Product

product_routes = Blueprint('products', __name__, url_prefix = '/api/products')


@product_routes.route('/')
def products():
    products = Product.query.all()
    # print('----------', {"products": [product.to_dict() for product in products]})
    return {"products": [product.to_dict() for product in products]}
    # return 'Hello'


@product_routes.route('/<int:id>/')
def productSingle(id):
    product = Product.query.get(id)
    return product.to_dict()
    # return 'Hello'
