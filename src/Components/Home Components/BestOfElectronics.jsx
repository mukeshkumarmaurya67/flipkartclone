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


    const boe = [
        {
            category: "Best Of Electronics slider",
            products: "Monitors",
            desc: "From 9999",
            image: descktop
        },
        {
            category: "Best Of Electronics slider",
            products: "pendrive",
            desc: "From 263",
            image: pendrive
        },
        {
            category: "Best Of Electronics slider",
            products: "keyboard",
            desc: "From 349",
            image: keyboard
        },
        {
            category: "Best Of Electronics slider",
            products: "camera",
            desc: "shop now",
            image: camera
        },
        {
            category: "Best Of Electronics slider",
            products: "hardisk",
            desc: "From 2499",
            image: hardisk
        },
        {
            category: "Best Of Electronics slider",
            products: "powerbank",
            desc: "shop now",
            image: powerbank
        },
        {
            category: "Best Of Electronics slider",
            products: "printer",
            desc: "From 3999",
            image: printer
        },
        {
            category: "Best Of Electronics slider",
            products: "trimmer",
            desc: "From 299",
            image: trimmer
        }
    ];



    let itemlenght = 7;
    if (window.screen.width < 991) {
        itemlenght = 4;

    }
    if (window.screen.width < 767) {
        itemlenght = 3;

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
                                {
                                    boe.map((e, index) => 
                                            <div className="item card" key={index}>
                                                <div className="img-box"><img src={e.image} alt={e.products} /></div>
                                                <p className='card-para'>{e.products}</p>
                                                <h3 className="card-title">{e.desc}</h3>
                                            </div>
                                    )
                                }
                            </OwlCarousel>
                            <img src={require('../Images/beauty.png')} alt='trimmer' className='d-none' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BestOfElectronics;