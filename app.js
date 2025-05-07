require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('path');
const connectDB = require('./config/db');
const indexRoutes = require('./routes/index');
const employeeRoutes = require('./routes/employee');
const pollSocket = require('./sockets/pollSocket');

const app = express();

let server
if (process.env.NODE_ENV === 'production') {
    server = require('http').createServer(
        {
            key: fs.readFileSync(`/etc/letsencrypt/live/poll.${Config.API_DOMAIN}/privkey.pem`),
            cert: fs.readFileSync(
                `/etc/letsencrypt/live/poll.${Config.API_DOMAIN}/fullchain.pem`,
            ),
        },
        app,
    );
} else {
    server = require('http').createServer(app);
}

const io = require('socket.io')(server);

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

app.use('/', indexRoutes);
app.use('/employee', employeeRoutes);

pollSocket(io);

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 