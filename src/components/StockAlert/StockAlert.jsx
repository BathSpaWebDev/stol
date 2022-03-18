import React from 'react'
import './StockAlert.css'

export const StockAlert = ({productStock}) => {
  return (
    <>
      {(productStock < 10 && productStock !== 0) && <h2 className="stock-alert">Only {productStock} in stock</h2>}
      {productStock < 1 && <h2 className="stock-alert">Out of stock</h2>}
    </>
  )
}