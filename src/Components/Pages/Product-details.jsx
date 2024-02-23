import React, { useEffect, useState } from "react";
import Header from "../Home Components/Header";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { globalContext } from "../../App";
import { useParams } from "react-router-dom";
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
            xy ='<div className="product-details-section-part"><h2 className="products-details-type title">hello world</h2></div>';

            for (let i in servers[item]) {
               // console.log(i)
               // console.log(servers[item][i])
            yz = '<p className="spescific sm-title">${i}:<span className="specific-value sm-para">${servers[item][i]}</span></p>';
            // console.log(servers.item[i]) 
            }
            vx = xy + yz+ " </div>";
          }
        }
      //   console.log(vx)
      });
  };
  // console.log(data)
  useEffect(() => {
    fetchData();
  },[id]);
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
                  {/* <img id="main-img" alt="" src={require(`../Images/Products/${data.image[0]}`)} />
                   */}
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



       {
         Object.keys(data).map((e,index)=>
           typeof data[e] == "object" && e !== "image" && e !== "filter"  ? <div className="product-details-section-part"><h2 className="products-details-type title">{e}</h2>
           
          {data[e]? Object.keys(data[e]).map((x,index)=> <p className="spescific md-title"><span className="spescific-type">{x}</span><span className="specific-value sm-para">{data[e][x]}</span></p> ): "not comming" }
               
        
     
           
           </div>:""
 
         )
       }
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
{
  /* <img src={require(`../Images/Products/${data.image[0]}`)}/> */
}
/*// 
<div className="product-details-section-part">
   // 
   <h2 className="products-details-type title">
      //   Specifications
      // 
   </h2>
   // 
   <p className="spescific sm-title">
      //   Power Source:
      //   <span className="specific-value sm-para">
      //     {data.specification.powersource}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Model number:
      //   <span className="specific-value sm-para">
      //     {data.specification.modelnumber}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Brand:
      //   <span className="specific-value sm-para">
      //     {data.specification.brand}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Color:
      //   <span className="specific-value sm-para">
      //     {data.specification.color}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Operating System:
      //   <span className="specific-value sm-para">
      //     {data.specification.operatingsystem}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Storage:
      //   <span className="specific-value sm-para">
      //     {data.specification.storage}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Ram:
      //   <span className="specific-value sm-para">
      //     {data.specification.ram}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Bluetooth Support:
      //   <span className="specific-value sm-para">
      //     {data.specification.bluetoothsupport}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Bluetooth Version:
      //   <span className="specific-value sm-para">
      //     {data.specification.bluetoothversion}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Music Player:
      //   <span className="specific-value sm-para">
      //     {data.specification.musicplayer}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Audio Format:
      //   <span className="specific-value sm-para">
      //     {data.specification.audioformats}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Video Format:
      //   <span className="specific-value sm-para">
      //     {data.specification.videoformats}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Power Capacity:
      //   <span className="specific-value sm-para">
      //     {data.specification.batterycapacity}
      //   </span>
      // 
   </p>
   // 
</div>
// 
<div className="product-details-section-part">
   // 
   <h2 className="products-details-type title">Dimensions</h2>
   // 
   <p className="spescific sm-title">
      //   Width:
      //   <span className="specific-value sm-para">
      //     {data.dimension.Width}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Height:
      //   <span className="specific-value sm-para">
      //     {data.dimension.Height}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Depth:
      //   <span className="specific-value sm-para">
      //     {data.dimension.Depth}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Weight:
      //   <span className="specific-value sm-para">
      //     {data.dimension.Weight}
      //   </span>
      // 
   </p>
   // 
</div>
// 
<div className="product-details-section-part">
   // 
   <h2 className="products-details-type title">Warranty</h2>
   // 
   <p className="spescific sm-title">
      //   Warranty Summary:
      //   <span className="specific-value sm-para">
      //     {data.warranty.Warrantysummary}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Warranty Service Type:
      //   <span className="specific-value sm-para">
      //     {data.warranty.Warrantyservicetype}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Covered Warranty:
      //   <span className="specific-value sm-para">
      //     {data.warranty.Coveredwarranty}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Domestic Warranty:
      //   <span className="specific-value sm-para">
      //     {data.warranty.domesticwarranty}
      //   </span>
      // 
   </p>
   // 
   <p className="spescific sm-title">
      //   Not Covered In Warranty:
      //   <span className="specific-value sm-para">
      //     {data.warranty.notwarranty}
      //   </span>
      // 
   </p>
   // 
</div>*/
