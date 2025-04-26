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

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Gestión de Productos</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1, h2 { text-align: center; }
                form { width: 300px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; }
                label { display: block; margin-bottom: 5px; }
                input[type="text"], input[type="number"], button { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 3px; box-sizing: border-box; }
                button { background-color: #4CAF50; color: white; border: none; cursor: pointer; }
                button:hover { background-color: #45a049; }
                #product-list { margin-top: 20px; border: 1px solid #eee; padding: 10px; border-radius: 5px; }
                #product-list h3 { margin-top: 0; }
                table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <h1>Gestión de Productos</h1>

            <h2>Agregar Nuevo Producto</h2>
            <form action="/productos" method="POST">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required>

                <label for="price">Precio:</label>
                <input type="number" id="price" name="price" step="0.01" required>

                <button type="submit">Crear Producto</button>
            </form>

            <div id="product-list">
                <h3>Lista de Productos</h3>
                <table id="products-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        </tbody>
                </table>
            </div>

            <script>
                async function fetchProducts() {
                    try {
                        const response = await fetch('/productos');
                        if (!response.ok) {
                            throw new Error(\`HTTP error! status: \${response.status}\`);
                        }
                        const products = await response.json();
                        const tableBody = document.querySelector('#products-table tbody');
                        tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar los productos

                        products.forEach(product => {
                            const row = tableBody.insertRow();
                            const idCell = row.insertCell();
                            const nameCell = row.insertCell();
                            const priceCell = row.insertCell();

                            idCell.textContent = product.id;
                            nameCell.textContent = product.name;
                            priceCell.textContent = \`$\${product.price.toFixed(2)}\`;
                        });
                    } catch (error) {
                        console.error('Error al obtener los productos:', error);
                        const productListDiv = document.getElementById('product-list');
                        productListDiv.innerHTML = '<p>Error al cargar la lista de productos.</p>';
                    }
                }

                // Cargar los productos cuando la página se carga
                window.onload = fetchProducts;
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`API REST de productos escuchando en http://localhost:${port}`);
});