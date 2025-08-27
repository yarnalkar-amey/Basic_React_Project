# 🚀 Simple Full-Stack Project with CORS

## 📌 Overview

This project demonstrates a basic **frontend + backend integration** where both parts are hosted on different origins (domains/ports). It highlights how to implement **Cross-Origin Resource Sharing (CORS)**, allowing the frontend to securely communicate with the backend.

The goal is to provide a minimal yet functional setup for beginners exploring **full-stack development**, API calls, and handling **CORS policies**.

---

## ⚙️ Features

* ✅ **Frontend** (React/Vanilla JS/Any framework)

  * Simple UI for making API calls.
  * Fetches and displays backend data.

* ✅ **Backend** (Node.js/Express or any backend framework)

  * Exposes REST API endpoints.
  * Configured with **CORS middleware** to allow requests from the frontend.

* ✅ **CORS Handling**

  * Demonstrates same-origin vs cross-origin requests.
  * Shows how to allow specific origins, methods, and headers.

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript (or React/Vue/Angular)
* **Backend:** Node.js + Express (or any backend framework)
* **Other:** Fetch API / Axios for requests, CORS middleware

---

## 📂 Project Structure

```bash
project-root/
│
├── backend/          # Backend server
│   ├── server.js     # Express server with CORS enabled
│   └── package.json
│
├── frontend/         # Frontend app
│   ├── index.html    # Simple UI
│   ├── app.js        # Fetches data from backend
│   └── package.json
│
└── README.md         # Documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/cors-fullstack-demo.git
cd cors-fullstack-demo
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm start
```

Backend will start on **[http://localhost:5000](http://localhost:5000)**

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install   # If using React/Vite etc.
npm start
```

Frontend will start on **[http://localhost:3000](http://localhost:3000)**

---


## 📖 Learning Goals

* Understand **CORS policies** and why browsers block cross-origin requests.
* Learn how to **enable cross-origin communication** between frontend & backend.
* Build a small but practical **end-to-end full-stack project**.

---

## 🌟 Future Enhancements

* Add authentication (JWT / OAuth).
* Use database integration (MongoDB, MySQL, etc.).
* Deploy frontend and backend to cloud platforms.

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

