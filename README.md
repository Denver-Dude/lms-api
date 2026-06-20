# LMS API

A Learning Management System (LMS) API built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication.

## Features

* User Registration
* User Login
* JWT Authentication
* Course Management (CRUD)
* Lesson Management (CRUD)
* MongoDB Atlas Integration
* Vercel Deployment

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)
* Vercel

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Run Locally

```bash
npm run dev
```

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Courses

POST /api/courses

GET /api/courses

GET /api/courses/:id

PUT /api/courses/:id

DELETE /api/courses/:id

### Lessons

POST /api/lessons

GET /api/lessons

GET /api/lessons/:id

PUT /api/lessons/:id

DELETE /api/lessons/:id

## Deployment

Deployed on Vercel.

## Author

Denver
