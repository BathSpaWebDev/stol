import { useContext } from 'react'
import { BasketContext } from '../../BasketContext'
import database from '../../db.json'

export const TotalBasketValue = () => { // Under dev...
  const {cart} = useContext(BasketContext);
  let total = 0;

  const getProductDataById = (item) => {

    for (const product of database.results) {
      if (product.id === item.id) {
            const {productName, price, id, urls:{thumb}} = product;
            total = item.quantity * Math.floor(getProductDataById(item).price)
            return {productName, price, id, thumb};
      }
    }
  }

  for (const item of cart) {
  getProductDataById(item)
  }

  return total
}
