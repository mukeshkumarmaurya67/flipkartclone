import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import boc1 from '../Images/boc1.png';
import boc2 from '../Images/boc2.png';
import boc3 from '../Images/boc3.png';
import boc4 from '../Images/boc4.png';
import boc5 from '../Images/boc5.png';
import boc6 from '../Images/boc6.png';
import boc7 from '../Images/boc7.png';
import boc8 from '../Images/boc8.png';



const BestOfKitchen = () => {
    const options = {
        // loop: true,
        margin: 4,
        autoplay: false,
        dots: false,
        // autoplayTimeout: 8500,
        // smartSpeed: 450,
        nav: true,
        navText:['<svg width="24px" height="24px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 2px;stroke: #d588cf;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="24px" height="24px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #d588cf;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        responsive: {
            0: {
                items: 1
            },
            425: {
                items: 2
            },
            600: {
                items: 3
            },
            991: {
                items: 4
            },
           1024: {
                items: 5
            },
            1199: {
                items: 6
            },
            1224: {
                items: 7
            },
        }
    };
  return (
    <>
            <div className="best-of-wrapper box">
                <div className="container">
                    <div className="row">
                        <h2 className="best-of-title title">Best of kitchen</h2>
                        <div className="col-12">
                            <OwlCarousel 
                                className="owl-theme"
                                {...options}
                                >
                                <div className="item card">
                                    <div className="img-box"><img src={boc1} alt="boc1" /></div>
                                    <p className='para w-100 text-center'>Hotpots</p>
                                    <h3 className="title w-100 text-center">From 799</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc2} alt="boc2" /></div>
                                    <p className='para w-100 text-center'>Copper pots</p>
                                    <h3 className="title w-100 text-center">From 1263</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc3} alt="boc3" /></div>
                                    <p className='para w-100 text-center'>Mixer & Grinder</p>
                                    <h3 className="title w-100 text-center">From 1349</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc4} alt="boc4" /></div>
                                    <p className='para w-100 text-center'>Juicer</p>
                                    <h3 className="title w-100 text-center">shop now</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc5} alt="boc5" /></div>
                                    <p className='para w-100 text-center'>Tea Pots Sets</p>
                                    <h3 className="title w-100 text-center">From 499</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc6} alt="boc6" /></div>
                                    <p className='para w-100 text-center'>Ceramic Utensils</p>
                                    <h3 className="title w-100 text-center">shop now</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc7} alt="boc7" /></div>
                                    <p className='para w-100 text-center'>Dining Sets</p>
                                    <h3 className="title w-100 text-center">From 7999</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc8} alt="boc8" /></div>
                                    <p className='para w-100 text-center'>Chimney</p>
                                    <h3 className="title w-100 text-center">6999</h3>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BestOfKitchen