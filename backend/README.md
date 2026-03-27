# Backend (Node + MongoDB)

This folder contains a Node.js backend using Express and MongoDB (via Mongoose).

## Setup

1. Install dependencies:
   npm install
2. Create environment file:
   copy .env.example .env
3. Make sure MongoDB is running locally or set `MONGODB_URI` to your MongoDB Atlas URI.
4. Set `FRONTEND_URL` to your frontend URL (for CORS), for example: `https://mr-dev-epi9.onrender.com`
5. Start dev server:
   npm run dev

For Render backend deployment, set these environment variables in your Web Service:
- `MONGODB_URI`
- `FRONTEND_URL=https://mr-dev-epi9.onrender.com`
- `NODE_ENV=production`

## API

- GET /api/health

Example response:

{
  "success": true,
  "message": "Backend is running",
  "timestamp": "2026-03-10T00:00:00.000Z"
}
