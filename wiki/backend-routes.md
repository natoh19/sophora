# API Routes
This web app uses the following API routes to dynamically update the page to create a single-page app-like feel for the user for specific features.

# Auth

### `/auth/login`
- **POST** - Creates an existing user session (`/login`)

### `/auth/logout`
- **DELETE** - Deletes the current user session (`/login`)

### `/auth/sign-up`
- **POST** - Creates a new user session (`/sign-up`)


# Users

### `/users/:id`
- **GET** - Retrieves a user's profile
- **PUT** - Updates a user's profile details
- **DELETE** - Deletes a user account

### `/users/:id/loves/:id`
- **DELETE** - Deletes an item in a user's loved list
- **POST**  - Add an item to the loved list


# Products

#### `/products`
- **GET** - Retrieves all products from store


#### `/products/:id`
- **GET** - Retrieves a specific product


# Categories

#### `/categories/:category_id`
- **GET** - Retrieves all items within a category


# Orders

#### `/orders/create-checkout-session`
- **POST** - Creates a new order for a user, using Stripe for secret checkout (test mode)


# Bonus

### `/users/:id/reviews`
- **POST** - A form for registered users to review their most recent purchase
