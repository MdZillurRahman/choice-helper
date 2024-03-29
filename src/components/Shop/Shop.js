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

        const chooseOne = () => {
           const num = Math.floor(Math.random()*cart.length);
           alert (cart[num].name);
        }

        const chooseAgain = () =>{
            const again = [];
            setCart(again);
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
                    cart.map(cart=><OrderSummary 
                        key={cart.id}
                        cart={cart}
                        ></OrderSummary>)
                }
                
                <button onClick={chooseOne}> CHOOSE 1 FOR ME</button>
                <br />
                <button onClick={chooseAgain}> Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;