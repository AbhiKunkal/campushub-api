# 🎓 CampusHub API

CampusHub API is a RESTful backend built using **Node.js**, **Express**, and **MongoDB** to manage campus events, participants, and feedback. It serves as the backend for a campus event management platform where students can register for events and submit feedback.

---

## 📦 Features

- 🔐 User Authentication (JWT-based)
- 📅 Event Management (CRUD)
- 👥 Participant Registration & Management
- 📝 Feedback Submission with Ratings
- 📊 Admin Stats Dashboard

---

## 📁 Folder Structure

```
campushub-api/
│
├── models/             # Mongoose models (Event, Participant, Feedback)
├── routes/             # Express route handlers
├── controllers/        # Controller logic for routes
├── middleware/         # Custom middlewares (e.g., auth)
├── .env                # Environment variables
├── server.js           # Entry point
└── README.md           # Project documentation
```

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **JWT** for authentication
- **PowerShell** / Postman for testing

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Installation

```bash
git clone https://github.com/AbhiKunkal/campushub-api.git
cd campushub-api
npm install
```

### Environment Setup

Create a `.env` file and add:

```env
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

### Run the Server

```bash
npm start
```

---

## 📬 API Endpoints

### 👤 Participants

- `POST /api/participants` – Register a new participant
- `GET /api/participants` – Get all participants
- `GET /api/participants/:id` – Get one participant
- `PUT /api/participants/:id` – Update participant
- `DELETE /api/participants/:id` – Remove participant

### 📅 Events

- `POST /api/events`
- `GET /api/events`
- etc.

### 📝 Feedbacks

- `POST /api/feedbacks`
- `GET /api/feedbacks`
- `PUT /api/feedbacks/:id`

### 📊 Stats

- `GET /api/stats/summary` – Dashboard summary for admin

---

## 🔒 Authentication

All protected routes require a valid JWT token in headers:

```
Authorization: Bearer <your_token>
```

---

## 🛠 Future Improvements

- Admin dashboard with UI (React/Next.js)
- Email notifications
- Upload event images with Cloudinary
- Pagination & Search

---

## 🙌 Contributing

Feel free to fork this repo, make improvements, and raise PRs. Let's build something awesome for the campus community!

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 👤 Author

**Abhishek Kumar**  
[GitHub: AbhiKunkal](https://github.com/AbhiKunkal)
