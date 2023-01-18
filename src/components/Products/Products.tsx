import './products.css'
import p from "../../assets/products.json"

interface productsI {
  name: string,
  image: string,
  category: string,
  brand: string,
  size: string,
  price: string,
  year: string,
}
export default function Products() {
  const products:productsI[] = p;

    
  return (
    <div className='productCont'>
        {
          products.map((product, i)=>{
            return (
              <div className="myProduct">
                <div className="imgCont">
                  <img src={product.image} alt={product.name + " image "}/>
                </div>
                <div className="textCont">
                  <div className='profile'>
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                  </div>
                  <div>
                    <div className="title">{product.name}</div>
                    <div className="sec2">
                      <p>{product.category}</p>
                      <div><p>{product.size}</p></div>
                      <div><p>Brand: {product.brand}</p></div>
                      <div><p>Price: {product.price}</p></div>
                    </div>
                  </div>
                  
                
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
