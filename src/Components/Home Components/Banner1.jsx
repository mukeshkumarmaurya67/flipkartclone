import React from 'react'
import '../Scss/banner1.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import banner1 from '../Images/banner1.png';
import banner2 from '../Images/banner2.jpg';
import banner3 from '../Images/banner3.jpg';
import banner4 from '../Images/banner4.jpg';
import banner5 from '../Images/banner5.jpg';

const Banner1 = () => {
    return (
        <>

            <div className="banner-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0">
                            <OwlCarousel items={1}
                                className="owl-theme"
                                loop
                                nav
                                autoplay
                                margin={8} >
                                <div className="item"><img src={banner1} alt="banner1" /></div>
                                <div className="item"><img src={banner2} alt="banner2" /></div>
                                <div className="item"><img src={banner3} alt="banner3" /></div>
                                <div className="item"><img src={banner4} alt="banner4" /></div>
                                <div className="item"><img src={banner5} alt="banner5" /></div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container row">
                <div className="col-4">

                </div>





                <div className="col-4">


                </div>








                <div className="col-4">



                </div>

            </div>
        </>
    )
}

export default Banner1