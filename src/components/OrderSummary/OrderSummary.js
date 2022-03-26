import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import './OrderSummary.css';

const OrderSummary = (props) => {
    const { name } = props.cart;
    return (
        
        <div className='orderSummary'>
            <p>{name}</p>
            <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
        </div>
    );
};

export default OrderSummary;