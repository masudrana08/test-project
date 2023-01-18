import Home from './pages/Home/Home';
import { createContext, useState } from "react";
import { productsI } from './components/Products/Products';
import p from "./assets/products.json"

interface createContextI{
  year: string,
  setYear: (msg:string) => void; 
  category: string,
  setCategory: (msg:string) => void; 
  search: string,
  setSearch: (msg:string) => void; 
  products: productsI[];
  setProducts: (p:productsI[]) => void;
}
export const MyContext = createContext<createContextI>({
  year: "",
  setYear: (msg) => {},
  category: "",
  setCategory: (msg) => {},
  search: "",
  setSearch: (msg) => {},
  products: [],
  setProducts: (arr) => {},
});


function App() {
  const prod:productsI[] = p;
  const [year, setYear] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [search, setSearch] = useState<string>("")
  const [products, setProducts] = useState<productsI[]>(prod)
  const value = {
    category, setCategory,
    year, setYear,
    search, setSearch,
    products, setProducts
  }
  return (
    <MyContext.Provider value={value}>
      <Home />
    </MyContext.Provider>
  );
}

export default App;
