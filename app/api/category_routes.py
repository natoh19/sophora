from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Category

category_routes = Blueprint('categories', __name__, url_prefix = '/api/categories')


@category_routes.route('')
def categories():
    categories = Category.query.all()
    return {"categories": [category.to_dict() for category in categories]}


@category_routes.route('/<int:id>')
def category(id):
    category = Category.query.get(id)
    return category.to_dict()

# @category_routes.route('/<int:id>/products')
# def category_products(id):
#     # category = Category.query.get(id)
#     # products = Product.query.join(Category).get(id)
#     return {"products": [product.to_dict() for product in products]}
