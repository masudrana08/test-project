import './products.css'
import {useContext} from 'react'
import { MyContext } from '../../App';
import ProductCard from '../ProductCard/ProductCard';

 export interface productsI {
  id: number,
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
  const {category, year, search, products} = useContext(MyContext)

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
