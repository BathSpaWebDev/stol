import './ProductCard.css'
// import {useState} from "react";

export const ProductCard = ({imageUrl, portfolioLink, authorName, productName, productPrice, productStock}) => {
  // const [count, setCount] = useState(0)
    return (
      <div className="product-card"  onClick={() => {
        // setCount(count + 1)
        console.log(productName);
        }}
        >
          <div className="product">
            <span className="product-thumbnail">
              <img src={imageUrl} alt={productName} loading="lazy"/>
              <p className="photo-credit">photo: <a href={portfolioLink}>{authorName}</a></p>
            </span>
            <span className="price-tag">
              <h2>{productName}</h2>
              {(productStock < 10 && productStock !== 0) && <h2 className="stock-alert">Only {productStock} in stock</h2>}
              {productStock < 1 && <h2 className="stock-alert">Out of stock</h2>}
              <h2>£{productPrice}</h2>
            </span>
          </div>
      </div>
    )
}



