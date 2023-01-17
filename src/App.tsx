import Home from './pages/Home/Home';
import { createContext, useState } from "react";
interface createContextI{
  test: string,
  setTest: (msg:string) => void; 
}
export const MyContext = createContext<createContextI>({
  test: "",
  setTest: (msg) => {}
});


function App() {
  const [test, setTest] = useState<string>("oops")
  const value = {
    test, setTest
  }
  return (
    <MyContext.Provider value={value}>
      <Home />
    </MyContext.Provider>
  );
}

export default App;
