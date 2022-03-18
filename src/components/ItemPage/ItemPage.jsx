import React from 'react'
import './ItemPage.css'
import database from '../../db.json'
import { Button } from '../Button/Button'
import { useParams } from "react-router-dom";
import { StockAlert } from '../StockAlert/StockAlert';

export const ItemPage = () => {
  // Resets scroll position
  window.scrollTo(0,0);

  let {name} = useParams();
  name = name.replace('-', ' ');


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
          <p className='description'>{productDescription}</p>
          <Button text='Add to basket'/>
        </span>
      </div>
    </div>
  )
}
