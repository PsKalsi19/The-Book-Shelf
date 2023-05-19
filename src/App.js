
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mockman from "mockman-js";
import Products from "./components/Products"

function App() {
  return (
   <>
 
   <div>
     <nav>
      <Navbar/>
     </nav>
     <main>
      <Products/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="mocks" element={<Mockman/>}/>
       </Routes>
     </main>
   </div>
   </>

    
  );
}

export default App;
