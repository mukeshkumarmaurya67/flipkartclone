import React, { useEffect, useState } from "react";
import Header from "../Home Components/Header";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { globalContext } from "../../App";
import { Link, useParams } from "react-router-dom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
const ProductDetails = () => {
  // let data = useContext(globalContext);
  let { id } = useParams();
  let [data, setData] = useState({
    ds: " ",
    image: [],
    specification: {},
    dimension: {},
    warranty: {},
  });
  var xy,
    yz,
    vx = "";

  let fetchData = () => {
    fetch(`http://localhost:10001/product/${id}`)
      .then((r) => r.json())
      .then((servers) => {
        setData(servers);
        for (let item in servers) {
          if (
            typeof servers[item] == "object" &&
            item !== "image" &&
            item !== "filter"
          ) {
            // console.log(item)
            // ${item}
            xy =
              '<div className="product-details-section-part"><h2 className="products-details-type title">hello world</h2></div>';

            for (let i in servers[item]) {
              // console.log(i)
              // console.log(servers[item][i])
              yz =
                '<p className="spescific sm-title">${i}:<span className="specific-value sm-para">${servers[item][i]}</span></p>';
              // console.log(servers.item[i])
            }
            vx = xy + yz + " </div>";
          }
        }
        //   console.log(vx)
      });
  };
  // console.log(data)
  useEffect(() => {
    fetchData();
  }, [id]);
  let addcls = (event) => {
    let x = document.getElementById("main-img");
    for (const i of document.querySelectorAll(".img-box")) {
      i.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    x.src = event.target.src;
  };
  const onInit = () => {
    //  console.log("lightGallery has been initialized");
  };
  return (
    <>
      <Header />
      <div className="page-details-wrapper">
        <div className="container">
          <div className="row mb-2">
            <div className="col-lg-4 ">
              <div className="page-details-img-section bg-white card">
                <div className="main-image-section-box">
                  <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                  >
                    <a
                      href={
                        data.image && data.image.length > 0
                          ? require(`../Images/Products/${data.image[0]}`)
                          : ""
                      }
                    >
                      <img
                        id="main-img"
                        alt={data.image[0]}
                        src={
                          data.image && data.image.length > 0
                            ? require(`../Images/Products/${data.image[0]}`)
                            : ""
                        }
                      />
                    </a>
                  </LightGallery>
                </div>
                <div className="image-list">
                  {data.image.map((e, index) => {
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
                <a href="" className="btns btn-yellow">
                  Add to cart
                </a>
                <a href="" className="btns btn-red">
                  buy now
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="product-details-section">
                <div className="product-details-section-part">
                  <h3 className="product-name">{data.name}</h3>
                  <p className="product-price sm-title mb-1">
                    <CurrencyRupeeIcon />
                    <del className="sm-para pe-2"> {data.price} </del>
                    {data.price - (data.price * 15) / 100}
                  </p>
                  <div className="">
                    <p className="some-bank-offer md-title">Available offers</p>
                  </div>
                </div>
                <div className="product-details-section-part">
                  <h2 className="products-details-type title">
                    Product Description:
                  </h2>
                  <p className="desc sm-para">{data.description}</p>
                </div>

                {Object.keys(data).map((e, index) =>
                  typeof data[e] == "object" &&
                  e !== "image" &&
                  e !== "filter" ? (
                    <div className="product-details-section-part">
                      <h2 className="products-details-type title">{e}</h2>

                      {data[e]
                        ? Object.keys(data[e]).map((x, index) => (
                            <p className="spescific md-title">
                              <span className="spescific-type">{x}</span>
                              <span className="specific-value sm-para">
                                {data[e][x]}
                              </span>
                            </p>
                          ))
                        : "not comming"}
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
