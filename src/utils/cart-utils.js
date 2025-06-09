const isBrowser = typeof window !== 'undefined';

const cart = isBrowser ? JSON.parse(localStorage.getItem('cart')) : []

export const getCart = () => {
    // Return the cart from localStorage or an empty array if not found
    return cart;
}

export const addProductToCart = (product) => {
    if (typeof window === 'undefined') return [];

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        // Update quantity if product exists
        const updatedCart = cart.map((item, index) => {
            if (index === existingProductIndex) {
                return { ...item, quantity: (item.quantity || 1) + 1 };
            }
            return item;
        });

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
    }

    // If product doesn't exist, add it
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
};


export const removeProductFromCart = (productId) => {
    let updatedCart = cart.filter(item => item.id !== productId);
    isBrowser && localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
}

export const incrementCartItemQuantity = (productId) => {
    let updatedCart = cart.map(item => {
        if (item.id === productId) {
            return { ...item, quantity: (item.quantity || 1) + 1 };
        }
        return item;
    });
    isBrowser && localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
}

export const decrementCartItemQuantity = (productId) => {
    let updatedCart = cart.map(item => {
        if (item.id === productId) {
            return { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) };
        }
        return item;
    }).filter(item => item.quantity > 0); // Remove items with zero quantity
    isBrowser && localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
}
