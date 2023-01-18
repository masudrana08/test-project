import { useContext } from "react";
import { MyContext } from "../../App";
import "./myNav.css";
export default function MyNav() {
  const {setSearch} = useContext(MyContext)
  return (
    <div className="mynav">
      <input type="checkbox" id="nav-toogler" className="nav-toogler" />
      <div className='navv' >
        <label className="nav-toogler-label" htmlFor="nav-toogler">
          <span></span>
        </label>
        {/* <img src={LogoWithText} alt="Logo" /> */}
        <div className="logo">
          <h3>E-Commerce</h3>
        </div>
        <ul className='items'>
        <input type="text" placeholder="search..." onChange={(e)=>setSearch(e.target.value)}/>
      </ul>
      </div>
      
    </div>
  );
}
