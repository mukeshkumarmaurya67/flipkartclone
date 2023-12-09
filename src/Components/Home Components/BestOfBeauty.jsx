import React from 'react';
import '../Scss/bestOf.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Scss/main.scss';

import bob1 from '../Images/bob1.png';
import bob2 from '../Images/bob2.png';
import bob3 from '../Images/bob3.png';
import bob4 from '../Images/bob4.png';
import bob5 from '../Images/bob5.png';
import bob6 from '../Images/bob6.png';
import bob7 from '../Images/bob7.png';
import bob8 from '../Images/bob8.png';


const BestOfBeauty = () => {
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
                        <h2 className="best-of-title">Best of beauty</h2>
                        <div className="col-12">
                            <OwlCarousel items={itemlenght}
                                className="owl-theme"
                                nav
                                margin={8} >
                                <div className="item card">
                                    <div className="img-box"><img src={bob1} alt="bob1" /></div>
                                    <p className='card-para'>Eye Kajal</p>
                                    <h3 className="card-title">From 99</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={bob2} alt="bob2" /></div>
                                    <p className='card-para'>Face Brush</p>
                                    <h3 className="card-title">From 269</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={bob3} alt="bob3" /></div>
                                    <p className='card-para'>Nail Art</p>
                                    <h3 className="card-title">From 349</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={bob4} alt="bob4" /></div>
                                    <p className='card-para'>Lipistics</p>
                                    <h3 className="card-title">Starts from 249</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={bob5} alt="bob5" /></div>
                                    <p className='card-para'>Eye Liner</p>
                                    <h3 className="card-title">From 499</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={bob6} alt="bob6" /></div>
                                    <p className='card-para'>Face pack</p>
                                    <h3 className="card-title">shop now</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={bob7} alt="bob7" /></div>
                                    <p className='card-para'>Face kit</p>
                                    <h3 className="card-title">From 3999</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={bob8} alt="bob8" /></div>
                                    <p className='card-para'>Essential Oil</p>
                                    <h3 className="card-title">From 299</h3>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BestOfBeauty