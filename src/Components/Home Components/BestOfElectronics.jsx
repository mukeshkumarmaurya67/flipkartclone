import React, { useState } from 'react';
import '../Scss/bestOf.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Scss/main.scss';

import camera from '../Images/camera.png';
import descktop from '../Images/descktop.png';
import keyboard from '../Images/keyboard.png';
import pendrive from '../Images/pendrive.png';
import hardisk from '../Images/hardisk.png';
import powerbank from '../Images/powerbank.png';
import printer from '../Images/printer.png';
import trimmer from '../Images/trimmer.png';

const BestOfElectronics = () => {
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
                        <h2 className="best-of-title">Best of electronics</h2>
                        <div className="col-12">
                            <OwlCarousel items={itemlenght}
                                className="owl-theme"
                                nav
                                margin={8} >
                                <div className="item card">
                                    <div className="img-box"><img src={descktop} alt="descktop" /></div>
                                    <p className='card-para'>Monitors</p>
                                    <h3 className="card-title">From 9999</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={pendrive} alt="pendrive" /></div>
                                    <p className='card-para'>pendrive</p>
                                    <h3 className="card-title">From 263</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={keyboard} alt="keyboard" /></div>
                                    <p className='card-para'>keyboard</p>
                                    <h3 className="card-title">From 349</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={camera} alt="camera" /></div>
                                    <p className='card-para'>camera</p>
                                    <h3 className="card-title">shop now</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={hardisk} alt="hardisk" /></div>
                                    <p className='card-para'>hardisk</p>
                                    <h3 className="card-title">From 2499</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={powerbank} alt="powerbank" /></div>
                                    <p className='card-para'>powerbank</p>
                                    <h3 className="card-title">shop now</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={printer} alt="printer" /></div>
                                    <p className='card-para'>printer</p>
                                    <h3 className="card-title">From 3999</h3>
                                </div>
                                <div className="item card">
                                    <div className="img-box"><img src={trimmer} alt="trimmer" /></div>
                                    <p className='card-para'>trimmer</p>
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

export default BestOfElectronics;