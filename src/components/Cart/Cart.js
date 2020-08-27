import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;

    console.log(cart)
    const totalPrice = cart.reduce((sum, course) => sum + course.price,0)
    return (
        <div className=" p-4 bg-info text-white">
            <h3>Total Course : {cart.length}</h3>
            <h4>Total Price : {totalPrice}</h4>
        </div>
    );
};

export default Cart;



