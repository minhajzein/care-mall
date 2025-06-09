const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    }, reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
        incrementItemQuantity: (state, action) => {
            state.items = state.items.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item);
            state.totalQuantity += 1;
            state.totalPrice += action.payload.discountPrice || action.payload.price;
        },
        decrementItemQuantity: (state,action) => {
            state.items = state.items.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item);
            state.totalQuantity -= 1;
            state.totalPrice -= action.payload.discountPrice || action.payload.price;
        },
        setCart: (state, action) => {
            state.items = action.payload.items || [];
            state.totalQuantity = action.payload.totalQuantity || 0;
            state.totalPrice = action.payload.totalPrice || 0;
        },
        deleteCartItem: (state, action) => {
            const filteredItems = state.items.filter(item => item.id !== action.payload.id);
            state.items = filteredItems;
            state.totalQuantity = filteredItems.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = filteredItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
    }
})

export const { addToCart, clearCart, setCart, deleteCartItem, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;