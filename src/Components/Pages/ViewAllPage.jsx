import React, { useContext } from 'react';
import Header from '../Home Components/Header';
import { globalContext } from '../../App';

const ViewAllPage = () => {
    let data = useContext(globalContext)
    return (
        <>
            <Header />

            <section className="viewall-wrapper">
                <div className="viewall-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="viewall-l-section box">
                                    <div className="filter-section">
                                        <h3 className="filter-section-title title">Filter</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10">
                                <div className="viewall-r-section box">
                                    <div className="all-products-section">
                                        
                                        <div className="row g-3">
                                            {
                                                data.map((e => {
                                                    return (
                                                        <div className="col-lg-2" key={e.id}>
                                                            <div className="card">
                                                                <div className="img-box">
                                                                    <img  src={require(`../Images/Products/${e.image[0]}`)} alt={e.image[0]} />
                                                                </div>
                                                                <h6 className="sm-title price"><del className='sm-para'>{e.price}</del>  {e.price - e.price*15/100} <span className="text-success xs-title">15% Off</span></h6>
                                                                <p className="sm-para name">{e.name}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                }))

                                            }



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default ViewAllPage;