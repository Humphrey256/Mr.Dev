# Backend (Node + MongoDB)

This folder contains a Node.js backend using Express and MongoDB (via Mongoose).

## Setup

1. Install dependencies:
   npm install
2. Create environment file:
   copy .env.example .env
3. Make sure MongoDB is running locally or set `MONGODB_URI` to your MongoDB Atlas URI.
4. Start dev server:
   npm run dev

## API

- GET /api/health

Example response:

{
  "success": true,
  "message": "Backend is running",
  "timestamp": "2026-03-10T00:00:00.000Z"
}
