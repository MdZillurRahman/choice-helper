import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // const {product, handleAddToCart} = props;
    const { name, img, id, price } = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <h1>Id: {id}</h1>
                <p className='product-name'>Name: {name}</p>
                <p>Price: ${price}</p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;