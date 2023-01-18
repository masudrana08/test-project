import MyButton from "../MyButton/MyButton";
import MyModal from "../MyModal/MyModal";
import { productsI } from "../Products/Products";
export default function ProductCard({ product }: { product: productsI }) {
  return (
    <MyModal description={product.description}>
      <div className="myProduct">
        <div className="imgCont">
          <img src={product.image} alt={product.name + " image "} />
        </div>
        <div className="textCont">
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
          </div>
          <div>
            <div className="title">{product.name}</div>
            <div className="sec2">
              <p>{product.category}</p>
              <div>
                <p>{product.size}</p>
              </div>
              <div>
                <p>Brand: {product.brand}</p>
              </div>
              <div>
                <p>Price: {product.price}</p>
              </div>
              <div>
                <p>Year: {product.year}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
            <MyButton btnName="Delete"/>
        </div>
      </div>
    </MyModal>
  );
}
