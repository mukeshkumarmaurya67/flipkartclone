import React, { useState } from 'react';
import Header from '../Home Components/Header';

const Cart = () => {

    let [count, setCount] = useState(1)

    return (
        <>
            <Header />
            <section className="cart-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-left-content">
                                <div className="delivery-area">
                                    <div className="del-address">
                                        <span className="sm-para">Deliver To: <span className="sm-title">Bangalore - 560048</span></span>
                                        <a href="#" className="btns btn-md">Change</a>
                                    </div>
                                </div>
                                <div className="products-area box">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-lg-3 ">
                                                <div className="products-area box-l">
                                                    <div className="img-box">
                                                        <img src={require(`../Images/Products/freeze-sidebyside-1.png`)} alt="LG Refrigerator" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="products-area box-m">
                                                    <h2 className="md-title">Zelfo Back Cover for OnePlus 10R (5G)</h2>
                                                    <p className="sm-para">Black, Silicon, Pack of: 1</p>
                                                    <p className="sm-para">Seller:RoyalCommunicationsIndia</p>
                                                    <div className="price-offer md-title">
                                                        <del className='sm-para'>999</del>
                                                        <span>₹425</span>
                                                        <span className="offer ">57% Off</span>
                                                        <span className="coupon">1 offer applied</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="products-area box-r">
                                                    <h2 className="md-title text-center">Delivery by Fri Dec 22</h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="counter">
                                                    <span className='calc' onClick={() => setCount(count - 1)}> - </span>
                                                    <input type='text' value={count} size={1} />
                                                    <span className='calc' onClick={() => setCount(count + 1)}> + </span>
                                                </div>

                                            </div>
                                            <div className="col-lg-9">
                                                <a href="#" className=" title save-remove ">Save For Later</a>
                                                <a href="#" className=" title save-remove ms-4">Remove</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="products-area box">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-lg-3 ">
                                                <div className="products-area box-l">
                                                    <div className="img-box">
                                                        <img src={require(`../Images/Products/dell-alienware-m16-1.png`)} alt="Dell Alienware" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="products-area box-m">
                                                    <h2 className="md-title">Zelfo Back Cover for OnePlus 10R (5G)</h2>
                                                    <p className="sm-para">Black, Silicon, Pack of: 1</p>
                                                    <p className="sm-para">Seller:RoyalCommunicationsIndia</p>
                                                    <div className="price-offer md-title">
                                                        <del className='sm-para'>999</del>
                                                        <span>₹425</span>
                                                        <span className="offer ">57% Off</span>
                                                        <span className="coupon">1 offer applied</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="products-area box-r">
                                                    <h2 className="md-title text-center">Delivery by Fri Dec 22</h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="counter">
                                                    <span className='calc' onClick={() => setCount(count - 1)}> - </span>
                                                    <input type='text' value={count} size={1} />
                                                    <span className='calc' onClick={() => setCount(count + 1)}> + </span>
                                                </div>

                                            </div>
                                            <div className="col-lg-9">
                                                <a href="#" className=" title save-remove ">Save For Later</a>
                                                <a href="#" className=" title save-remove ms-4">Remove</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="products-area box">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-lg-3 ">
                                                <div className="products-area box-l">
                                                    <div className="img-box">
                                                        <img src={require(`../Images/Products/iphone-15pro-max-1.png`)} alt="Iphone 15 Pro" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="products-area box-m">
                                                    <h2 className="md-title">Zelfo Back Cover for OnePlus 10R (5G)</h2>
                                                    <p className="sm-para">Black, Silicon, Pack of: 1</p>
                                                    <p className="sm-para">Seller:RoyalCommunicationsIndia</p>
                                                    <div className="price-offer md-title">
                                                        <del className='sm-para'>999</del>
                                                        <span>₹425</span>
                                                        <span className="offer ">57% Off</span>
                                                        <span className="coupon">1 offer applied</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="products-area box-r">
                                                    <h2 className="md-title text-center">Delivery by Fri Dec 22</h2>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="counter">
                                                    <span className='calc' onClick={() => setCount(count - 1)}> - </span>
                                                    <input type='text' value={count} size={1} />
                                                    <span className='calc' onClick={() => setCount(count + 1)}> + </span>
                                                </div>

                                            </div>
                                            <div className="col-lg-9">
                                                <a href="#" className=" title save-remove ">Save For Later</a>
                                                <a href="#" className=" title save-remove ms-4">Remove</a>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="place-order">
                                    <span className='total-price'>₹34,291</span>
                                    <a href="#/payment" className='btns btn-red '>Place Order</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-right-content">
                                <div className="price-detail-title title">Price Details</div>
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
                </div>
            </section >


        </>
    )
}

export default Cart;