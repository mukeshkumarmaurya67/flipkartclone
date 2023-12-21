import React, { useContext, useEffect, useState } from 'react';
import Header from '../Home Components/Header';
import { globalContext } from '../../App';
import Category from '../Home Components/Category';
import SeprateCategoryPage from './SeprateCategoryPage';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
const ViewAllPage = () => {
let data = useContext(globalContext);
let addToCart = (addedItem) => {
alert('added succesfully !')
var url = "  http://localhost:10001/cartproducts";
var postData = {
headers: { 'Content-Type': 'application/json' },
method: 'POST',
body: JSON.stringify(addedItem)
}
fetch(url, postData)
.then(response => response.json())
.then(tempfile => {
// getProduct();
})
}
return (
<>
<Header />
<section className="viewall-wrapper">
   <div className="viewall-section">
      <div className="container">
         <div className="row">
            <div className="col-lg-2">
               <div className="viewall-l-section box">
                  <div className="filter-section">
                     <h3 className="filter-section-title title">Filter</h3>
                  </div>
               </div>
            </div>
            <div className="col-lg-10">
               <div className="viewall-r-section box">
                  <div className="all-products-section">
                     <div className="row g-3">
                        {
                        data.map((e => {
                        return (
                        <div className="col-lg-3" key={e.id}>
                           <div className="card">
                              <div className="icon-box">
                                 <FavoriteIcon className='wishlist' />
                              </div>
                              <div className="img-box">
                                 <img src={require(`../Images/Products/${e.image[0]}`)} alt={e.image[0]} />
                              </div>
                              <h6 className="sm-title price"><del className='sm-para'>{e.price}</del>  {e.price - e.price * 15 / 100} <span className="text-success xs-title">15% Off</span></h6>
                              <p className="sm-para name">{e.name}</p>
                              <div className="boxs">
                                 <div className="star-box sm-title">
                                    3.5 
                                    <StarIcon className='star' />
                                 </div>
                                 <span className='sm-para ps-2'> (13)</span>
                              </div>
                              <div className="xs-para mb-1">Free Delivery</div>
                              <div className="btn-group">
                                 <button className="btns btn-yellow w-50" onClick={addToCart.bind(this, e)}>Add To Cart</button>
                                 <button className="btns btn-red w-50" >Buy Now</button>
                              </div>
                           </div>
                        </div>
                        )
                        }))
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div className="alert-section">
    <span className="alert alert-success">Product added !</span>
   </div>
</section>
</>
)
}
export default ViewAllPage;