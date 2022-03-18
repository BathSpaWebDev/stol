import React from 'react'
import './ItemPage.css'
import database from '../../db.json'
import { Button } from '../Button/Button'
import { useParams } from "react-router-dom";
import { StockAlert } from '../StockAlert/StockAlert';
import { useState } from 'react';

export const ItemPage = () => {

  const [basketItems, setBasketItems] = useState([]);

  localStorage.setItem('cart', basketItems); // Saves in browser local storage

  const onAdd = (product) => {
      const exist = basketItems.find(x => x.productName === product.productName);
      if(exist) {
          setBasketItems(basketItems.map(x => x.productName === product.productName ? {...exist, quantity: exist.quantity + 1 } : x))
      } else {
          setBasketItems([...basketItems, {...product, quantity: 1}])
      }
  }


  // const {onAdd, basketItems} = props;
  var basket = [];
// console.log(basket);
    // Resets scroll position
    window.scrollTo(0,0);

    let {name} = useParams();
    name = name.replace('-', ' ');

    // const [count, setCount] = useState(0)

    const clickHandler = () => {
      basket.push({productName, productPrice})
      console.log({basketItems})
      onAdd(product);
        // Check if product exists in array 
        // if yes - add counter (initiate at 0 and ++)

console.log(`Quantity:  ${basketItems[0].quantity}`)
    }




  const getProductData = (database, name) => {
  const productsObject = database.results;

  for (const key of productsObject) {
      if (key.productName === name) {
          return(key);
      }
    }
  }

  const product = getProductData(database, name);


    const regularImageUrl= product.urls.regular;
    const portfolioLink=product.user.links.html;
    const authorName=product.user.name;
    const productName=product.productName;
    const productDescription=product.description;
    const productPrice=product.price;
    const productStock=product.stock;

  return (
    <div className='item-page' key={productName}>
      <p className='bread-crumbs'><a href="/">Home</a> / {productName}</p>
      <div className='item-view'>
        <span className='item-main-photo'>
          <img src={regularImageUrl} alt={productName} ></img>
        </span>
        <span className='item-info-panel'>
          <h1>{name}</h1>
          <h5>Photo: <a href={portfolioLink} target="_blank" rel="noreferrer">{authorName} </a></h5>
          <p className='stock-alert'>
            <StockAlert productStock={productStock} />
          </p>
          <h3 className='price-tag'>£{productPrice}</h3>
          <p className='description' onClick={clickHandler}>{productDescription}</p>
          <Button text='Add to basket' />
        </span>
      </div>
    </div>
  )
}
