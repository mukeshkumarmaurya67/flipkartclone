import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profilepage from './Components/Pages/Profilepage';
import ProductDetails from './Components/Pages/Product-details';

const App = () => {
    return (
        <>
     
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/profile' element={<Profilepage />} ></Route>
                    <Route exact path='/product-details' element={<ProductDetails />}></Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App