// productService.js
const productRepository = require('./productRepository');

module.exports = {
    listProducts: () => {
        return productRepository.getAllProducts();
    },

    createProduct: (productData) => {
        if (!productData.name || !productData.price) {
            throw new Error('Nombre y precio son requeridos');
        }
        if (isNaN(productData.price)) {
            throw new Error('Precio debe ser un número válido');
        }

        const price = parseFloat(productData.price);
        if (price <= 0) {
            throw new Error('Precio debe ser mayor que cero');
        }

        return productRepository.addProduct({
            name: productData.name,
            price: price
        });
    }
};