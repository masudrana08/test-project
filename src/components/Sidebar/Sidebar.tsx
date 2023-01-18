import "./sidebar.css"
import { useContext } from 'react';
import { MyContext } from "../../App";

export default function Sidebar() {
  const {setCategory, setYear, products} = useContext(MyContext);
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
        <select name="years" id="years" onChange={(e)=>setYear(e.target.value)}>
          <option value="" >All</option>
          {
            years.map((y, i)=>{
              return <option key={i} value={y} >{y}</option>
            })
          }
        </select>
      </div>

      <div className="catCont">
        <label htmlFor="Categories">Category: </label>
        <select name="categories" id="categories" onChange={(e)=>setCategory(e.target.value)}>
          <option value="" >All</option>
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
