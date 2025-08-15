# 2048 Game Backend

This is the backend API for the 2048 game, built with Node.js, Express, and MongoDB. It provides user authentication, game state saving/loading, and score management.

## Features

- User registration, login, and password update
- JWT-based authentication
- Save/load game state per user
- Track and manage user scores
- RESTful API documented with Swagger

## Project Structure

```
controllers/      # Route handlers for user, game, score
middleware/       # Authentication middleware
models/           # Mongoose models (User, Game, Score)
routes/           # Express route definitions
server.js         # Entry point
swagger.js        # Swagger API docs setup
.env              # Environment variables
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

```sh
npm install
```

### Environment Variables

Create a [`.env`](.env) file with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Server

```sh
node server.js
```

## API Documentation

Swagger UI is available at:  
`/api-docs`

## Main Endpoints

- **User**
  - `POST /api/users/register` — Register new user
  - `POST /api/users/login` — Login
  - `PUT /api/users/password` — Update password (auth required)
- **Game**
  - `GET /api/game` — Get saved game (auth required)
  - `POST /api/game` — Save game (auth required)
- **Score**
  - `POST /api/score` — Save score (auth required)
  - `GET /api/score` — Get user scores (auth required)
  - `GET /api/score/best` — Get best score (auth required)
  - `DELETE /api/score/:id` — Delete score (auth required)

---

For more details, see [`server.js`](server.js), [`swagger.js`](swagger.js), and route/controller/model files.
