const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({ 
        status: "OK" 
    });
});

app.get("/api/message", (req, res) => {
    res.json({ 
        message: "Hello from the backend API, bitch!" 
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: 'Internal server error'})
});

app.listen(3000, () => {
    console.log("Backend API is running on port 3000");
});