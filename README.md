# E-commerce-addToCart-using-reactjs

This project is a React application that implements various features related to user authentication, product listing, and shopping cart functionality. Below are the key features implemented in this project:

## 1. Login Process

The login process is implemented using the [DummyJSON Auth API](https://dummyjson.com/docs/auth). Users can log in, and a token is obtained for authorization purposes.

## 2. Authorization Token Storage

Upon successful login, the obtained authorization token is saved securely for future use. This token is crucial for accessing protected routes and making authenticated API requests.

## 3. Protected Home Page

The home page is set as a protected route, allowing only logged-in users to access its content. Unauthorized users are redirected to the login page.

## 4. Product Fetching

Products are fetched from the [DummyJSON Products API](https://dummyjson.com/docs/products) and displayed on the home page.

## 5. Product Search

A search functionality is implemented on the home page, allowing users to search for products based on their names. The search is case-insensitive and dynamically updates the displayed products.

## 6. Price Filter

Users can filter products on the home page based on price ranges. This provides an easy way for users to narrow down their product selection based on their budget.

## 7. Shopping Cart

A shopping cart feature is implemented, allowing users to add products to their cart. The cart count is displayed on the top, providing users with quick access to view their selected items.

## 8. Add to Cart Button

Product cards on the home page include an "Add to Cart" button, enabling users to easily add products to their shopping cart with a single click.

## Project Setup

To run this project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

Note: Ensure you have Node.js and npm installed on your machine.

Feel free to explore the codebase and make any necessary adjustments to fit your specific requirements. Enjoy exploring the features of this React shopping application!
