import React, { useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>
        {
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
        }
        , []);

        const handleAddToCart = (product) =>{
            const newCart = [...cart, product];
            setCart(newCart);
        }

        const generateRandomNumber = (cart) => {
            const randomChoice = Math.floor(Math.random());
            setRandomChoice(randomChoice);
            return ({randomChoice});
        }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                {
                    cart.map(product=><OrderSummary 
                        product={product}
                        ></OrderSummary>)
                }
                <p> is the best for you.</p>
                <button onClick={generateRandomNumber}> CHOOSE 1 FOR ME</button> <br />
                <button> Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;