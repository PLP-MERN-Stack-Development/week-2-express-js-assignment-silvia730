# 📦 Express.js Product API

This project is a RESTful API built with **Express.js** as part of the PLP MERN Stack Week 2 assignment. It provides CRUD operations for managing a list of products.

---

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **dotenv**
- **Postman** (for API testing)

---

## 📁 Project Structure

express-product-api/
├── routes/
│ └── productRoutes.js
├── middleware/
│ ├── loggerMiddleware.js
│ └── authMiddleware.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md


---

## 🌐 API Endpoints

| Method | Route                | Description            |
|--------|---------------------|------------------------|
| GET    | /api/products       | Get all products       |
| GET    | /api/products/:id   | Get a product by ID    |
| POST   | /api/products       | Create a new product   |
| PUT    | /api/products/:id   | Update a product       |
| DELETE | /api/products/:id   | Delete a product       |

---

## 🧪 Sample Requests (Postman)

### ✅ Create a Product (POST)

**POST** `http://localhost:5000/api/products`

**Body (JSON):**

```json
{
  "name": "Laptop",
  "price": 1499,
  "description": "High-end developer laptop"
}
🔍 Get All Products
GET http://localhost:5000/api/products

🛠 Update Product
PUT http://localhost:5000/api/products/:id

❌ Delete Product
DELETE http://localhost:5000/api/products/:id

🧱 Middleware Implemented
Logger Middleware: Logs each request

Auth Middleware: Simulates basic authentication

Validation Middleware: Ensures required fields are present

🚫 Error Handling
All errors are centrally handled and returned with meaningful messages and status codes.

✅ How to Run Locally
Clone the repo:


git clone https://github.com/YOUR_USERNAME/YOUR_CLASSROOM_REPO.git
cd express-product-api
Install dependencies

npm install
Create .env file:
PORT=5000
Run the server:

npm start


🙌 Author
👩🏽‍💻 Silvia Njeri

💡 PLP MERN Stack Student


