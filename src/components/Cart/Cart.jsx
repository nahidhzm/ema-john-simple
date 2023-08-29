import React from 'react';
import './Cart.css';

const Cart = ({cart}) => { // option 3
    // const Cart = (props) => { option 1,2
    // 1st option
    // const cart = props.cart;
    // distructring way alternative option
    // const {cart} = props;
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){

        // normal way
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // alternative shortcut way
        product.quantity = product.quantity || 1; 
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Cart summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button>Clear Cart</button>
            <button>Review Order</button>
        </div>
    );
};

export default Cart;