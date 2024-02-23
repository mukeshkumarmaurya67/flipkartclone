import React, { createContext, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profilepage from "./Components/Pages/Profilepage";
import ProductDetails from "./Components/Pages/Product-details";
import SeprateCategoryPage from "./Components/Pages/SeprateCategoryPage";
import Cart from "./Components/Pages/Cart";
import Paymentpage from "./Components/Pages/Paymentpage";
import ViewAllPage from "./Components/Pages/ViewAllPage";
import Chatboat from "./Components/Home Components/Chatboat";
import Contactus from "./Components/Pages/Contactus";
import Header from "./Components/Home Components/Header";
import Thankyou from "./Components/Pages/Thankyou";
let globalContext = createContext();


// import '../src/Components/Scss/'
const App = () => {
  // import("././Components/Scss/dark-style.css");


let [dkmode,setDkmode]=useState(false)

  // let x = document.querySelector("body").classList.contains("dark-mode");
  // if (dkmode) {
   
  // }
  
  
  
  
  
  
  // else {

    import("././Components/Scss/style.css");
  // }




function updateDkmode(){
  setDkmode(!dkmode);
}





  let [data, setData] = useState([]);
  let fetchData = () => {
    fetch("http://localhost:10001/product")
      .then((r) => r.json())
      .then((server) => {
        setData(server);
      });
  };
  useEffect(() => {
    fetchData();
  }, [0]);
  


  return (
    <>
  
      <globalContext.Provider value={data}>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home  dkmode={updateDkmode} />}></Route>
            <Route exact path="/profile" element={<Profilepage />}></Route>
            <Route
              exact
              path="/product-details/:id"
              element={<ProductDetails />}
            ></Route>
            <Route
              exact
              path="/seprate-category"
              element={<SeprateCategoryPage />}
            ></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
            <Route exact path="/payment" element={<Paymentpage />}></Route>
            <Route exact path="/viewallpage" element={<ViewAllPage />}></Route>
            <Route exact path="/contactus" element={<Contactus />}></Route>
            <Route exact path="/thankyou" element={<Thankyou />}></Route>


          </Routes>
        </HashRouter>
      </globalContext.Provider>
      <div className="chat">
      
        <Chatboat />
      </div>
    </>
  );
};
export default App;
export { globalContext };
