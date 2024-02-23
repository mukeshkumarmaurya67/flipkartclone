import React from 'react'
import Header from '../Home Components/Header';
import CreditCardIcon from '@mui/icons-material/CreditCard';


const Paymentpage = () => {
    return (
        <>
            <Header />
            <section className="payment-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="payment-section">
                                <div className="payment-title">
                                    <h2 className="title">Payment Option</h2>
                                </div>
                                <div className="payment-type-content">
                                    <ul class="nav">
                                        <li class="nav-item">
                                            <button data-bs-toggle="tab" class="nav-link active" aria-current="page" data-bs-target="#card">
                                                <div className="icon-box">
                                                    <img src={require(`../Images/Icons/credit-cards.png`)} alt="Card" />
                                                </div>
                                                <div className="sm-title">Card</div>
                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button data-bs-toggle="tab" class="nav-link" href="#paytm">

                                                <div className="icon-box">
                                                    <img src={require(`../Images/Icons/paytm.png`)} alt="Paytm" />
                                                </div>
                                                <div className="sm-title">Paytm</div>
                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button data-bs-toggle="tab" class="nav-link" data-bs-target="#upi">
                                                <div className="icon-box">
                                                    <img src={require(`../Images/Icons/upi.png`)} alt="Upi" />
                                                </div>
                                                <div className="sm-title">Upi</div>
                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button data-bs-toggle="tab" class="nav-link" href="#netbanking">
                                                <div className="icon-box">
                                                    <img src={require(`../Images/Icons/netbanking.png`)} alt="" />
                                                </div>
                                                <div className="sm-title">Net Banking</div>
                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button data-bs-toggle="tab" class="nav-link" data-bs-target="#paylater">
                                                <div className="icon-box">
                                                    <img src={require(`../Images/Icons/pay-later.png`)} alt="" />
                                                </div>
                                                <div className="sm-title">Pay Later</div>
                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button data-bs-toggle="tab" class="nav-link" href="#emi">
                                                <div className="icon-box">
                                                    <img src={require(`../Images/Icons/emi.png`)} alt="" />
                                                </div>
                                                <div className="sm-title">Emi</div>
                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button data-bs-toggle="tab" class="nav-link" href="#cod">
                                                <div className="icon-box">
                                                    <img src={require(`../Images/Icons/cash-on-delivery.png`)} alt="" />
                                                </div>
                                                <div className="sm-title">C O D</div>
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content">
                                    <div className="tab-pane active show" id='card'>

                                        <form action="" className='forms'>
                                            <div className="form-group">
                                                <label className="form-label">Card number</label>
                                                <div className='card-num-field'>
                                                <input type="text" className="form-control w-100" placeholder='1234 1234 1234 1234' />
                                                <div className="img-box">
                                                    <img src={require(`../Images/Icons/payment-method.png`)} alt='Payment Method'/>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="f-group">
                                                <div className="form-group">
                                                    <label className="form-label">Expiration</label>
                                                    <input type="text" className="form-control" placeholder='MM / YY' />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">CVC</label>
                                                    <input type="text" className="form-control" placeholder='CVC' />
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label className="form-label">Card Holder Name</label>
                                                <input type="text" className="form-control" placeholder='Username' />
                                            </div>
                                        </form>
                                    </div>


                                    <div className="tab-pane show" id='paytm'>
                                        this paytm section
                                    </div>
                                    <div className="tab-pane show" id='upi'>
                                        this upi section
                                    </div>


                                    <div className="tab-pane show" id='netbanking'>
                                        <div className="netbanking-section">
                                            <div className="netbanking-title title">Net Banking</div>
                                            <form action="" className='forms'>
                                                <div className="form-group">
                                                    <input type="radio" name='netbanking' />
                                                    <span className="icon-box">
                                                        <img src={require(`../Images/Icons/hdfc.png`)} alt="HDFC" />
                                                    </span>
                                                    <label>HDFC Bank</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="radio" name='netbanking' />
                                                    <span className="icon-box">
                                                        <img src={require(`../Images/Icons/icici.png`)} alt="ICICI" />
                                                    </span>
                                                    <label>ICICI Bank</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="radio" name='netbanking' />
                                                    <span className="icon-box">
                                                        <img src={require(`../Images/Icons/sbi.png`)} alt="Sbi" />
                                                    </span>
                                                    <label>State Bank Of India</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="radio" name='netbanking' />
                                                    <span className="icon-box">
                                                        <img src={require(`../Images/Icons/axis.png`)} alt="Axis" />
                                                    </span>
                                                    <label>Axis Bank</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="radio" name='netbanking' />
                                                    <span className="icon-box">
                                                        <img src={require(`../Images/Icons/kotak.png`)} alt="Kotak" />
                                                    </span>
                                                    <label>Kotak Mahindra Bank</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="radio" name='netbanking' />
                                                    <span className="icon-box">
                                                        <img src={require(`../Images/Icons/canara.png`)} alt="Canara" />
                                                    </span>
                                                    <label>Canara Bank</label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>





                                    <div className="tab-pane show" id='emi'>
                                        this emi section
                                    </div>
                                    <div className="tab-pane show" id='paylater'>
                                        this paylater section
                                    </div>
                                    <div className="tab-pane show" id='cod'>
                                        this COD section
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="cart-right-content">
                                <div className="price-detail-title title">Price Details</div>
                                <div className="price-detail-group">
                                    <span className="para">Price (2 items)</span>
                                    <span className="md-title">₹77,997</span>
                                </div>
                                <div className="price-detail-group">
                                    <span className="para">Discount</span>
                                    <span className="md-title text-success">− ₹41,775</span>
                                </div>
                                <div className="price-detail-group">
                                    <span className="para">Buy more & save more</span>
                                    <span className="md-title text-success">− ₹2,000</span>
                                </div>
                                <div className="price-detail-group">
                                    <span className="para">Delivery Charges</span>
                                    <span className="md-title text-success"><del className='para'>₹160 </del> Free</span>
                                </div>
                                <div className="price-detail-group">
                                    <span className="para">Secured Packaging Fee</span>
                                    <span className="md-title">₹69</span>
                                </div>
                                <div className="price-detail-group total-amount title">
                                    <span className="">Total Amount</span>
                                    <span className="">₹34,291</span>
                                </div>
                                <p className="text-success ps-3">You will save ₹43,706 on this order</p>
                            </div>
                        </div>

                        <div className="col-lg-9 mt-2">
                            <div className="place-order">
                                <a href="#/payment" className='btns bg-dark'> {` Pay ₹34,291`}</a>
                            </div>
                            <p className="sm-para mt-3 text-center text-secondary">Payments are secure & encrypted</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Paymentpage