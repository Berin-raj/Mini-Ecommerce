# 🛍️ Mini E-commerce Website (MERN Stack)

This is a **Mini E-commerce Website** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.
It showcases essential e-commerce features like product listing, cart management, and order checkout, designed to provide a smooth shopping experience.

---

## 🚀 Features

* Product listing with details
* Add/remove items from cart
* Real-time cart updates
* Checkout process simulation
* Responsive and mobile-friendly UI
* RESTful API for products and orders

---

## 🛠️ Tech Stack

**Frontend:** React.js, HTML5, CSS3, Bootstrap/Tailwind
**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose ODM)
**Tools & Platform:** Git, GitHub, VS Code, Postman

---

## 📂 Project Structure

```
mini-ecommerce/
│
├── frontend/          # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       └── pages/
│
├── backend/           # Node.js + Express backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── config/
│
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/mini-ecommerce.git
   cd mini-ecommerce
   ```

2. **Install dependencies:**

   * Frontend:

     ```bash
     cd frontend
     npm install
     ```

   * Backend:

     ```bash
     cd ../backend
     npm install
     ```

3. **Configure Environment Variables**
   Create a `.env` file in the `backend/` directory:

   ```env
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   JWT_SECRET=your-secret-key
   ```

4. **Run the application:**

   * Start backend:

     node app

   * Start frontend:

     ```bash
     npm start
     ```

---

## 🔗 API Endpoints

**Products API**

* `GET /api/products` → Fetch all products
* `GET /api/products/:id` → Fetch single product

**Orders API**

* `POST /api/orders` → Create new order

---

## 📸 Screenshots

*Add UI screenshots here for better presentation.*

---

## 🔮 Future Enhancements

* JWT-based user authentication
* Payment gateway integration (Stripe/PayPal)
* Admin dashboard for product & order management

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Berin Raj**
Final Year Information Technology Engineering Student

* Full Stack Web Developer (MERN)
* Projects: Mini E-commerce Website, UI Path RPA Dispatcher, Real-Time Traffic Sign Detection (OpenCV)
