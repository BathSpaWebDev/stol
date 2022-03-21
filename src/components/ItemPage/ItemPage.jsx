import React from 'react'
import './ItemPage.css'
import database from '../../db.json'
import { Button } from '../Button/Button'
import { useParams } from "react-router-dom";
import { StockAlert } from '../StockAlert/StockAlert';
import { useContext } from 'react';
import { BasketContext } from '../../BasketContext';
import { Link } from 'react-router-dom';

export const ItemPage = () => {
  const {cart, setCart} = useContext(BasketContext);
  console.log(JSON.stringify(cart))

  const onAdd = (productId) => {  
  const exist = cart.find(x => x.id === productId); //takes id of product and checks if it exists in basket
    if(exist) {
      setCart(cart.map(x => x.id === productId ? {...exist, quantity: exist.quantity + 1 } : x))
    } else {
      const id = productId;
      setCart([...cart, {...{id}, quantity: 1}])
    }
  }

    // Resets scroll position
    window.scrollTo(0,0);
    //Url 
    let {name} = useParams();
    name = name.replace('-', ' ');

  const clickHandler = () => {
    onAdd(productId);
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
  const productId=product.id;

  return (
    <div className='item-page' key={productName}>
      <p className='bread-crumbs'><Link to={"/"} >Home</Link> / {productName}</p>
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
          <h3 className='price-tag'>£{Math.floor(productPrice)}</h3>
          <p className='description'>{productDescription}</p>
          {productStock > 0 && <Button text='Add to basket' action={clickHandler} />}
        </span>
      </div>
    </div>
  )
}
