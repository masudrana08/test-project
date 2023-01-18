import './products.css'
import p from "../../assets/products.json"
import {useContext} from 'react'
import { MyContext } from '../../App';
import MyModal from '../MyModal/MyModal';
import ProductCard from '../ProductCard/ProductCard';

 export interface productsI {
  name: string,
  image: string,
  category: string,
  brand: string,
  size: string,
  price: string,
  year: string,
  description:string
}

export default function Products() {
  const {category, year, search} = useContext(MyContext)

  const products:productsI[] = p;
  const filtered = products.filter((item)=>{
    let matchCategory = true;
    let matchYear = true;
    let matchSearch = true;
    if(category){
      matchCategory = item.category === category;
    }
    if(year){
      matchYear = item.year === year;
    }
    if(search){
      matchSearch = item.name.toLowerCase().includes(search.toLowerCase())
    }
    return matchCategory && matchYear && matchSearch
  })

    
  return (
    <div className='productCont'>
        {
          filtered.map((product, i)=>{
            return (
              <ProductCard key={i} product={product} />
            )
          })
        }
    </div>
  )
}
