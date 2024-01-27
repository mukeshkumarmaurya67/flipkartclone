import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import bob1 from '../Images/bob1.png';
import bob2 from '../Images/bob2.png';
import bob3 from '../Images/bob3.png';
import bob4 from '../Images/bob4.png';
import bob5 from '../Images/bob5.png';
import bob6 from '../Images/bob6.png';
import bob7 from '../Images/bob7.png';
import bob8 from '../Images/bob8.png';


const BestOfBeauty = () => {

    const boe = [
        {
            category: "Best Of Beauty slider",
            products: "Eye Kajal",
            desc: "From 99",
            image: bob1
        },
        {
            category: "Best Of Beauty slider",
            products: "Face Brush",
            desc: "From 269",
            image: bob2
        },
        {
            category: "Best Of Beauty slider",
            products: "Nail Art",
            desc: "From 349",
            image: bob3
        },
        {
            category: "Best Of Beauty slider",
            products: "Lipistics",
            desc: "Starts from 249",
            image: bob4
        },
        {
            category: "Best Of Beauty slider",
            products: "Eye Liner",
            desc: "From 499",
            image: bob5
        },
        {
            category: "Best Of Beauty slider",
            products: "Face pack",
            desc: "shop now",
            image: bob6
        },
        {
            category: "Best Of Beauty slider",
            products: "Face kit",
            desc: "From 3999",
            image: bob7
        },
        {
            category: "Best Of Beauty slider",
            products: "Essential Oil",
            desc: "From 299",
            image: bob8
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
                        <h2 className="best-of-title title">Best of beauty</h2>
                        <div className="col-12">

                            <OwlCarousel 
                                className="owl-theme"
                              {...options} >
                                {
                                    boe.map((e, index) => 
                                            <div className="item card" key={index}>
                                                <div className="img-box"><img src={e.image} alt={e.products} /></div>
                                                <p className='para text-center w-100'>{e.products}</p>
                                                <h3 className="title text-center w-100">{e.desc}</h3>
                                            </div>
                                    )
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BestOfBeauty