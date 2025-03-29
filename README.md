# User Profile Management API

A RESTful API for user profile management with authentication using **Express.js, MongoDB, and JWT**.

## Features
- User Registration & Login (JWT authentication)
- Profile Retrieval (Protected)
- Profile Update (Protected)
- Secure Password Storage (bcrypt)
- API Security (JWT, Helmet, CORS, Morgan)
- MongoDB for data persistence

## Tech Stack
- Backend: **Node.js, Express.js**
- Database: **MongoDB**
- Authentication: **JWT**
- Middleware: **bcryptjs, helmet, cors, dotenv, multer**

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/user-profile-api.git
cd user-profile-api

### 2. Install Dependencies
- npm install

### 3.  Set Up Environment Variables
- Create a .env file in the root and add the following:
    MONGO_URI=mongodb+srv://your_mongodb_url
    JWT_SECRET=your_jwt_secret

### Run the server
- npm start


