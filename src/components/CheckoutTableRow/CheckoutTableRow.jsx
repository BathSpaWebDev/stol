import React from 'react'
import database from '../../db.json'
import './CheckoutTableRow.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { BasketContext } from '../../BasketContext'

export const CheckoutTableRow = () => {
  const {cart} = useContext(BasketContext);

  const getProductDataById = (item) => {
    for (const product of database.results) {
      if (product.id === item.id) {
            const {productName, price, id, urls:{thumb}} = product;
            return {productName, price, id, thumb};
      }
    }
  }

  return (
    <div>
            {cart.map((item, key) => (
        <div className='checkout-table-row'>
        <img 
            src={getProductDataById(item).thumb}
            alt={getProductDataById(item).productName}
        />
        <span>
        <h3 key={key} >
            {/* Product: */}
            <Link to={`/product/` + getProductDataById(item).productName.replace(' ', '-')} >{getProductDataById(item).productName}</Link> 
        </h3>
        <a className='remove-item' href="/">Remove</a>
        </span>
        <h2 key={key}>
            Price: £{Math.floor(getProductDataById(item).price)}
        </h2>
        <h2 key={key}>
            Quantity: {item.quantity}
        </h2>
        <h2 key={key}>
            Subtotal: £{item.quantity * Math.floor(getProductDataById(item).price)}
        </h2>
        </div>
      ))}
    </div>
  )
}
