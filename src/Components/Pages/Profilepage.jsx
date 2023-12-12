import React, { useEffect, useState } from 'react';
import Header from '../Home Components/Header';
import '../Scss/profile.scss';

const Profilepage = () => {
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [mail, setMail] = useState("");
    let [toggledisabled, settoggledisabled] = useState(1);
    let [images, setImages] = useState("");

    let toglesbmt = () => {
        toggledisabled == 0 ? settoggledisabled(1) : settoggledisabled(0);
    }
    let [userdetails, setUserdetails] = useState({});

    let fetchData = () => {
        fetch("http://localhost:3000/profiledetails")
            .then(r => r.json())
            .then(x => {
                setUserdetails(x)
                setFname(x.fname);
                setLname(x.lname);
                setMail(x.mail);
                setImages(x.pimage)
            })

    }
    useEffect(() => {
        fetchData()
    }, [1])



    let editaddress = (event) => {
    }

    let formsubmit = () => {

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
                                    <form className="profile-dettails" on onSubmit={formsubmit}>
                                        <div className="profile-img">
                                            <input type="file" className='edit-img' accept="image/png, image/jpeg,image/jpg" disabled={toggledisabled} />
                                            <div className="profile-img-box">
                                                {console.log(images)}
                                                <img src={require(`../Images/Products/${images}`)} alt='Profile Pic' 
                                            onChange={obj=>setImages(obj.target.value)} value={images} />   
                                            </div>
                                            <div className="form-group">
                                                <label></label>
                                            </div>
                                        </div>
                                        <div className="profile-name card-title">Mukesh Kumar Maurya</div>


                                        <div className="form-group">
                                            <label className="card-title">
                                                First Name:
                                            </label>
                                            <input type="text" className='form-control tgl' disabled={toggledisabled} value={fname} onChange={obj => setFname(obj.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="card-title">
                                                Last Name:
                                            </label>
                                            <input type="text" className='form-control tgl' disabled={toggledisabled} onChange={obj => setLname(obj.target.value)} value={lname} />
                                        </div>
                                        <div className="form-group">
                                            <label className="card-title">
                                                Change Mail Id:
                                            </label>
                                            <input type="text" className='form-control tgl' disabled={toggledisabled} value={mail} onChange={obj => setMail(obj.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="card-title">
                                                Gender:
                                            </label>
                                            <div className="gender-box">
                                                <input type='radio' name='gender' disabled={toggledisabled} value=" male" /> <span className='text-white ms-1 me-3'>Male</span>
                                                <input type='radio' name='gender' disabled={toggledisabled} value="female" /> <span className='text-white ms-1'>Female</span>
                                            </div>
                                        </div>

                                        <div className="sbmt-box">

                                            <input type="submit" className='sbmt-btn' value="Submit" disabled={toggledisabled} id='sbmt' />
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="col-12">
                                <div className="account-scetion">
                                    <div className="account-section-content">
                                        <h3 className="account-title lg-title">Account Details</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <h3 className="address-section-content lg-title">Address Details</h3>
                                <div className="address-section">

                                    <div className="address-card-wrapper ">
                                        <div className="card">
                                            <div className="edit-group form-group">
                                                <input type="checkbox" id="edit" onClick={editaddress} />
                                                <label for="html">Edit</label>
                                            </div>
                                            <span className='addres-type bg-success'>Home</span>
                                            <h4 className='name-contact sm-title'><span>Mukesh</span><span>+91-7019138442</span></h4>
                                            <address className='sm-para'>315 GANESHNALAYA , GROUND FLOOR, 4TH CROSS , BASCOW NAGAR ,T. C PALAYA, Bengaluru, Karnataka - 560036</address>
                                        </div>
                                    </div>

                                    <div className="address-card-wrapper ">
                                        <div className="card">
                                            <div className="edit-group form-group">
                                                <input type="checkbox" id="edit" onClick={editaddress} />
                                                <label for="html">Edit</label>
                                            </div>
                                            <span className='addres-type bg-warning'>Office</span>
                                            <h4 className='name-contact sm-title'><span>Mukesh</span><span>+91-7738898065</span></h4>
                                            <address className='sm-para'>#503 ,5th Floor Mayuransh Elanza Near Shyamal cross  Ahemdabad Gujrat - 380051</address>
                                        </div>
                                    </div>

                                    <div className="address-card-wrapper ">
                                        <div className="card">
                                            <div className="edit-group form-group">
                                                <input type="checkbox" id="edit" onClick={editaddress} />
                                                <label for="html">Edit</label>
                                            </div>
                                            <span className='addres-type bg-info'>Work</span>
                                            <h4 className='name-contact sm-title'><span>Mukesh</span><span>+91-7738898065</span></h4>
                                            <address className='sm-para'>#503 ,5th Floor Mayuransh Elanza Near Shyamal cross  Ahemdabad Gujrat - 380051</address>
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