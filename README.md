![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) ![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

# Welcome to Sophora!

### Live Link: [Sophora](https://thriftee.herokuapp.com/)
_Sophora_ is inspired by the beauty products web site [Sephora](https://www.sephora.com/) and built for educational purposes.

Users can browse, add items to their cart, add items to their wishlist and checkout products. User carts persist after leaving the site and upon return by storing their cart items in local storage and in the Redux store. Users can remove items from their wish list and from their cart as well as update the quantity of items in their cart before checkout. Some features are limited to logged in users only. These include the wishlist feature as well as the My Account page and checkout. On site messaging has been added to inform the user as to which features remain restricted until signup and login.

![](giphy.gif)

## Technologies
### Frontend
- Javascript
- React / Redux
- [Material-UI](https://material-ui.com)
- Heroku

### Backend
- Python
- Flask
- PostgreSQL
- SQLAlchemy

## Key Features
- User authentication and password hashing
- CSRF attack protection
- Local storage to persist cart data
- API to fetch from relational database (PostgreSQL - SQLAlchemy)
- Redux to store session user, products, user likes and orders

## Database Schema
![Database Schema](https://res.cloudinary.com/dse6ebwba/image/upload/v1623548616/sophoraDB_mjjmvl.png)

#### Backend Routes

## Auth

`/auth/login`
- *POST* - Creates an existing user session (`/login`)

`/auth/logout`
- *DELETE* - Deletes the current user session (`/login`)

`/auth/sign-up`
- *POST* - Creates a new user session (`/sign-up`)


## Users

 `/users/:id`
- *GET* - Retrieves a user's profile
- *PUT* - Updates a user's profile details
- *DELETE* - Deletes a user account


## Products

 `/products`
- *GET* - Retrieves all products from store


 `/products/:id`
- *GET* - Retrieves a specific product


## Categories

`/categories/:category_id`
- *GET* - Retrieves all items within a category


## Orders

 `/orders/`
- *POST* - Creates a new order for a user
- *GET* - Gets all orders


# Likes

 `/loves/`
- *POST* - Creates a new order for a user
- *GET* - Creates a new order for a user

`/loves/:id`
- *DELETE* - Deletes a like

### Frontend Routes

 `/`
This page displays selections of products available from the store with product name, price, and image

`/about`
This page displays developer's information

`/checkout`
This page displays form to fill out shipping address and payment fields

`/confirmation`
This page displays a summary of the user's cart before proceeding to checkout

`/category/:id`
This page displays all products in a particular category. Categories will be:
    1. Make-up
    2. Skin-care
    3. Fragrance
    4. Haircare

`/thank-you`
Upon a successful checkout the user will be redirected to a thank you page confirming their order and their order number generated in the database.

`/profile/MyAccount`
This page will display user's account details including name, email, password
