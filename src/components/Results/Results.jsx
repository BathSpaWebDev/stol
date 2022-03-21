import database from '../../db.json'
import { ProductCard } from '../ProductCard/ProductCard'
import './Results.css'


export const Results = () =>  (<>
      <h1>Chairs that hug.</h1>
      <div className="results" >
        {database.results.map((product) =>  {
          return (
            <ProductCard 
              imageUrl={product.urls.regular}
              portfolioLink={product.user.links.html}
              authorName={product.user.name}
              productName={product.productName}
              productDescription={product.description}
              productPrice={product.price}
              productStock={product.stock}
              key={product.id}
            />
          )   
        })
        }
      </div>
      </> )