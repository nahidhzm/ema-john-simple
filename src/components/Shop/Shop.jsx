import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 01: get id
        for(const id in storedCart){
            // step 02: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // step 03: get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 04: add the addedproduct to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log(addedProduct);
        }
        // step 05: set the cart
        setCart(savedCart);
    } , [products])

    const handleAddToCart = (product) => {
        // cart.push(product); // normal js push
        const newcart = [...cart, product];
        // let newCart = [];
        // advanced way
        // if product dosen't exist in the cart , then set quantity = 1
        // if exist update the quantity by 1
        // const exists = cart.find(pd => pd.id === product.id);
        // if(!exists){
        //     product.quantity = 1;
        //     newCart= [...cart, product]
        // }
        // else{
        //     exists.quantity = exists.quantity + 1;
        //     const remaining = cart.filter(pd => pd.id !== product.id);
        //     newCart = [...remaining, exists];
        // }

        setCart(newcart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;