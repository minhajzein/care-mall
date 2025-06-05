
const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

export const getCart = () => {
    // Return the cart from localStorage or an empty array if not found
    return cart;
}

export const addProductToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
        // If it exists, update the quantity
        cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    }
    let updatedCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
}

export const removeProductFromCart = (productId) => {
    let updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
}

export const updateCartItemQuantity = (productId, quantity) => {
    let updatedCart = cart.map(item => {
        if (item.id === productId) {
            return { ...item, quantity: quantity };
        }
        return item;
    }).filter(item => item.quantity > 0); // Remove items with zero quantity
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
}
