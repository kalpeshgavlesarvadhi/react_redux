import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cocktail from "./components/Cocktail";
import Product from "./components/Product";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/cocktail" element={<Cocktail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
