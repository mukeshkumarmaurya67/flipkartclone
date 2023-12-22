import React, { useEffect, useState } from 'react';
import Header from '../Home Components/Header';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

    let [count, setCount] = useState(1)

    let [cartitem, setCartitem] = useState([]);

    let fetchData = () => {
        fetch(" http://localhost:10001/cartproducts")
            .then(r => r.json())
            .then(x => setCartitem(x))
    }
    useEffect(() => {
        fetchData();
    }, [0])



    const deleteItem = (del) => {
        var url = "http://localhost:10001/cartproducts/" + del; // change
        var postData = {
            headers: { 'Content-Type': 'application/json' },
            method: "DELETE"
        }
        fetch(url, postData)
            .then(response => response.json())
            .then(serverres => {
                fetchData()
            })
    }

    let [ladterdata, setLaterData] = useState([]);

    let fdata = () => {
        fetch("http://localhost:10001/saveforlater")
            .then(r => r.json())
            .then(x => {
                setLaterData(x)
            })
    }
    useEffect(() => {
        fdata();
    }, [0])


    let saveLater = (adding) => {
        var url = "http://localhost:10001/saveforlater";
        var postData = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(adding)
        }
        fetch(url, postData)
            .then(response => response.json())
            .then(tempfile => {
                fdata();
            })
            
    }

    let delsavelater=(delslater)=>{
       
            var url = "http://localhost:10001/saveforlater/" + delslater; // change
            var postData = {
                headers: { 'Content-Type': 'application/json' },
                method: "DELETE"
            }
            fetch(url, postData)
                .then(response => response.json())
                .then(serverres => {
                    fdata();
                })
       
    }

    let addtocart = (addingc) => {
        var url = "http://localhost:10001/cartproducts";
        var postData = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(addingc)
        }
        fetch(url, postData)
            .then(response => response.json())
            .then(tempfile => {
                fetchData()
            })


    }
    return (
        <>
            <Header />
            <section className="cart-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-left-content">
                                <div className="delivery-area box">
                                    <div className="del-address">
                                        <span className="sm-para">Deliver To: <span className="sm-title">Bangalore - 560048</span></span>
                                        <a href="#" className="btns btn-md">Change</a>
                                    </div>
                                </div>
                                {
                                    cartitem.map((e, index) => {
                                        return (
                                            <div className="products-area box" key={e.id}>
                                                <div className="container">
                                                    <div className="row">

                                                        <div className="col-lg-3 ">
                                                            <div className="products-area box">
                                                                <div className="img-box">
                                                                    <img src={require(`../Images/Products/${e.image[1]}`)} alt="Dell Alienware" />
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <div className="products-area box">
                                                                <h2 className="title mb-1">{e.name}</h2>
                                                                <p className="sm-para">Brand : <span className="sm-title">{e.specification.brand}</span></p>
                                                                <p className="sm-para">Seller:RoyalCommunicationsIndia</p>
                                                                <div className="price-offer md-title">
                                                                    <del className='sm-para me-1'>{e.price}</del>
                                                                    <span className='ms-1'>₹{e.price - e.price * 15 / 100}</span>
                                                                    <span className="offer text-success ms-2">15% Off</span>
                                                                    <span className="coupon ms-3 text-success">1 offer applied</span>
                                                                </div>

                                                            </div>
                                                        </div>



                                                        <div className="col-lg-4">
                                                            <div className="products-area box">
                                                                <h2 className="md-title text-center">Delivery by Fri Dec 22</h2>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="box">
                                                                <div className="counter">
                                                                    <span className='calc' onClick={() => setCount(count - 1)}> - </span>
                                                                    <input type='text' value={count} size={1} />
                                                                    <span className='calc' onClick={() => setCount(count + 1)}> + </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-9">
                                                            <div className="box">
                                                                <button className=" title save-remove " onClick={saveLater.bind(this, e)}>Save For Later</button>
                                                                <button className=" title save-remove ms-4" onClick={deleteItem.bind(this, e.id)}>Remove</button>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }


                                <div className="place-order">
                                    <span className='total-price'>₹34,291</span>
                                    <a href="#/payment" className='btns btn-red '>Place Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-right-content">
                                <div className="price-detail-title  box title">Price Details</div>
                                <div className="price-detail-group">
                                    <span className="para">Price (2 items)</span>
                                    <span className="md-title">₹77,997</span>
                                </div>
                                <div className="price-detail-group">
                                    <span className="para">Discount</span>
                                    <span className="md-title text-success">− ₹41,775</span>
                                </div>
                                <div className="price-detail-group">
                                    <span className="para">Buy more & save more</span>
                                    <span className="md-title text-success">− ₹2,000</span>
                                </div>
                                <div className="price-detail-group">
                                    <span className="para">Delivery Charges</span>
                                    <span className="md-title text-success"><del className='para'>₹160 </del> Free</span>
                                </div>
                                <div className="price-detail-group">
                                    <span className="para">Secured Packaging Fee</span>
                                    <span className="md-title">₹69</span>
                                </div>
                                <div className="price-detail-group total-amount title">
                                    <span className="">Total Amount</span>
                                    <span className="">₹34,291</span>
                                </div>
                                <p className="text-success ps-3">You will save ₹43,706 on this order</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="box save-later-section">
                            <div className="row g-2">

                                <div className="box">

                                    <div className="title">Save For Later</div>
                                </div>
                                {
                                    ladterdata.map((e => {
                                        return (
                                            <div className="col-lg-2" key={e.id}>
                                                <div className="card">

                                                    <div className="box">
                                                        <div className="icon-box" onClick={delsavelater.bind(this,e.id)}>
                                                            <DeleteIcon />
                                                        </div>
                                                        <div className="img-box mb-1">
                                                            <img src={require(`../Images/Products/${e.image[1]}`)} alt='' />
                                                        </div>
                                                        <div className="sm-para">₹ {e.price}</div>
                                                        <div className="boxs">
                                                            <span className="star-box sm-title">{e.rating} <StarIcon className='star' /> </span>
                                                            <span className='sm-para ps-2'> (13)</span>
                                                        </div>

                                                        <div className="xs-para mb-1">Free Delivery</div>
                                                        <button className="save-remove btns btn-yellow w-100" onClick={addtocart.bind(this, e)}>Add To Cart</button>

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
            </section >


        </>
    )
}

export default Cart;