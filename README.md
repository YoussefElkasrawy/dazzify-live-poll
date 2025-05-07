# Dazzify Live Poll Wall 🎯

A modern, real-time survey wall for booth visitors at RiseUp Summit. Built with Node.js, Express, Socket.io, and MongoDB, featuring a beautiful glassmorphic UI and seamless real-time updates.

![Live Poll Demo](demo.gif)

## ✨ Features

- **Two-part Survey System**
  - Basic questions for all visitors
  - Specialized questions for employees
  - Smooth transition between sections

- **Real-time Updates**
  - Live vote percentage updates
  - Instant response visualization
  - Smooth animations and transitions

- **Modern UI/UX**
  - Glassmorphic design elements
  - Responsive layout for all devices
  - Beautiful gradients and animations
  - High contrast mode support
  - Reduced motion preferences

- **Smart Session Management**
  - Session-based vote tracking
  - Prevention of duplicate votes
  - Secure session handling

- **Data Management**
  - MongoDB data storage
  - Real-time data aggregation
  - Efficient data querying

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dazzify-live-poll
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
PORT=3000
NODE_ENV=development
```

4. Start the application:
```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start
```

The application will be available at `http://localhost:3000` (or your specified port).

## 📁 Project Structure

```
dazzify-live-poll/
├── app.js              # Main application file
├── config/
│   └── db.js          # Database configuration
├── models/
│   └── Aggregate.js   # MongoDB schema
├── public/
│   ├── styles.css     # Modern stylesheet
│   └── scripts.js     # Client-side logic
├── routes/
│   ├── index.js       # Main routes
│   └── employee.js    # Employee routes
├── sockets/
│   └── pollSocket.js  # Socket.io handlers
├── views/
│   ├── index.ejs      # Part 1 questions
│   ├── employee.ejs   # Part 2 questions
│   └── thankyou.ejs   # Thank you page
├── package.json
└── README.md
```

## 🎮 Usage

### User Flow

1. **Basic Questions**
   - Users start at the main page (`/`)
   - Answer a series of basic questions
   - Real-time percentage updates

2. **Employee Section**
   - If identified as an employee:
     - Proceed to Part 2 questions
     - Access to specialized questions
   - If not an employee:
     - Redirected to thank you page

3. **Thank You Page**
   - Confirmation of submission
   - Beautiful animation
   - Session completion

### Features in Detail

- **Real-time Updates**
  - Socket.io powered live updates
  - Smooth percentage animations
  - Instant response feedback

- **Responsive Design**
  - Mobile-first approach
  - Tablet and desktop optimization
  - Touch-friendly interface

- **Accessibility**
  - High contrast mode support
  - Reduced motion preferences
  - Keyboard navigation
  - Screen reader friendly

## 🛠️ Technologies

- **Backend**
  - Node.js + Express
  - Socket.io for real-time features
  - MongoDB for data storage
  - Express-session for session management

- **Frontend**
  - EJS for templating
  - Modern CSS (Grid/Flexbox)
  - CSS Variables
  - Glassmorphism effects
  - Smooth animations

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint
```

### Code Style

- ESLint configuration
- Prettier formatting
- Consistent code style

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1440px and up)

## 🔒 Security

- Session-based authentication
- Secure cookie handling
- Environment variable protection
- Input validation
- XSS protection

## 📈 Performance

- Optimized database queries
- Efficient real-time updates
- Minimal bundle size
- Fast page loads
- Smooth animations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- RiseUp Summit team
- All contributors
- Open source community 