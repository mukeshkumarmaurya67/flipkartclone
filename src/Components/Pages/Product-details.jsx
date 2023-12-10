import React, { useState, useEffect } from 'react'
import Header from '../Home Components/Header';
import '../Scss/pagedetails.scss';
import '../Scss/main.scss'

const ProductDetails = (props) => {

    let [data, setData] = useState([]);



    let fetchData = () => {
        fetch("http://localhost:3000/product")
            .then(r => r.json())
            .then(server => {
                setData(server);
            }
            )
    }

    useEffect(() => {
        fetchData()
    }, [0]);

    let addcls = () => {
        let x = document.querySelectorAll(".img-box");
        x.forEach(box => {
            box.classList.remove('active');
            box.classList.add('active');
        });
    }

    return (
        <>
            <Header />


            {
                data.map((e, index) => {
                    return (
                        <div className="page-details-wrapper">
                            <div className="container row">
                                <div className="col-lg-4">

                                    <div className="page-details-img-section card">
                                        <div className="main-image-section-box">
                                            <img src={require(`../Images/Products/${e.image[0]}`)} />
                                        </div>
                                        <div className="image-list">
                                            {
                                                e.image.map((e, index) => {
                                                    return (
                                                        <div className="img-box" key={index} onClick={addcls}>
                                                            <img src={require(`../Images/Products/${e}`)} />
                                                        </div>
                                                    )
                                                }
                                                )
                                            }
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-8">
                                    <div className="product-details-section">
                                        <div className="product-details-section-part1 mb-3">
                                            <h3 className="product-name">{e.name}</h3>
                                            <p className="product-price">{e.price}</p>
                                            <p className="some-bank-offer">some-bank-offer</p>
                                        </div>

                                        <div className="product-details-section-part2 mb-3">
                                            <h2 className="products-details-type">Product Description:</h2>
                                            <p className="desc">{e.description}</p>
                                        </div>
                                        <div className="product-details-section-part3 mb-3">
                                            <h2 className="products-details-type">Specifications</h2>
                                            {/* {console.log({e.specification.color})} */}
                                            <p className="spescific">Power Source: <span className='specific-value'>{e.specification.powersource}</span></p>
                                            <p className="spescific">Model number: <span className='specific-value'>{e.specification.modelnumber}</span></p>
                                            <p className="spescific">Operating System: <span className='specific-value'>{e.specification.operatingsystem}</span></p>
                                            <p className="spescific">Color: <span className='specific-value'>{e.specification.color}</span></p>
                                            <p className="spescific">Storage: <span className='specific-value'>{e.specification.storage}</span></p>
                                            <p className="spescific">Ram: <span className='specific-value'>{e.specification.ram}</span></p>
                                            <p className="spescific">Bluetooth Support: <span className='specific-value'>{e.specification.bluetoothsupport}</span></p>
                                            <p className="spescific">Bluetooth Version: <span className='specific-value'>{e.specification.bluetoothversion}</span></p>
                                            <p className="spescific">Music Player: <span className='specific-value'>{e.specification.musicplayer}</span></p>
                                            <p className="spescific">Audio Format: <span className='specific-value'>{e.specification.audioformats}</span></p>
                                            <p className="spescific">Video Format: <span className='specific-value'>{e.specification.videoformats}</span></p>
                                            <p className="spescific">Power Capacity: <span className='specific-value'>{e.specification.batterycapacity}</span></p>

                                        </div>
                                        <div className="product-details-section-part3">
                                            <h2 className="products-details-type">Dimensions</h2>
                                            <p className="spescific">Width:<span className='specific-value'>{e.dimension.Width}</span></p>
                                            <p className="spescific">Height:<span className='specific-value'>{e.dimension.Height}</span></p>
                                            <p className="spescific">Depth:<span className='specific-value'>{e.dimension.Depth}</span></p>
                                            <p className="spescific">Weight:<span className='specific-value'>{e.dimension.Weight}</span></p>

                                        </div>
                                        <div className="product-details-section-part3">
                                            <h2 className="products-details-type">Warranty</h2>
                                            <p className="spescific">Warranty Summary:<span className='specific-value'>{e.warranty.Warrantysummary}</span></p>
                                            <p className="spescific">Warranty Service Type:<span className='specific-value'>{e.warranty.Warrantyservicetype}</span></p>
                                            <p className="spescific">Covered Warranty:<span className='specific-value'>{e.warranty.Coveredwarranty}</span></p>
                                            <p className="spescific">Domestic Warranty:<span className='specific-value'>{e.warranty.domesticwarranty}</span></p>
                                            <p className="spescific">Not Covered In Warranty:<span className='specific-value'>{e.warranty.notwarranty}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductDetails
{/* <img src={require(`../Images/Products/${e.image[0]}`)}/> */ }