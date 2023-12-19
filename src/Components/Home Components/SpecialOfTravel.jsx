import React from 'react';

import sot1 from '../Images/sot1.png';
import sot2 from '../Images/sot2.png';
import sot3 from '../Images/sot3.png';
import sot4 from '../Images/sot4.png';
import soh1 from '../Images/soh1.png';
import soh2 from '../Images/soh2.png';
import soh3 from '../Images/soh3.png';
import soh4 from '../Images/soh4.png';
import rb3 from '../Images/rb3.png';

const SpecialOfTravel = () => {
    return (
        <>
            <div className="special-of-wrapper box">
                <div className="container">
                    <div className="row g-2">

                        <div className="col-lg-4 col-sm-12">
                            <h2 className="special-of-title title">Book Tickets</h2>
                            <div className="special-content-box">
                                <div className="special-content">
                                    <div className="card">
                                    <div className="img-box"><img src={sot1} alt="" /></div>
                                        <div className="card-para">Book Flight Tickets</div>
                                        <div className="card-title">Starting From 2999</div>
                                    </div>

                                    <div className="card">
                                        <div className="img-box"><img src={sot2} alt="" /></div>
                                        <div className="card-para">Train Tickets</div>
                                        <div className="card-title">Agent Free Charge</div>
                                    </div>

                                    <div className="card">
                                        <div className="img-box"><img src={sot3} alt="" /></div>
                                        <div className="card-para">Book Cab</div>
                                        <div className="card-title">Book At Your Door</div>
                                    </div>

                                    <div className="card">
                                        <div className="img-box"><img src={sot4} alt="" /></div>
                                        <div className="card-para">Bus Tickets</div>
                                        <div className="card-title">get 30% Discount </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <h2 className="special-of-title title">Book Hotels</h2>
                            <div className="special-content-box">
                                <div className="special-content">
                                    <div className="card">
                                        <div className="img-box"><img src={soh1} alt="" /></div>
                                        <div className="card-para"></div>
                                        <div className="card-title">Trending</div>
                                    </div>
                                    <div className="card">
                                        <div className="img-box"><img src={soh2} alt="" /></div>
                                        <div className="card-para">Footwear</div>
                                        <div className="card-title">Starts from 1499</div>
                                    </div>
                                    <div className="card">
                                        <div className="img-box"><img src={soh3} alt="" /></div>
                                        <div className="card-para">Saree</div>
                                        <div className="card-title">Party wear</div>
                                    </div>
                                    <div className="card">
                                       <div className="img-box"><img src={soh4} alt="" /></div>
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
                                        <div className="img-box"><img src={rb3} alt="" /></div>
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

export default SpecialOfTravel