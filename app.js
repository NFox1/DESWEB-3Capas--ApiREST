// app.js
const express = require('express');
const productService = require('./productService');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para listar productos
app.get('/productos', (req, res) => {
    try {
        const products = productService.listProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Endpoint para crear un producto
app.post('/productos', (req, res) => {
    try {
        const newProduct = productService.createProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Manejo de rutas no implementadas
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint no encontrado' });
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(port, () => {
    console.log(`API REST de productos ejecutándose en http://localhost:${port}`);
});