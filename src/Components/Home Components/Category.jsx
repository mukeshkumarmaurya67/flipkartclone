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
                                    <a href="#/seprate-category" className="nav-link" value="grocery">
                                        <div className="category-list-icon">
                                            <img src={grocery} alt="Grocery" />
                                        </div>
                                        <span className="categorylist-name">Grocery</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="#/seprate-category" className="nav-link" value="mobile">
                                        <div className="category-list-icon">
                                            <img src={mobiles} alt="mobiles" />
                                        </div>
                                        <span className="categorylist-name">Mobiles</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="#/seprate-category" className="nav-link" value="fashion">
                                        <div className="category-list-icon">
                                            <img src={fashion} alt="fashion" />
                                        </div>
                                        <span className="categorylist-name">Fashion</span>
                                    </a>
                                    
                                </li>
                                <li className="category-list-content nav-item ">
                                    <a href="#/seprate-category" className="nav-link" value="electronics">
                                        <div className="category-list-icon">
                                            <img src={electronics} alt="electronics" />
                                        </div>
                                        <span className="categorylist-name">Electronics</span>
                                    </a>

                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="#/seprate-category" className="nav-link" value="furniture">
                                        <div className="category-list-icon">
                                            <img src={furniture} alt="furniture" />
                                        </div>
                                        <span className="categorylist-name">Home & Furnitures</span>
                                    </a>

                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="#/seprate-category" className="nav-link" value="appliances">
                                        <div className="category-list-icon">
                                            <img src={appliances} alt="appliances" />
                                        </div>
                                        <span className="categorylist-name nav-item">Appliances</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="#/seprate-category" className="nav-link" value="travel">
                                        <div className="category-list-icon">
                                            <img src={travel} alt="travel" />
                                        </div>
                                        <span className="categorylist-name">Travel</span>
                                    </a>
                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="#/seprate-category" className="nav-link" value="beauty">
                                        <div className="category-list-icon">
                                            <img src={beauty} alt="beauty" />
                                        </div>
                                        <span className="categorylist-name">Beauty,Toys & More</span>
                                    </a>

                                </li>
                                <li className="category-list-content nav-item">
                                    <a href="#/seprate-category" className="nav-link" value="twowheeler"> 
                                        <div className="category-list-icon">
                                            <img src={twowheeler} alt="twowheeler" />
                                        </div>
                                        <span className="categorylist-name">Two Wheelers</span>
                                    </a>

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