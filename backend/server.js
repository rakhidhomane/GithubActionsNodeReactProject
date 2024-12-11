// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Calculator Operations
app.post('/api/add', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a + b });
});

app.post('/api/subtract', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a - b });
});

app.post('/api/multiply', (req, res) => {
    const { a, b } = req.body;
    res.json({ result: a * b });
});

app.post('/api/divide', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) return res.status(400).json({ error: 'Division by zero' });
    res.json({ result: a / b });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
