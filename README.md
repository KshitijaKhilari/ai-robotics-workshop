# 🤖 KidLab Academy – AI & Robotics Summer Workshop

A full-stack workshop registration platform designed for children aged **8–14 years**. The platform provides a fun, kid-friendly experience where students and parents can explore the workshop curriculum, view learning outcomes, understand the workshop journey, and register online.

## 🌐 Live Demo

### Frontend

https://ai-robotics-workshop-1.onrender.com

### Backend API

https://ai-robotics-workshop-p0g0.onrender.com

---

## 📖 About the Project

KidLab Academy is an AI & Robotics Summer Workshop platform created to introduce children to the exciting world of Artificial Intelligence, Robotics, Coding, and Innovation.

The website provides:

* Workshop information
* Learning outcomes
* Weekly learning journey
* Certificate showcase
* FAQ section
* Online registration system

All registrations are securely stored in MongoDB Atlas through a custom Express.js API.

---

## ✨ Features

### 🎨 Kid-Friendly User Interface

* Bright pastel color palette
* Interactive and engaging design
* Fully responsive layout
* Mobile-friendly experience

### 🤖 Workshop Information

* Workshop overview
* Age group details
* Duration and schedule
* Learning outcomes
* Weekly roadmap

### 📜 Certificate Showcase

* Professional certificate preview
* Workshop completion recognition

### 📝 Registration System

* Online registration form
* Form validation
* Real-time API integration
* Automatic MongoDB storage

### 🔒 Duplicate Registration Prevention

* Prevents duplicate registrations using:

  * Email Address
  * Phone Number

### ☁️ Cloud Deployment

* Frontend deployed on Render
* Backend deployed on Render
* MongoDB Atlas cloud database

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* React Hook Form
* Axios
* React Icons

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Render

---

## 📂 Project Structure

```text
AI-Robotics-Workshop
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── routes
│   ├── models
│   ├── config
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/KshitijaKhilari/ai-robotics-workshop.git
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Frontend (.env)

```env
VITE_API_URL=https://your-backend-url/api
```

---

## 🏗️ System Architecture

```text
User
  ↓
React + TypeScript Frontend
  ↓
Axios API Requests
  ↓
Express.js Backend
  ↓
MongoDB Atlas Database
```

---

## 📸 Screenshots

### Home Page

(Add screenshot)

### Workshop Journey

(Add screenshot)

### Certificate Section

(Add screenshot)

### Registration Form

(Add screenshot)

---

## 🎯 Learning Outcomes

Participants will:

* Understand AI fundamentals
* Explore robotics concepts
* Build beginner-friendly projects
* Learn problem-solving skills
* Gain hands-on experience with emerging technologies

---

## 🔮 Future Enhancements

* Admin Dashboard
* Email Notifications
* Payment Gateway Integration
* Attendance Tracking
* Student Portal
* Workshop Analytics

---

## 👩‍💻 Author

**Kshitija Khilari**

GitHub: https://github.com/KshitijaKhilari

LinkedIn: https://www.linkedin.com/in/kshitija-sandip-khilari/

---

## 📄 License

This project is developed for educational and learning purposes.
