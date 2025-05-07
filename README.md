# Dazzify Live Poll Wall

A real-time survey wall for booth visitors at RiseUp Summit, built with Node.js, Express, Socket.io, and MongoDB.

## Features

- Two-part survey system (Basic and Employee questions)
- Real-time vote percentage updates
- Session-based vote tracking
- Modern, responsive UI
- MongoDB data storage

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd dazzify-live-poll
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
PORT=3000
```

4. Start the application:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The application will be available at `http://localhost:3000` (or the port specified in your .env file).

## Project Structure

```
dazzify-live-poll/
├── app.js              # Main application file
├── models/
│   └── Aggregate.js    # MongoDB schema
├── public/
│   └── styles.css      # Stylesheet
├── views/
│   ├── index.ejs       # Part 1 questions
│   ├── employee.ejs    # Part 2 questions
│   └── thankyou.ejs    # Thank you page
├── package.json
└── README.md
```

## Usage

1. Users start at the main page (`/`) with basic questions
2. After answering all basic questions:
   - If they identify as an employee, they proceed to Part 2
   - Otherwise, they see the thank you page
3. Employee questions are only accessible to those who identified as employees
4. All votes are recorded in real-time with percentage updates

## Technologies Used

- Node.js + Express
- Socket.io for real-time updates
- MongoDB for data storage
- EJS for templating
- Express-session for session management
- Modern CSS (Grid/Flexbox)

## License

MIT 