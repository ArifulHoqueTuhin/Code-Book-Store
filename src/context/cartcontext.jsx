

import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    // function addToCart(product){
    //     const updatedList = state.cartList.concat(product);
    //     const updatedTotal = state.total + product.price;

    //     dispatch({
    //         type: "ADD_TO_CART",
    //         payload: {
    //             products: updatedList,
    //             total: updatedTotal
    //         }
    //     })
    // }


    function addToCart(product) {
        const existingProduct = state.cartList.find(item => item.productId === product.productId);
        let updatedList, updatedTotal;

        if (existingProduct) {
            updatedList = state.cartList.map(item =>
                item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
            );
            updatedTotal = state.total + product.price;
        } else {
            updatedList = [...state.cartList, { ...product, quantity: 1 }];
            updatedTotal = state.total + product.price;
        }

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }

    // function removeFromCart(product){
    //     const updatedList = state.cartList.filter(item => item.productId !== product.productId);
    //     const updatedTotal = state.total - product.price;

    //     dispatch({
    //         type: "REMOVE_FROM_CART",
    //         payload: {
    //             products: updatedList,
    //             total: updatedTotal
    //         }
    //     })
    // }


    function removeFromCart(product) {
        const updatedList = state.cartList.filter(item => item.productId !== product.productId);
        const updatedTotal = state.total - (product.price * product.quantity);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }


    function increaseQuantity(productId) {
        const updatedList = state.cartList.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        const updatedTotal = state.total + state.cartList.find(item => item.productId === productId).price;

        dispatch({
            type: "INCREASE_QUANTITY",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }


    function decreaseQuantity(productId) {
        const existingProduct = state.cartList.find(item => item.productId === productId);

        if (!existingProduct || existingProduct.quantity <= 1) {
            return removeFromCart(existingProduct);
        }

        const updatedList = state.cartList.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
        const updatedTotal = state.total - existingProduct.price;

        dispatch({
            type: "DECREASE_QUANTITY",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }

    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}


/*
function addToCart(product) {
        const existingProduct = state.cartList.find(item => item.productId === product.productId);
        let updatedList, updatedTotal;

        if (existingProduct) {
            updatedList = state.cartList.map(item =>
                item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
            );
            updatedTotal = state.total + product.price;
        } else {
            updatedList = [...state.cartList, { ...product, quantity: 1 }];
            updatedTotal = state.total + product.price;
        }

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }

    function removeFromCart(product) {
        const updatedList = state.cartList.filter(item => item.productId !== product.productId);
        const updatedTotal = state.total - (product.price * product.quantity);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }

    function increaseQuantity(productId) {
        const updatedList = state.cartList.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        const updatedTotal = state.total + state.cartList.find(item => item.productId === productId).price;

        dispatch({
            type: "INCREASE_QUANTITY",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }

    function decreaseQuantity(productId) {
        const existingProduct = state.cartList.find(item => item.productId === productId);

        if (!existingProduct || existingProduct.quantity <= 1) {
            return removeFromCart(existingProduct);
        }

        const updatedList = state.cartList.map(item =>
            item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
        const updatedTotal = state.total - existingProduct.price;

        dispatch({
            type: "DECREASE_QUANTITY",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        });
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
};

*/