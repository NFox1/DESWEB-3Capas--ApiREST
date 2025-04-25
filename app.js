// app.js
const express = require('express');
const productService = require('./productService');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/productos', (req, res) => {
    res.json(productService.listProducts());
});

app.post('/productos', (req, res) => {
    try {
        const newProduct = productService.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`API REST de productos escuchando en http://localhost:${port}`);
});