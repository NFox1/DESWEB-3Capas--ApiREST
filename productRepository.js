// productRepository.js
let products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 }
];

module.exports = {
    getAllProducts: () => products,
    addProduct: (product) => {
        const newProduct = {
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
            name: product.name,
            price: parseFloat(product.price)
        };
        products.push(newProduct);
        return newProduct;
    }
};