import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";


function App() {

  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;