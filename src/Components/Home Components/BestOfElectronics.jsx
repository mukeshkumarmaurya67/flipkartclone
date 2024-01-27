import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import camera from '../Images/camera-1.png';
import descktop from '../Images/descktop-1.png';
import keyboard from '../Images/keyboard-1.png';
import pendrive from '../Images/pendrive-1.png';
import hardisk from '../Images/hardisk-1.png';
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
                        <h2 className="best-of-title title">Best of electronics</h2>
                        <div className="col-12">
                            <OwlCarousel 
                                className="owl-theme"

                                {...options} >
                                {
                                    boe.map((e, index) => 
                                            <div className="item card" key={index}>
                                                <div className="img-box"><img src={e.image} alt={e.products} /></div>
                                                <p className='para w-100 text-center'>{e.products}</p>
                                                <h3 className="title w-100 text-center">{e.desc}</h3>
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