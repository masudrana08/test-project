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
                  <img src={product.image}/>
                </div>
                <div className="textCont">
                  <div className='profile'>
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu_xXlTuUsQq8VY3z29czWIMq3uc-jFYg9bU5GZJ=s68-c-k-c0x00ffffff-no-rj" alt="" />
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
