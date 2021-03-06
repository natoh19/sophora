from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    message="User already exists"
    # print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError(message)



class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    first_name=StringField('first_name')
    last_name=StringField('last_name')
