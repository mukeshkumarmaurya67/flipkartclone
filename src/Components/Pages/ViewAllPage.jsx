import React, { useContext, useEffect, useState } from "react";
import Header from "../Home Components/Header";
import { globalContext } from "../../App";
import Category from "../Home Components/Category";
import SeprateCategoryPage from "./SeprateCategoryPage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import ProductPagination from "../Context/Pagination/ProductPagination";

const ViewAllPage = () => {
   let data = useContext(globalContext);

   let addToCart = (addedItem) => {
      var url = "  http://localhost:10001/cartproducts";
      var postData = {
         headers: { "Content-Type": "application/json" },
         method: "POST",
         body: JSON.stringify(addedItem),
      };
      fetch(url, postData)
         .then((response) => response.json())
         .then((tempfile) => {
            // getProduct();
         });
      hideAlert();
   };

   function hideAlert() {
      let x = document.querySelector("#alert-section");

      x.classList.add("d-block");

      setTimeout(() => {
         x.classList.remove("d-block");
      }, 500);
   }
   return (
      <>
         <Header />
         <section className="viewall-wrapper">
            <div className="viewall-section">
               <div className="container">
                  <div className="row">
                     {/* <div className="col-12">
                        <ProductPagination />
                     </div> */}
                     <div className="col-lg-2">
                        <div className="viewall-l-section box">
                           <div className="filter-section">
                              <div className="d-flex justify-content-between align-items-center">
                                 <span className="filter-section-title title">Filter</span>
                                 <a href="javascript:void(0)" className="clrall">
                                    Clear all
                                 </a>
                              </div>
                              <form action="">
                                 <div className="box">
                                    {/* Price Filter  */}
                                    <div
                                       className="d-flex justify-content-between align-items-center mb-2 mt-2 "
                                       data-bs-toggle="collapse"
                                       data-bs-target="#price"
                                    >
                                       <span className="md-title">Price</span>
                                       <span className="dropdown-toggle"></span>
                                    </div>
                                    <div className="collapse show" id="price">
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">All</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Below - 2000</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Below - 5000 </span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">5001 To 10000</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Upto 20000</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Upto 50000</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">50000 & More</span>
                                       </div>
                                    </div>

                                    {/* Brand Filter  */}
                                    <div
                                       className="d-flex justify-content-between align-items-center mb-2 mt-2 "
                                       data-bs-toggle="collapse"
                                       data-bs-target="#brand"
                                    >
                                       <span className="md-title">Brand</span>
                                       <span className="dropdown-toggle"></span>
                                    </div>
                                    <div className="collapse show" id="brand">
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">All</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Samsung</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Apple</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Lg</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Sandisk</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="brand" id="" />
                                          <span className="xs-title ms-2">Dell</span>
                                       </div>
                                    </div>

                                    {/* Color Filter  */}
                                    <div
                                       className="d-flex justify-content-between align-items-center mb-2 mt-2 "
                                       data-bs-toggle="collapse"
                                       data-bs-target="#color"
                                    >
                                       <span className="md-title">color</span>
                                       <span className="dropdown-toggle"></span>
                                    </div>
                                    <div className="collapse show" id="color">
                                       <div className="form-group">
                                          <input type="checkbox" name="color" id="" />
                                          <span className="xs-title ms-2">All</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="color" id="" />
                                          <span className="xs-title ms-2">Red</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="color" id="" />
                                          <span className="xs-title ms-2">Green</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="color" id="" />
                                          <span className="xs-title ms-2">Purple</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="color" id="" />
                                          <span className="xs-title ms-2">Orange</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="color" id="" />
                                          <span className="xs-title ms-2">Pink</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="color" id="" />
                                          <span className="xs-title ms-2">White</span>
                                       </div>
                                       <div className="form-group">
                                          <input type="checkbox" name="color" id="" />
                                          <span className="xs-title ms-2">Black</span>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-10">
                        <div className="viewall-r-section box">
                           <div className="alert-section" id="alert-section">
                              <span className="alert alert-success">Product added !</span>
                           </div>
                           <div className="all-products-section">
                              <div className="row g-3">
                                 {data.map((e) => {
                                    return (
                                       <div
                                          className="col-lg-3 col-md-4 col-sm-6"
                                          key={e.id}
                                       >
                                          <div className="card">
                                             <div className="icon-box">
                                                <FavoriteIcon className="wishlist" />
                                             </div>

                                             <div className="img-box">
                                                <Link to={`/product-details/${e.id}`}>
                                                   <img
                                                      src={require(`../Images/Products/${e.image[0]}`)}
                                                      alt={e.image[0]}
                                                   />
                                                </Link>
                                             </div>
                                             <h6 className="sm-title price">
                                                <del className="sm-para">{e.price}</del>{" "}
                                                {e.price - (e.price * 15) / 100}{" "}
                                                <span className="text-success xs-title">
                                                   15% Off
                                                </span>
                                             </h6>
                                             <p className="sm-para name">{e.name}</p>
                                             <div className="boxs">
                                                <div className="star-box sm-title">
                                                   {e.rating}
                                                   <StarIcon className="star" />
                                                </div>
                                                <span className="sm-para ps-2"> (13)</span>
                                             </div>
                                             <div className="xs-para mb-1">Free Delivery</div>
                                             <div className="btn-group">
                                                <button
                                                   className="btns btn-yellow w-50"
                                                   onClick={addToCart.bind(this, e)}
                                                >
                                                   Add To Cart
                                                </button>
                                                <button className="btns btn-red w-50">
                                                   Buy Now
                                                </button>
                                             </div>
                                          </div>
                                       </div>
                                    );
                                 })}
                              </div>



                           </div>
                        </div>


                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
export default ViewAllPage;
