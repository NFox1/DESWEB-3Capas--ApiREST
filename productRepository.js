// productRepository.js
let products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 699.99 }
];

let nextId = products.length + 1;

module.exports = {
    getAllProducts: () => products,
    addProduct: (product) => {
        const newProduct = {
            id: nextId++,
            name: product.name,
            price: parseFloat(product.price)
        };
        products.push(newProduct);
        return newProduct;
    }
};