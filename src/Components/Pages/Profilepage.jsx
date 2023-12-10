import React from 'react';
import Header from '../Home Components/Header';
import '../Scss/profile.scss';

const Profilepage = () => {
    let toglesbmt = (e) => {
        let x = document.getElementById("sbmt");
        x.classList.toggle("d-none");
    }
    let editaddress = (event) => {

    }
    return (
        <>
            <Header />
            <div className="profile-page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="profile-section">
                                <div className="card">
                                    <div className="edit-group form-group">
                                        <input type="checkbox" id="edit" onClick={toglesbmt} />
                                        <label for="html">Edit</label>
                                    </div>
                                    <div className="profile-img">
                                        <div className="profile-img-box">

                                            <img src={require('../Images/profile-pic.jpg')} alt='Profile Pic' />
                                        </div>
                                        <div className="form-group">
                                            <label></label>
                                        </div>
                                    </div>
                                    <div className="profile-name card-title">Mukesh Kumar Maurya</div>
                                    <form className="profile-dettails">
                                        <div className="form-group">
                                            <label className="card-title">
                                                Email:
                                            </label>
                                            <input type="text" className='form-control tgl' disabled value="mukeshkumarmaurya70@gmail.com" />
                                        </div>
                                        <div className="form-group">
                                            <label className="card-title">
                                                Mobile Number
                                            </label>
                                            <input type="text" className='form-control tgl' disabled value="+91-7019138442" />
                                        </div>
                                        <div className="form-group">
                                            <label className="card-title">
                                                Account Status
                                            </label>
                                            <input type="text" className='form-control' disabled value="Active" />
                                        </div>
                                        <div className="sbmt-box">

                                            <input type="submit" className='sbmt-btn d-none' value="Submit" id='sbmt' />
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="col-12">
                                <div className="account-scetion">
                                    <div className="account-section-content">
                                        <h3 className="account-title">Account Details</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <h3 className="address-section-content">Address Details</h3>
                                <div className="address-section">

                                    <div className="address-card-wrapper ">
                                        <div className="card">
                                            <div className="edit-group form-group">
                                                <input type="checkbox" id="edit" onClick={editaddress} />
                                                <label for="html">Edit</label>
                                            </div>
                                            <span className='addres-type bg-success'>Home</span>
                                            <h4 className='name-contact'><span>Mukesh</span><span>+91-7019138442</span></h4>
                                            <address>315 GANESHNALAYA , GROUND FLOOR, 4TH CROSS , BASCOW NAGAR ,T. C PALAYA, Bengaluru, Karnataka - 560036</address>
                                        </div>
                                    </div>

                                    <div className="address-card-wrapper ">
                                        <div className="card">
                                            <div className="edit-group form-group">
                                                <input type="checkbox" id="edit" onClick={editaddress} />
                                                <label for="html">Edit</label>
                                            </div>
                                            <span className='addres-type bg-warning'>Office</span>
                                            <h4 className='name-contact'><span>Mukesh</span><span>+91-7738898065</span></h4>
                                            <address>#503 ,5th Floor Mayuransh Elanza Near Shyamal cross  Ahemdabad Gujrat - 380051</address>
                                        </div>
                                    </div>

                                    <div className="address-card-wrapper ">
                                        <div className="card">
                                            <div className="edit-group form-group">
                                                <input type="checkbox" id="edit" onClick={editaddress} />
                                                <label for="html">Edit</label>
                                            </div>
                                            <span className='addres-type bg-info'>Work</span>
                                            <h4 className='name-contact'><span>Mukesh</span><span>+91-7738898065</span></h4>
                                            <address>#503 ,5th Floor Mayuransh Elanza Near Shyamal cross  Ahemdabad Gujrat - 380051</address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profilepage;