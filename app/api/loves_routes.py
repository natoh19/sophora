from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user, login_user
from app.models import User, Love, Product,db

loves_routes=Blueprint('loves', __name__, url_prefix = '/api/loves')



# @loves_routes.route('/', methods=['POST'])
# def create_loved():
#     lovedId = request.form['lovedId']
#     userId=current_user.id

#     new_loved_product= Love(
#         user_id=userId,
#         product_id=lovedId
#     )

#     db.session.add(new_loved_product)
#     db.session.commit()

#     return jsonify(new_loved_product.product_id)


@loves_routes.route('/')
def get_loves():
    userId=current_user.id
    loves = []
    for lovedProduct in current_user.loves:
        loves.append(Product.query.get(lovedProduct.product_id).to_dict())
    # print('++++++loves', loves)
    return jsonify(loves)
    # return loves //return type must be string.


@loves_routes.route('/', methods=['POST'])
def create_loved():
    data = request.get_json()
    user_id=current_user.id
    product_id=data['product_id']
    existingLoveCount = Love.query.filter_by(user_id=user_id,product_id=product_id).count()
    if existingLoveCount == 0:
        new_loved_product= Love(
            user_id=user_id,
            product_id=product_id
        )
        db.session.add(new_loved_product)
        db.session.commit()
        new_product = Product.query.get(new_loved_product.product_id).to_dict()
        return jsonify(new_product)
    return {'errors': ['Conflict']}, 409


@loves_routes.route('/<int:lovedId>', methods=['DELETE'])
def delete_loved_product(lovedId):
    userId=current_user.id
    loved_product= Love.query.filter_by(user_id=userId, product_id=lovedId).first()
    db.session.delete(loved_product)
    db.session.commit()
    return jsonify()

# @loves_routes.route('/<int:lovedId>', methods=['DELETE'])
# def delete_loved_product(lovedId):
#     userId=current_user.id
#     loved_product= Love.query.filter_by(user_id=userId, product_id=lovedId).first()
#     db.session.delete(loved_product)
#     db.session.commit()
