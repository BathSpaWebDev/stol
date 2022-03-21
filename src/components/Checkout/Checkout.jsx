import React from 'react'
import { CheckoutTableRow } from '../CheckoutTableRow/CheckoutTableRow';
import './Checkout.css'
import { Button } from '../Button/Button';
import { useContext } from 'react';
import { BasketContext } from '../../BasketContext';
import { Link } from 'react-router-dom';

export const Checkout = (props) => {
  // const {basketItems} = props;
  const {cart, setCart} = useContext(BasketContext);

  //Check if basket is empty
const emptyBasket = (Object.keys(cart).length === 0)


const placeOrder = () => {
  setCart([]);
}

  return (
    <div className='checkout'>
      {!emptyBasket && <p className='bread-crumbs'><Link to={-1} >Go back</Link></p>}
    <h1>Checkout</h1>
    <div className="checkout-table">
      {emptyBasket &&
      <div className="center">
      <h2>Your basket is empty.</h2>
      <Link to={"/"}>Click here to add something!</Link>
      </div>}
      <CheckoutTableRow basketItems={cart}/>
      {/* {!emptyBasket && <p>Total: {cart[0].id}</p>} */}
      {!emptyBasket && <Link to={`/success/`} ><Button text="Buy now" action={placeOrder} /></Link>}
    </div>
    </div>
    
  )
}