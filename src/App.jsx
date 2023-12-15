import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profilepage from './Components/Pages/Profilepage';
import ProductDetails from './Components/Pages/Product-details';
import SeprateCategoryPage from './Components/Pages/SeprateCategoryPage';

const App = () => {
    return (
        <>
     
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/profile' element={<Profilepage />} ></Route>
                    <Route exact path='/product-details' element={<ProductDetails />}></Route>
                    <Route exact path='/seprate-category' element={<SeprateCategoryPage />}></Route>
                    <Route exact path='/seprate-category' element={<SeprateCategoryPage />} ></Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App