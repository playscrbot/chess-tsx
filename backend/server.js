const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Chess Server is running');
});

// Socket.io setup
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle socket events here
    socket.on('move', (data) => {
        // Broadcast the move to other players
        socket.broadcast.emit('move', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});