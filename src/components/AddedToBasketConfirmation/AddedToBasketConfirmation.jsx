import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'

export const AddedToBasketConfirmation = () => {
  return (
    <div className='added-to-basket'>
      <button>Modal close</button>
      <h2>Added to basket</h2>
      <div className="basket-summary">
        <img src=""></img>
        <p>Item Name</p>
      </div>
      <p>Subtotal (112 items)  £43,090</p>
      <Button />
      <Link >Continue shopping</Link>
    </div>
  )
}
