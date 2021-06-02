# Users Modal

### Sign Up
* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
     * When I'm on the sign-up modal:
         * I would like to be able to enter my email, and preferred password on a clearly laid out form.
          * I would like the website to log me in upon successful completion of the sign-up form.
            * So that I can seamlessly access the site's functionality.
   * When I enter invalid data on the sign-up form:
      * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * I would like to attempt to sign up again without needing to refill the form fields I entered valid data into.

### Log In
* As a registered user, I want to be able to log in to the website via a log-in form.
   * When I'm on the login modal:
      * I would like to be able to enter my email and password on a clearly laid out form.
      * I would like the website to log me in upon successful completion of the login form.
         * So that I can seamlessly access the site's functionality.
   * When I enter invalid data on the log-in form:
      * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
         * So that I can try again without needing to refill forms I entered valid data into.

### Log Out
* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
   * While on any page of the site:
      * I can log out of my account and be redirected to the homepage `/`.
          * So that I can easily log out to keep my information secure.



# Product Listing

### View items for sale
*  As a logged in _or_ unregistered user, I want the ability to view items for sale on the website
  * When I'm on the `/` page:
    * I can browse and click on the different categories to view the category and the items on that page.



# Searching for item/s
*  As a logged in _or_ unregistered user, I want the ability to look for a category of beauty product
  * When I'm on any page:
    * I can use the nav bar or search bar to find a particular item.
      * When navigation bar to choose a category of product I will be sent to a page with results.

### Adding an item(s) to the cart
* As a logged in _or_ unregistered user, I want the ability to add items to my cart and update quantity
  * When I'm on the `/checkout` page:
    * I can confirm the details of my order before entering my credit card details



# Checkout

### View Checkout
* As a logged in _or_ guest user, I want the ability to view items in my cart
  * When I'm on the `/checkout` page:
    * I can view the contents of the cart showing item name, price, quantity, sub total, total
    * I can be redirected to secure payment processing using Stripe

### Removing/Updating Items
* As a logged in _or_ unregistered user, I want the ability to remove a(n) item(s) in my cart
  * When I'm on the `/checkout` page:
    * I can use the - button to remove a given item if I choose

### Persisted Cart
* As a logged in _or_ unregistered user, the site to retain my items throughout my visit and upon return to the site
  * When I return to the site:
    * I can view my previous cart and its items

### Thank You Page
* When I'm on the `/thank-you` page:
  * Upon successful purchase, the user will be redirected to a confirmation page. "Thank you for purchasing."



# Loves

### View loved/liked items
* As a logged in user, I want the ability to view my liked items on My Profile page
  * When I'm on the `/wishlist` page:
    * I can return to the single item product page
    * I can add those items to my cart using an Add to Cart button

### Add to wishlist
* As a logged in user, I want the ability to add a specific item into my loved/liked items
  * When I'm on any product page:
    * I can click on the heart button to add an item to my loved/liked list
