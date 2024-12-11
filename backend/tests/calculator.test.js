
// backend/tests/calculator.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importing the operations (reuse the same logic)
app.post('/api/add', (req, res) => {
    const { a, b } = req.body;  // Assuming you're sending JSON with `a` and `b`
    const result = a + b;       // Perform addition
    res.json({ result });        // Send the result back
});
app.post('/api/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = a - b;
    res.json({ result });
});

app.post('/api/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = a * b;
    res.json({ result });
});

app.post('/api/divide', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({ error: 'Division by zero' });
    }
    const result = a / b;
    res.json({ result });
});


describe('Calculator API', () => {
    it('should add two numbers', async () => {
        const res = await request(app).post('/api/add').send({ a: 5, b: 3 });
        expect(res.body.result).toBe(8);
    });

    it('should subtract two numbers', async () => {
        const res = await request(app).post('/api/subtract').send({ a: 5, b: 3 });
        expect(res.body.result).toBe(2);
    });

    it('should multiply two numbers', async () => {
        const res = await request(app).post('/api/multiply').send({ a: 5, b: 3 });
        expect(res.body.result).toBe(15);
    });

    it('should divide two numbers', async () => {
        const res = await request(app).post('/api/divide').send({ a: 6, b: 3 });
        expect(res.body.result).toBe(2);
    });

    it('should return error for division by zero', async () => {
        const res = await request(app).post('/api/divide').send({ a: 5, b: 0 });
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Division by zero');
    });
});
