import React from 'react';
import Header from '../Home Components/Header';
import '../Scss/profile.scss'
const Profilepage = () => {
    return (
        <>
            <Header />
            <div className="profile-page-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="profile-section">
                                <div className="card">
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
                                            <input type="text" className='form-control' disabled value="mukeshkumarmaurya70@gmail.com" />
                                        </div>
                                        <div className="form-group">
                                            <label className="card-title">
                                                Mobile Number
                                            </label>
                                            <input type="text" className='form-control' disabled value="+91-7019138442" />
                                        </div>
                                        <div className="form-group">
                                            <label className="card-title">
                                                Account Status
                                            </label>
                                            <input type="text" className='form-control' disabled value="Active" />
                                        </div>
                                        <div className="sbmt-box">

                                        <input type="submit" className='sbmt-btn' value="Submit" />
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="col-12">
                                <div className="account-scetion"></div>
                            </div>
                            <div className="col-12">
                                <div className="address-section"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profilepage;