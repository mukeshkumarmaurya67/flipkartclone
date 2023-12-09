import React from 'react';
import '../Scss/category.scss'

import grocery from '../Images/grocery.png';
import appliances from '../Images/appliances.png';
import beauty from '../Images/beauty.png';
import electronics from '../Images/electronics.png';
import fashion from '../Images/fashion.png';
import furniture from '../Images/furniture.png';
import mobiles from '../Images/mobiles.png';
import travel from '../Images/travel.png';
import twowheeler from '../Images/two-wheeler.png';



const Category = () => {
    return (
        <>
            <div className="categogry-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="category-list nav">
                                <li className="category-list-content nav-item">
                                    <a href="" className="nav-link">
                                        <div className="category-list-icon">
                                            <img src={grocery} alt="Grocery" />
                                        </div>
                                        <span className="categorylist-name">Grocery</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="" className="nav-link">
                                        <div className="category-list-icon">
                                            <img src={mobiles} alt="mobiles" />
                                        </div>
                                        <span className="categorylist-name">Mobiles</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#fashown-dropdown" className="nav-link" data-bs-toggle="dropdown">
                                        <div className="category-list-icon">
                                            <img src={fashion} alt="fashion" />
                                        </div>
                                        <span className="categorylist-name dropdown-toggle">Fashion</span>
                                    </a>
                                    <ul className="dropdown-menu" id="fashown-dropdown">
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
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#electronics-dropdown" className="nav-link" data-bs-toggle="dropdown">
                                        <div className="category-list-icon">
                                            <img src={electronics} alt="electronics" />
                                        </div>
                                        <span className="categorylist-name dropdown-toggle">Electronics</span>
                                    </a>
                                    <ul className="dropdown-menu" id="electronics-dropdown">
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
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#homefurniture-dropdown" className="nav-link" data-bs-toggle="dropdown">
                                        <div className="category-list-icon">
                                            <img src={furniture} alt="furniture" />
                                        </div>
                                        <span className="categorylist-name dropdown-toggle">Home & Furnitures</span>
                                    </a>
                                    <ul className="dropdown-menu" id="homefurniture-dropdown">
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
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="" className="nav-link">
                                        <div className="category-list-icon">
                                            <img src={appliances} alt="appliances" />
                                        </div>
                                        <span className="categorylist-name nav-item">Appliances</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="" className="nav-link">
                                        <div className="category-list-icon">
                                            <img src={travel} alt="travel" />
                                        </div>
                                        <span className="categorylist-name">Travel</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#beauty-dropdown" className="nav-link" data-bs-toggle="dropdown" area>
                                        <div className="category-list-icon">
                                            <img src={beauty} alt="beauty" />
                                        </div>
                                        <span className="categorylist-name dropdown-toggle">Beauty,Toys & More</span>
                                    </a>
                                    <ul className="dropdown-menu" id="beauty-dropdown">
                                        <li className="dropdown-item dropdown">
                                            <a href='#mensfashion' className="dropdown-link dropdown-toggle" data-bs-toggle="dropdown">Mens Fashion</a>

                                            <ul className="dropdown-menu" id="mensfashion">
                                                <li className="dropdown-item">Shirt</li>
                                                <li className="dropdown-item">Jeans</li>
                                                <li className="dropdown-item">Jackets</li>
                                                <li className="dropdown-item">T-shirts</li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-item"><a href='#' className="dropdown-link">Womens Fashion</a> </li>
                                        <li className="dropdown-item"><a href='#' className="dropdown-link">Kids Fashion</a> </li>
                                        <li className="dropdown-item"><a href='#' className="dropdown-link">Unisex Fashion</a> </li>
                                        <li className="dropdown-item"><a href='#' className="dropdown-link">Womens Shoes</a> </li>
                                        <li className="dropdown-item"><a href='#' className="dropdown-link">Mens Shoes</a> </li>
                                        <li className="dropdown-item"><a href='#' className="dropdown-link">Kids Shoes</a> </li>
                                        <li className="dropdown-item"><a href='#' className="dropdown-link">Ethnic Wears</a> </li>
                                        <li className="dropdown-item"><a href='#' className="dropdown-link"> All</a></li>
                                    </ul>
                                </li>
                                <li className="category-list-content nav-item dropdown">
                                    <a href="#twoWheeler-dropdown" className="nav-link" data-bs-toggle="dropdown" area>
                                        <div className="category-list-icon">
                                            <img src={twowheeler} alt="twowheeler" />
                                        </div>
                                        <span className="categorylist-name dropdown-toggle">Two Wheelers</span>
                                    </a>
                                    <ul className="dropdown-menu" id="twoWheeler-dropdown">
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
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;