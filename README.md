# 🚗 Car Rental Platform

A full-stack Car Rental Platform built using the MERN Stack. The application allows users to browse available cars, check availability, book vehicles, and manage their bookings. Users can also become car owners, list their vehicles, manage bookings, and monitor their dashboard statistics.

---

## ✨ Features

### 👤 User Features

* User Registration & Login
* JWT Authentication
* Browse Available Cars
* View Car Details
* Check Car Availability
* Book Cars
* View Booking History
* User Profile Management

### 🚗 Owner Features

* Become a Car Owner
* Add New Cars
* Upload Car Images
* Manage Listed Cars
* Toggle Car Availability
* Delete Cars
* View Dashboard Statistics
* Manage Customer Bookings
* Update Profile Image

### 📅 Booking Features

* Date-based Availability Check
* Create Bookings
* View User Bookings
* View Owner Bookings
* Update Booking Status

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* React Hot Toast
* Motion / Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* ImageKit
* CORS
* Dotenv

---

## 📂 Project Structure

```text
CarRental/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── owner/
│   │   ├── context/
│   │   ├── pages/
│   │   │   └── owner/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

###



### 1. Setup Backend

```bash
cd server

npm install

npm run server
```

### 2. Setup Frontend

```bash
cd client

npm install

npm run dev
```

---

##

###

---

## 🚀 API Endpoints

### 👤 User Routes

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| POST   | `/api/user/register` | Register User      |
| POST   | `/api/user/login`    | Login User         |
| GET    | `/api/user/data`     | Get User Data      |
| GET    | `/api/user/cars`     | Get Available Cars |

---

### 🚗 Owner Routes

| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| POST   | `/api/owner/change-role`  | Become Owner         |
| POST   | `/api/owner/add-car`      | Add Car              |
| GET    | `/api/owner/cars`         | Get Owner Cars       |
| POST   | `/api/owner/toggle-car`   | Toggle Availability  |
| POST   | `/api/owner/delete-car`   | Delete Car           |
| GET    | `/api/owner/dashboard`    | Dashboard Statistics |
| POST   | `/api/owner/update-image` | Update Profile Image |

---

### 📅 Booking Routes

| Method | Endpoint                           | Description           |
| ------ | ---------------------------------- | --------------------- |
| POST   | `/api/bookings/check-availability` | Check Availability    |
| POST   | `/api/bookings/create`             | Create Booking        |
| GET    | `/api/bookings/user`               | User Bookings         |
| GET    | `/api/bookings/owner`              | Owner Bookings        |
| POST   | `/api/bookings/change-status`      | Change Booking Status |

---

## 🔒 Authentication

Protected routes use JWT Authentication through middleware.

Users must be logged in to:

* Access profile data
* Create bookings
* View booking history
* Become an owner
* Add/manage cars
* Access owner dashboard



---

## 🌟 Future Improvements

* Online Payment Gateway Integration
* Email Notifications
* Car Reviews & Ratings
* Google Maps Integration
* AI-based Car Recommendations
* Booking Cancellation System
* Admin Dashboard





---

## 👨‍💻 Author


---

##
