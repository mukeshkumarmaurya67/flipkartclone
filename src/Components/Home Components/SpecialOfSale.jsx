import React from 'react';

import sbs1 from '../Images/sbs1.png';
import sbs2 from '../Images/sbs2.png';
import sbs3 from '../Images/sbs3.png';
import sbs4 from '../Images/sbs4.png';
import sss1 from '../Images/sss1.png';
import sss2 from '../Images/sss2.png';
import sss3 from '../Images/sss3.png';
import sss4 from '../Images/sss4.png';
import rb1 from '../Images/rb1.png';


const SpecialOfSale = () => {
    return (
        <>
            <div className="special-of-wrapper box">
                <div className="container">
                    <div className="row g-2">

                        <div className="col-lg-4 col-sm-12">
                            <h2 className="special-of-title title">Special Bank Sale</h2>
                            <div className="special-content-box">
                                <div className="special-content">
                                    <div className="card">
                                        <div className="img-box">
                                        <img src={sbs1} alt="" /></div>
                                        <div className="card-para">10% Off Till 31st <b>T&C</b></div>
                                        <div className="md-title text-center">IDBI Bank</div>
                                    </div>

                                    <div className="card">
                                    <div className="img-box"> <img src={sbs2} alt="" /></div>
                                        <div className="card-para">15% Off Till 31st <b>T&C</b></div>
                                        <div className="md-title text-center">HDFC Bank</div>
                                    </div>

                                    <div className="card">
                                    <div className="img-box"><img src={sbs3} alt="" /></div>
                                        <div className="card-para">20% Off Till 31st <b>T&C</b></div>
                                        <div className="md-title text-center">SBI Bank</div>
                                    </div>

                                    <div className="card">
                                    <div className="img-box"><img src={sbs4} alt="" /></div>
                                        <div className="card-para">12% Off Till 31st <b>T&C</b></div>
                                        <div className="md-title text-center">AXIS BANK</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h2 className="special-of-title title">Offer by Seller</h2>
                            <div className="special-content-box">
                                <div className="special-content">
                                    <div className="card">
                                    <div className="img-box">  <img src={sss1} alt="" /></div>
                                        <div className="card-para">Buy 1 Get 2</div>
                                        <div className="md-title text-center">By Marshall</div>
                                    </div>
                                    <div className="card">
                                    <div className="img-box"><img src={sss2} alt="" /></div>
                                        <div className="card-para">Buy 1 Get 1</div>
                                        <div className="md-title text-center">By Kelvin</div>
                                    </div>
                                    <div className="card">
                                    <div className="img-box"><img src={sss3} alt="" /></div>
                                        <div className="card-para">Buy 1 Get 4</div>
                                        <div className="md-title text-center">By Saldon</div>
                                    </div>
                                    <div className="card">
                                    <div className="img-box"><img src={sss4} alt="" /></div>
                                        <div className="card-para">Buy 1 Get 3</div>
                                        <div className="md-title text-center">By Max</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pt-4 mt-1">
                            <div className="special-content-box">
                                <div className="special-content rb">
                                    <div className="card ">
                                    <div className="img-box">  <img src={rb1} alt="" /></div>
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

export default SpecialOfSale