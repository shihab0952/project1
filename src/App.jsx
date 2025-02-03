import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import { useState } from "react";
import FilterData from "./pages/FilterData";
import ProuductDetail from "./pages/ProuductDetail";


const App =()=> {
  const [order, setOrder] = useState({
    products: [],
    orderNumber: "",
    shipingInformation: { address: "", city: "", zip: "" },
    totalPrice: 0,
  });
  


  return (
      <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/shop" element= {<Shop/>}></Route>
        <Route path="/cart" element= {<Cart/>}></Route>
        <Route path="/checkout" element= {<Checkout setOrder={setOrder}/>}></Route>
        <Route path="/order-confirmation" element= {<Order order={order}/>}></Route>
        <Route path="/filter-data" element= {<FilterData/>}></Route>
        <Route path="/product/:id" element= {<ProuductDetail/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
  );
};

export default App;  