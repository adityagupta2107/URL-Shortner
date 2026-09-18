# URL Shortener

A full-stack URL shortening application with user authentication, built with a Node.js/Express backend and a React (Vite) frontend.

## Features

- 🔗 Shorten long URLs into compact, shareable links
- 🔐 User authentication (signup/login)
- 📊 Manage and track your shortened URLs
- ⚡ Fast, modern frontend built with Vite + React

## Tech Stack

**Backend**
- Node.js / Express
- MongoDB (Mongoose)
- Layered architecture: Controller → Service → DAO → Model

**Frontend**
- React (Vite)
- Axios for API requests

## Project Structure

```
URL-Shortner/
├── Backend/
│   ├── app.js
│   └── src/
│       ├── config/          # App & DB configuration
│       ├── controler/       # Route handlers (auth, short URL)
│       ├── dao/             # Data access layer
│       ├── models/          # Mongoose schemas
│       ├── route/           # Express routes
│       ├── service/         # Business logic
│       └── utils/           # Helper functions
│
├── Frontend/
│   ├── index.html
│   └── src/
│       ├── api/             # Axios API calls
│       ├── pages/           # App pages
│       ├── utils/           # Axios instance, helpers
│       ├── App.jsx
│       └── main.jsx
│
└── Notes.txt / HLD          # Project notes & high-level design
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB instance (local or cloud, e.g. MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adityagupta2107/URL-Shortner.git
   cd URL-Shortner
   ```

2. **Set up the Backend**
   ```bash
   cd Backend
   npm install
   ```
   Create a `.env` file in the `Backend` folder with your configuration, e.g.:
   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   Start the backend server:
   ```bash
   npm start
   ```

3. **Set up the Frontend**
   ```bash
   cd ../Frontend
   npm install
   npm run dev
   ```

4. **Open the app**
   Visit `http://localhost:5173` (or the port shown by Vite) in your browser.

## API Overview

| Method | Endpoint             | Description              |
|--------|-----------------------|---------------------------|
| POST   | `/api/auth/signup`    | Register a new user       |
| POST   | `/api/auth/login`     | Authenticate a user       |
| POST   | `/api/shorten`        | Create a short URL        |
| GET    | `/:shortId`            | Redirect to original URL  |

> Update this table with your actual routes and payload details.

## High-Level Design

See [`HLD`](./HLD) for the high-level design and [`Notes.txt`](./Notes.txt) for development notes.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
