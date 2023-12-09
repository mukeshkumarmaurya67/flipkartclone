import React from 'react';import '../Scss/specialOf.scss';
import '../Scss/main.scss';
import smf1 from '../Images/smf1.png';
import smf2 from '../Images/smf2.png';
import smf3 from '../Images/smf3.png';
import smf4 from '../Images/smf4.png';
import swf1 from '../Images/swf1.png';
import swf2 from '../Images/swf2.png';
import swf3 from '../Images/swf3.png';
import swf4 from '../Images/swf4.png';
import rb2 from '../Images/rb2.png';

const SpecialOfFashion = () => {
    return (
        <>
            <div className="special-of-wrapper">
                <div className="container">
                    <div className="row g-2">

                        <div className="col-lg-4 col-sm-12">
                            <h2 className="special-of-title">Mens Fashion</h2>
                            <div className="special-content-box">
                                <div className="special-content">
                                    <div className="card">
                                    <div className="img-box"><img src={smf1} alt="" /></div>
                                        <div className="card-para">Leather Jacket</div>
                                        <div className="card-title">Starting From 2999</div>
                                    </div>

                                    <div className="card">
                                        <div className="img-box"><img src={smf2} alt="" /></div>
                                        <div className="card-para">Printed Shirts</div>
                                        <div className="card-title">Trending</div>
                                    </div>

                                    <div className="card">
                                        <div className="img-box"><img src={smf3} alt="" /></div>
                                        <div className="card-para">Loafer Shoes</div>
                                        <div className="card-title">Trending</div>
                                    </div>

                                    <div className="card">
                                        <div className="img-box"><img src={smf4} alt="" /></div>
                                        <div className="card-para">Ethnick Wear</div>
                                        <div className="card-title">Starting from 1999</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h2 className="special-of-title">Womens Fashion</h2>
                            <div className="special-content-box">
                                <div className="special-content">
                                    <div className="card">
                                        <div className="img-box"><img src={swf1} alt="" /></div>
                                        <div className="card-para">Lehanga</div>
                                        <div className="card-title">Trending</div>
                                    </div>
                                    <div className="card">
                                        <div className="img-box"><img src={swf2} alt="" /></div>
                                        <div className="card-para">Footwear</div>
                                        <div className="card-title">Starts from 1499</div>
                                    </div>
                                    <div className="card">
                                        <div className="img-box"><img src={swf3} alt="" /></div>
                                        <div className="card-para">Saree</div>
                                        <div className="card-title">Party wear</div>
                                    </div>
                                    <div className="card">
                                       <div className="img-box"><img src={swf4} alt="" /></div>
                                        <div className="card-para">Sweater</div>
                                        <div className="card-title">Starts at 999</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pt-4 mt-1">
                            <div className="special-content-box">
                                <div className="special-content rb">
                                    <div className="card">
                                        <div className="img-box"><img src={rb2} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialOfFashion;