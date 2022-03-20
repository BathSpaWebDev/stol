import React from 'react'
import { CheckoutTableRow } from '../CheckoutTableRow/CheckoutTableRow';
import './Checkout.css'
import { Button } from '../Button/Button';

export const Checkout = (props) => {
  const {basketItems} = props;


  return (
    
    <div className='checkout'>
 
    <h1>Checkout</h1>
    <div className="checkout-table">
      {Object.keys(basketItems).length === 0  && <h2>Basket is empty</h2>}
      {/* <div className='checkout-table-row'>
      <h2>Product</h2>
      <h2>Unit price</h2>
      <h2>Quantity</h2>
      <h2>Total</h2>
      </div> */}
      <CheckoutTableRow basketItems={basketItems}/>
      <Button text="Buy now" />
    </div>
    </div>
    
  )
}