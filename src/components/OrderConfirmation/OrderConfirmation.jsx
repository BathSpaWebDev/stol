import React from 'react'
import './OrderConfirmation..css'
import { Link } from 'react-router-dom'

export const OrderConfirmation = () => {
  return (
    <div className="order-confirmation">
          <h1>Thank you for your order.</h1>
          <Link to={'/'} ><p className='center'>Keep shopping</p></Link>
    </div>

  )
}
