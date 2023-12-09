import React from 'react';
import '../Scss/bestOf.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Scss/main.scss';

import boc1 from '../Images/boc1.png';
import boc2 from '../Images/boc2.png';
import boc3 from '../Images/boc3.png';
import boc4 from '../Images/boc4.png';
import boc5 from '../Images/boc5.png';
import boc6 from '../Images/boc6.png';
import boc7 from '../Images/boc7.png';
import boc8 from '../Images/boc8.png';



const BestOfKitchen = () => {
    let itemlenght=7;
    if(window.screen.width<991){
      itemlenght=4;
       
    }
    if(window.screen.width<767){
        itemlenght=3;
         
      }
  return (
    <>
            <div className="best-of-wrapper">
                <div className="container">
                    <div className="row">
                        <h2 className="best-of-title">Best of kitchen</h2>
                        <div className="col-12">
                            <OwlCarousel items={itemlenght}
                                className="owl-theme"
                                nav
                                margin={8} >
                                <div className="item card">
                                    <div className="img-box"><img src={boc1} alt="boc1" /></div>
                                    <p className='card-para'>Hotpots</p>
                                    <h3 className="card-title">From 799</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc2} alt="boc2" /></div>
                                    <p className='card-para'>Copper pots</p>
                                    <h3 className="card-title">From 1263</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc3} alt="boc3" /></div>
                                    <p className='card-para'>Mixer & Grinder</p>
                                    <h3 className="card-title">From 1349</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc4} alt="boc4" /></div>
                                    <p className='card-para'>Juicer</p>
                                    <h3 className="card-title">shop now</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc5} alt="boc5" /></div>
                                    <p className='card-para'>Tea Pots Sets</p>
                                    <h3 className="card-title">From 499</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc6} alt="boc6" /></div>
                                    <p className='card-para'>Ceramic Utensils</p>
                                    <h3 className="card-title">shop now</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc7} alt="boc7" /></div>
                                    <p className='card-para'>Dining Sets</p>
                                    <h3 className="card-title">From 7999</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={boc8} alt="boc8" /></div>
                                    <p className='card-para'>Chimney</p>
                                    <h3 className="card-title">6999</h3>
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