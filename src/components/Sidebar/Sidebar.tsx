import p from "../../assets/products.json"
import "./sidebar.css"

interface productsI {
  name: string,
  image: string,
  category: string,
  brand: string,
  size: string,
  price: string,
  year: string,
}
export default function Sidebar() {
  const products:productsI[] = p;
  const years:string[] = [];
  const categories:string[] = [];

  products.forEach(item=>{
    if(!years.includes(item.year)){
      years.push(item.year)
    }
    if(!categories.includes(item.category)){
      categories.push(item.category)
    }
  })
  
  
  return (
    <div className="sideCont">
      <div className="yearCont">
        <label htmlFor="years">Year: </label>
        <select name="years" id="years">
          <option value="All" >All</option>
          {
            years.map((y, i)=>{
              return <option key={i} value={y} >{y}</option>
            })
          }
        </select>
      </div>

      <div className="catCont">
        <label htmlFor="Categories">Category: </label>
        <select name="categories" id="categories">
          <option value="All" >All</option>
          {
            categories.map((c, i)=>{
              return <option key={i} value={c} >{c}</option>
            })
          }
        </select>
      </div>
      
    </div>
  )
}
