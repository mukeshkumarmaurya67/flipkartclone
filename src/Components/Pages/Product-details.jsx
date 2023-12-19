import React, { useContext } from "react";
import Header from "../Home Components/Header";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { globalContext } from "../../App";






const ProductDetails = () => {
  let data = useContext(globalContext);
  let addcls = (event) => {
    let x = document.getElementById("main-img");
    for (const i of document.querySelectorAll(".img-box")) {
      i.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    x.src = event.target.src;
  };
  return (
    <>
      <Header />
      {data.map((e, index) => {
        return (
          <div className="page-details-wrapper">
            <div className="container">
              <div className="row mb-2">
                <div className="col-lg-4 ">
                  <div className="page-details-img-section bg-white card" key={index}>
                    <div className="main-image-section-box" >
                      <img
                        id="main-img"
                        src={require(`../Images/Products/${e.image[0]}`)}
                      />
                    </div>
                    <div className="image-list">
                      {e.image.map((e, index) => {
                        return (
                          <div
                            key={index}
                            onClick={addcls}
                            className={index === 0 ? "img-box active" : "img-box"}
                          >
                            <img src={require(`../Images/Products/${e}`)} />
                          </div>
                        );
                      })}
                    </div>




                  </div>
                  <div className="buy-cart-btn-group">
                    <a href="" className="btns btn-yellow">Add to cart</a>
                    <a href="" className="btns btn-red">buy now</a>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="product-details-section">
                    <div className="product-details-section-part">
                      <h3 className="product-name">{e.name}</h3>
                      <p className="product-price sm-title mb-1">
                        <CurrencyRupeeIcon />
                        {" "}
                        <del className="sm-para">{e.price}</del>{" "}
                        {e.price - (e.price * 15) / 100}{" "}
                      </p>
                      <div className="">
                        <p className="some-bank-offer md-title">Available offers</p>
                      </div>

                    </div>
                    <div className="product-details-section-part">
                      <h2 className="products-details-type title">
                        Product Description:
                      </h2>
                      <p className="desc sm-para">{e.description}</p>
                    </div>
                    <div className="product-details-section-part">
                      <h2 className="products-details-type title">
                        Specifications
                      </h2>
                      <p className="spescific sm-title">
                        Power Source:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.powersource}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Model number:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.modelnumber}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Brand:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.brand}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Color:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.color}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Operating System:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.operatingsystem}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Storage:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.storage}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Ram:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.ram}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Bluetooth Support:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.bluetoothsupport}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Bluetooth Version:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.bluetoothversion}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Music Player:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.musicplayer}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Audio Format:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.audioformats}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Video Format:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.videoformats}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Power Capacity:{" "}
                        <span className="specific-value sm-para">
                          {e.specification.batterycapacity}
                        </span>
                      </p>
                    </div>
                    <div className="product-details-section-part">
                      <h2 className="products-details-type title">Dimensions</h2>
                      <p className="spescific sm-title">
                        Width:
                        <span className="specific-value sm-para">
                          {e.dimension.Width}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Height:
                        <span className="specific-value sm-para">
                          {e.dimension.Height}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Depth:
                        <span className="specific-value sm-para">
                          {e.dimension.Depth}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Weight:
                        <span className="specific-value sm-para">
                          {e.dimension.Weight}
                        </span>
                      </p>
                    </div>
                    <div className="product-details-section-part">
                      <h2 className="products-details-type title">Warranty</h2>
                      <p className="spescific sm-title">
                        Warranty Summary:
                        <span className="specific-value sm-para">
                          {e.warranty.Warrantysummary}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Warranty Service Type:
                        <span className="specific-value sm-para">
                          {e.warranty.Warrantyservicetype}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Covered Warranty:
                        <span className="specific-value sm-para">
                          {e.warranty.Coveredwarranty}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Domestic Warranty:
                        <span className="specific-value sm-para">
                          {e.warranty.domesticwarranty}
                        </span>
                      </p>
                      <p className="spescific sm-title">
                        Not Covered In Warranty:
                        <span className="specific-value sm-para">
                          {e.warranty.notwarranty}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ProductDetails;
{
  /* <img src={require(`../Images/Products/${e.image[0]}`)}/> */
}