import './ProductCard.css'
import { Link } from "react-router-dom";
import { StockAlert } from '../StockAlert/StockAlert';

export const ProductCard = ({imageUrl, portfolioLink, authorName, productName, productPrice, productStock}) => {

    return (

    <Link to={`/product/` + productName.replace(' ', '-')} >
      <div className="product-card">
          <div className="product">
            <span className="product-thumbnail">
              <img src={imageUrl} alt={productName} loading="lazy"/>
              <p className="photo-credit">Photo: <a href={portfolioLink}>{authorName}</a></p>
            </span>
            <span className="price-tag">
              <h2>{productName}</h2>
              <StockAlert productStock={productStock}/>
              <h2>£{Math.floor(productPrice)}</h2>
            </span>
          </div>
      </div>
    </Link>
    )
}