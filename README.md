# Datawise Dashboard

A responsive dashboard UI built with React and TypeScript, featuring real API integration via a local mock server.

---

## Features

- **Sidebar Navigation:** Quick access to Dashboard, Users, and Settings.
- **Dashboard View:**
  - **Bar Chart:** Visualizes activity types (e.g., login, logout) from the mock API.
  - **User Activity Table:** Lists all user activities (login, logout, etc.) with timestamps.
  - **Feedback Form:** Submit feedback (name, email, message) via POST to the mock API.
- **Users Page:** Displays a table of all users from the mock API.
- **Settings Page:** Toggle between light and dark themes.
- **Responsive Design:** Works well on desktop and mobile.

---

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the Local Mock API Server

This project uses [json-server](https://github.com/typicode/json-server) to provide a mock REST API.

1. **Start the mock server:**
   ```sh
   npm run server
   ```
   - The server will run at [http://localhost:3001](http://localhost:3001)
   - Data is served from `db.json` in the project root.

2. **Available API endpoints:**
   - `GET /users` — List all users
   - `GET /activities` — List all user activities
   - `POST /feedback` — Submit feedback

### Running the React Application

In a separate terminal:

```sh
npm start
```

- The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Assumptions Made

- **No authentication:** All dashboard features are public; no login is required.
- **Mock data:** All data is served from the local `json-server` instance.
- **Feedback:** Feedback submissions are stored in the mock server and not emailed or processed further.
- **Activity types:** The bar chart visualizes the count of each activity type (e.g., login, logout, view_page) from the activities endpoint.

---

## Libraries & Tools Used

- **React** (with TypeScript) — UI framework
- **React Router DOM** — Routing
- **Axios** — HTTP requests
- **Recharts** — Data visualization (bar chart)
- **json-server** — Local mock REST API
- **CSS Modules** — Component-level styling
- **Context API** — Theme management (light/dark mode)

---

## Customization

- To add or edit mock data, modify `db.json` and restart the mock server.
- To add new features or endpoints, update both the React code and `db.json` as needed.
