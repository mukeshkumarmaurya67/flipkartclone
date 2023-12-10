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
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BestOfBeauty