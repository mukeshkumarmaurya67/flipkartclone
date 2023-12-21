import React, { createContext, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profilepage from "./Components/Pages/Profilepage";
import ProductDetails from "./Components/Pages/Product-details";
import SeprateCategoryPage from "./Components/Pages/SeprateCategoryPage";
import Cart from "./Components/Pages/Cart";
import Paymentpage from "./Components/Pages/Paymentpage";
import ViewAllPage from "./Components/Pages/ViewAllPage";






let globalContext = createContext();

const App = () => {

    let x=document.querySelector("body").classList.contains("light-mode");
    if(x==true){
        require('././Components/Scss/style.css');
    } 

    else{
       require('././Components/Scss/dark-style.css');
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
    }, [0])
    
    return (
        <>
            <globalContext.Provider value={data}>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/profile" element={<Profilepage />}></Route>
                    <Route
                        exact
                        path="/product-details"
                        element={<ProductDetails />}
                    ></Route>
                    <Route
                        exact
                        path="/seprate-category"
                        element={<SeprateCategoryPage />}
                    ></Route>
                    <Route
                        exact
                        path="/seprate-category"
                        element={<SeprateCategoryPage />}
                    ></Route>
                    <Route exact path="/cart" element={<Cart />}></Route>
                    <Route exact path="/payment" element={<Paymentpage />}></Route>
                    <Route exact path="/viewallpage" element={<ViewAllPage />}></Route>
                </Routes>
            </HashRouter>
        </globalContext.Provider>
        </>
    )
}

export default App;
export { globalContext };
