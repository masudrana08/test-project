import Home from './pages/Home/Home';
import { createContext, useState } from "react";
interface createContextI{
  year: string,
  setYear: (msg:string) => void; 
  category: string,
  setCategory: (msg:string) => void; 
  search: string,
  setSearch: (msg:string) => void; 
}
export const MyContext = createContext<createContextI>({
  year: "",
  setYear: (msg) => {},
  category: "",
  setCategory: (msg) => {},
  search: "",
  setSearch: (msg) => {},
});


function App() {
  const [year, setYear] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [search, setSearch] = useState<string>("")
  const value = {
    category, setCategory,
    year, setYear,
    search, setSearch
  }
  return (
    <MyContext.Provider value={value}>
      <Home />
    </MyContext.Provider>
  );
}

export default App;
