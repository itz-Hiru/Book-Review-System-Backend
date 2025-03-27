# 📚✨ Book Review System Backend ✨📚
🚀 A powerful and scalable backend for managing book reviews, built using **Node.js**, **Express**, **MongoDB**, and **CORS**.

---

## 🎨 Features  
✅ **User Authentication** – Secure signup & login system  
✅ **Book Management** – Add, edit, and delete book entries  
✅ **Review System** – Users can leave ratings & reviews  
✅ **MongoDB Integration** – Efficient NoSQL database storage  
✅ **CORS Support** – Secure cross-origin requests  
✅ **RESTful API** – Well-structured endpoints  

---

## 🛠️ Tech Stack  
🔹 **Backend**: Node.js, Express.js  
🔹 **Database**: MongoDB
🔹 **Security**: CORS, Helmet, Bcrypt  
🔹 **Documentation**: Swagger / Postman  

---

## 🚀 Installation & Setup  
```bash
# Clone the repository
git clone https://github.com/itz-Hiru/Book-Review-System-Backend.git

# Navigate to project folder
cd Book-Review-System-Backend

# Install dependencies
npm install

# Configure environment variables (`.env` file)
MONGODB_URL=your-mongodb-url
PORT=your-port

# Start the server
npm start
```
The backend will be running on **http://localhost:3000** (or your specified port).

---

## 🌐 API Endpoints  
📌 **User Routes**  
- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – User login  

📌 **Book Routes**  
- `GET /api/books` – Fetch all books  
- `POST /api/books` – Add a new book  
- `PUT /api/books/:id` – Update book details  
- `DELETE /api/books/:id` – Remove a book  

📌 **Review Routes**  
- `GET /api/reviews/:bookId` – Get reviews for a book  
- `POST /api/reviews` – Submit a review  

---

## 🛡 Security & Best Practices  
🔹 **Use Environment Variables** to store sensitive information  
🔹 **Enable Input Validation** to prevent SQL/NoSQL injections  
🔹 **Implement Rate Limiting** to avoid abuse  
🔹 **Enable CORS Policies** for secure cross-origin requests  

---

## 📜 License  
📖 MIT License – Free to use and modify  

🚀 **Contribute & Star ⭐ this project!**  
