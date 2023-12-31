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
import banner6 from '../Images/banner1.jpg';

const Banner1 = () => {
    const bannerimg= [banner1,banner2,banner3,banner4,banner5,banner6];
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
                                    {
                                        bannerimg.map(e=><div className="item"><img src={e} alt="e" /></div>)
                                    }

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner1