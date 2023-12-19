import React from 'react';
import Header from '../Home Components/Header';
import grocery from '../Images/grocery.png';
import appliances from '../Images/appliances.png';
import beauty from '../Images/beauty.png';
import electronics from '../Images/electronics.png';
import fashion from '../Images/fashion.png';
import furniture from '../Images/furniture.png';
import mobiles from '../Images/mobiles.png';
import travel from '../Images/travel.png';
import twowheeler from '../Images/two-wheeler.png';

const SeprateCategoryPage = () => {
    return (
        <>
            <Header />
            <div className="categogry-wrapper inner-category">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="category-list nav">
                                <li className="category-list-content nav-item">
                                    <a href="" className="nav-link">

                                        <span className="categorylist-name">Grocery</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="" className="nav-link">

                                        <span className="categorylist-name">Mobiles</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#fashown-dropdown" className="nav-link" data-bs-toggle="dropdown">

                                        <span className="categorylist-name dropdown-toggle">Fashion</span>
                                    </a>
                                    <div className="dropdown-menu" id="fashown-dropdown">
                                        <div className=" large-dropdown-menu">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-lg-3">                                            <ul  >
                                                        <li className="dropdown-item sm-title">Mens Wear</li>
                                                        <li className="dropdown-item sm-para">Jeans</li>
                                                        <li className="dropdown-item sm-para">T-Shirts</li>
                                                        <li className="dropdown-item sm-para">Sweetshirts</li>
                                                        <li className="dropdown-item sm-para">Shoes</li>
                                                        <li className="dropdown-item sm-para">Inner-Wear</li>
                                                        <li className="dropdown-item sm-para">Sports-Wear</li>
                                                        <li className="dropdown-item sm-para">Watches</li>
                                                        <li className="dropdown-item sm-para">All</li>
                                                    </ul></div>
                                                    <div className="col-lg-3">
                                                        <ul  >
                                                            <li className="dropdown-item sm-title">Womens Wear</li>
                                                            <li className="dropdown-item sm-para">Jeans</li>
                                                            <li className="dropdown-item sm-para">Top Wear</li>
                                                            <li className="dropdown-item sm-para">Jeans Jackets</li>
                                                            <li className="dropdown-item sm-para">Saree</li>
                                                            <li className="dropdown-item sm-para">Ethnics Wear</li>
                                                            <li className="dropdown-item sm-para">Inner-Wear</li>
                                                            <li className="dropdown-item sm-para">Tops</li>
                                                            <li className="dropdown-item sm-para">Lehnga</li>
                                                            <li className="dropdown-item sm-para">All</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <ul  >
                                                            <li className="dropdown-item sm-title">Kids Wear</li>
                                                            <li className="dropdown-item sm-para">Jeans-Paints</li>
                                                            <li className="dropdown-item sm-para">Shirts</li>
                                                            <li className="dropdown-item sm-para">Jackets</li>
                                                            <li className="dropdown-item sm-para">Saree</li>
                                                            <li className="dropdown-item sm-para">Ethnics Wear</li>
                                                            <li className="dropdown-item sm-para">Schools Bags</li>
                                                            <li className="dropdown-item sm-para">Shoes</li>
                                                            <li className="dropdown-item sm-para">All</li>

                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <ul  >
                                                            <li className="dropdown-item sm-title">Accessories</li>
                                                            <li className="dropdown-item sm-para">Watch</li>
                                                            <li className="dropdown-item sm-para">Purse</li>
                                                            <li className="dropdown-item sm-para">bagpacks</li>
                                                            <li className="dropdown-item sm-para">Sunglasses</li>
                                                            <li className="dropdown-item sm-para">Frames</li>
                                                            <li className="dropdown-item sm-para">Jwellery</li>
                                                            <li className="dropdown-item sm-para">Sports & Fitness Store</li>
                                                            <li className="dropdown-item sm-para">All</li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>

                                    </div>
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#electronics-dropdown" className="nav-link" data-bs-toggle="dropdown">

                                        <span className="categorylist-name dropdown-toggle">Electronics</span>
                                    </a>
                                    <div className="dropdown-menu" id="electronics-dropdown">
                                        <div className="large-dropdown-menu" >
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <ul>
                                                            <li className="dropdown-item sm-title">Mobiles</li>
                                                            <li className="dropdown-item sm-para">Samsung</li>
                                                            <li className="dropdown-item sm-para">Apple</li>
                                                            <li className="dropdown-item sm-para">Vivo</li>
                                                            <li className="dropdown-item sm-para">oppo</li>
                                                            <li className="dropdown-item sm-para">realme</li>
                                                            <li className="dropdown-item sm-para">Honor</li>
                                                            <li className="dropdown-item sm-para">Poco</li>
                                                            <li className="dropdown-item sm-para">Motrola</li>
                                                            <li className="dropdown-item sm-para">asus</li>
                                                            <li className="dropdown-item sm-para">IQOO</li>
                                                            <li className="dropdown-item sm-para">infifnix</li>
                                                            <li className="dropdown-item sm-para">Mi</li>
                                                            <li className="dropdown-item sm-para">All</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <ul>
                                                            <li className="dropdown-item sm-title">Mobile Accesories</li>
                                                            <li className="dropdown-item sm-para">Mobile Cases</li>
                                                            <li className="dropdown-item sm-para">Power Banks</li>
                                                            <li className="dropdown-item sm-para">Memory Cards</li>
                                                            <li className="dropdown-item sm-para">Smart Headphones</li>
                                                            <li className="dropdown-item sm-para">Mobile Chargers</li>
                                                            <li className="dropdown-item sm-para">Mobile Holders</li>
                                                            <li className="dropdown-item sm-para">Smart Glasses (VR)</li>
                                                            <li className="dropdown-item sm-para">All</li>
                                                        </ul>
                                                        <ul>
                                                            <li className="dropdown-item sm-title">Health Care Gadgets</li>
                                                            <li className="dropdown-item sm-para">Smart Watches</li>
                                                            <li className="dropdown-item sm-para">Smart Glasses</li>
                                                            <li className="dropdown-item sm-para">Smart Bands   </li>
                                                            <li className="dropdown-item sm-para">Bp Monitors</li>
                                                            <li className="dropdown-item sm-para">Weighing Scale</li>
                                                            <li className="dropdown-item sm-para">All</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-3">                                            <ul>
                                                        <li className="dropdown-item sm-title">Speakers</li>
                                                        <li className="dropdown-item sm-para">Home Audio Speakers</li>
                                                        <li className="dropdown-item sm-para">Home Theatres</li>
                                                        <li className="dropdown-item sm-para">Soundbars</li>
                                                        <li className="dropdown-item sm-para">Bluetooth Speakers</li>
                                                        <li className="dropdown-item sm-para">DTH Set Top Box</li>
                                                        <li className="dropdown-item sm-para">All</li>
                                                    </ul></div>
                                                    <div className="col-lg-3">
                                                        <ul>
                                                            <li className="dropdown-item sm-title">Computer Accessories</li>
                                                            <li className="dropdown-item sm-para">External Hard Disks</li>
                                                            <li className="dropdown-item sm-para">Pendrives</li>
                                                            <li className="dropdown-item sm-para">Laptop Skins & Decals</li>
                                                            <li className="dropdown-item sm-para">Laptop Bags</li>
                                                            <li className="dropdown-item sm-para">Mouse</li>
                                                            <li className="dropdown-item sm-para">Printers & Ink Cartridges</li>
                                                            <li className="dropdown-item sm-para">Monitors</li>
                                                            <li className="dropdown-item sm-para">All</li>
                                                        </ul>
                                                        <ul>
                                                            <li className="dropdown-item sm-title">Camera</li>
                                                            <li className="dropdown-item sm-para">DSLR & Mirrorless</li>
                                                            <li className="dropdown-item sm-para">Compact & Bridge Cameras</li>
                                                            <li className="dropdown-item sm-para">Sports & Action   </li>
                                                            <li className="dropdown-item sm-para">Bluetooth Speakers</li>
                                                            <li className="dropdown-item sm-para">DTH Set Top Box</li>
                                                            <li className="dropdown-item sm-para">All</li>
                                                        </ul>
                                                    </div>




                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#homefurniture-dropdown" className="nav-link" data-bs-toggle="dropdown">

                                        <span className="categorylist-name dropdown-toggle">Home & Furnitures</span>
                                    </a>
                                    <div className="dropdown-menu" id="homefurniture-dropdown">
                                        <div className=" large-dropdown-menu">
                                            <ul>
                                                <li className="dropdown-item">Mens Fashion</li>
                                                <li className="dropdown-item">Womens Fashion</li>
                                                <li className="dropdown-item">Kids Fashion</li>
                                                <li className="dropdown-item">Unisex Fashion</li>
                                                <li className="dropdown-item">Womens Shoes</li>
                                                <li className="dropdown-item">Mens Shoes</li>
                                                <li className="dropdown-item">Kids Shoes</li>
                                                <li className="dropdown-item">Ethnic Wears</li>
                                                <li className="dropdown-item">All</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="" className="nav-link">

                                        <span className="categorylist-name nav-item">Appliances</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="" className="nav-link">

                                        <span className="categorylist-name">Travel</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#beauty-dropdown" className="nav-link" data-bs-toggle="dropdown" area>

                                        <span className="categorylist-name dropdown-toggle">Beauty,Toys & More</span>
                                    </a>
                                    <div className="dropdown-menu" id="beauty-dropdown">
                                        <div className="large-dropdown-menu">
                                            <ul>
                                                <li className="dropdown-item"><a href='#' className="dropdown-link">Womens Fashion</a> </li>
                                                <li className="dropdown-item"><a href='#' className="dropdown-link">Kids Fashion</a> </li>
                                                <li className="dropdown-item"><a href='#' className="dropdown-link">Unisex Fashion</a> </li>
                                                <li className="dropdown-item"><a href='#' className="dropdown-link">Womens Shoes</a> </li>
                                                <li className="dropdown-item"><a href='#' className="dropdown-link">Mens Shoes</a> </li>
                                                <li className="dropdown-item"><a href='#' className="dropdown-link">Kids Shoes</a> </li>
                                                <li className="dropdown-item"><a href='#' className="dropdown-link">Ethnic Wears</a> </li>
                                                <li className="dropdown-item"><a href='#' className="dropdown-link"> All</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#twoWheeler-dropdown" className="nav-link" data-bs-toggle="dropdown" area>

                                        <span className="categorylist-name dropdown-toggle">Two Wheelers</span>
                                    </a>
                                    <div className="dropdown-menu" id="twoWheeler-dropdown">
                                        <div className=" large-dropdown-menu">
                                            <ul>
                                                <li className="dropdown-item">Mens Fashion</li>
                                                <li className="dropdown-item">Womens Fashion</li>
                                                <li className="dropdown-item">Kids Fashion</li>
                                                <li className="dropdown-item">Unisex Fashion</li>
                                                <li className="dropdown-item">Womens Shoes</li>
                                                <li className="dropdown-item">Mens Shoes</li>
                                                <li className="dropdown-item">Kids Shoes</li>
                                                <li className="dropdown-item">Ethnic Wears</li>
                                                <li className="dropdown-item">All</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

            <div className="seprate-category-wrapper ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="common-banner-section">
                                <div className="banner-img" style={{ height: '360px' }}>
                                    <img src={require("../Images/Banner/mb-banner.png")} alt="Banner" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="common-banner-title-section section">
                                <div className="common-banner-title">
                                    <img src={require(`../Images/category-banner-1.png`)} alt="Just Launched" />

                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="common-banner-section">
                                <div className="banner-img">
                                    <img src={require("../Images/Products/oppo-reno-10-pro-2.png")} alt="Banner" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="common-banner-title-section section">
                                <div className="common-banner-title">
                                    <img src={require(`../Images/category-banner-2.png`)} alt="Launch Of The Day" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="common-banner-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                        <div className="banner-img">
                                                <img src={require(`../Images/Products/oppo-reno-10-pro-2-name.png`)} alt="Banner" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="banner-img">
                                                <img src={require(`../Images/Products/oppo-reno-10-pro-2.png`)} alt="Banner" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12">
                            <div className="common-banner-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="banner-img">
                                                <img src={require(`../Images/Products/oppo-reno-10-pro-1.png`)} alt="Banner" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0"></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12">
                            <div className="common-banner-title-section section">
                                <div className="common-banner-title">
                                    <img src={require(`../Images/category-banner-3.png`)} alt="Upcoming Sale" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="common-banner-section">
                                <div className="banner-img">
                                    <img src={require("../Images/banner5.jpg")} alt="Banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SeprateCategoryPage