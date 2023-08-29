import React from 'react';
import './Cart.css';

const Cart = ({cart}) => { // option 3
    // const Cart = (props) => { option 1,2
    // 1st option
    // const cart = props.cart;
    // distructring way alternative option
    // const {cart} = props;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h2>Cart summary</h2>
            <p>Selected Items: {cart.length}</p>
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