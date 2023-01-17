import Products from "../Products/Products"
import Sidebar from "../Sidebar/Sidebar"
import "./layout.css"

export default function Layout() {
  return (
    <div className="layoutCont">
        <div className="left">
            <Sidebar />
        </div>
        <div className="right">
            <Products />
        </div>
    </div>
  )
}
