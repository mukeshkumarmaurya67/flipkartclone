import React, { useEffect, useState } from 'react';
import Header from '../Home Components/Header';
import '../Scss/main.scss';
import '../Scss/profile.scss';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactsIcon from '@mui/icons-material/Contacts';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import '../Scss/button.scss'

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
        fetch("http://localhost:10001/profiledetails")
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

    let [test, setTest] = useState([]);



    let fetching = () => {
        fetch("http://localhost:10001/product")
            .then(r => r.json())
            .then(x => {
                setTest(x);
            })
    }

    useEffect(() => {
        fetching()
    }, [0])

    console.log(test)


    return (
        <>
            <Header />
            <div className="profile-page-wrapper pt-3">
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
                                            <div className="profile-img-box" >

                                                {/* <img src={require(`../Images/Products/${images}`)} alt='Profile Pic' 
                                            onChange={obj=>setImages(obj.target.value)} value={images} />    */}
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
                            <div className="tab-content-section">
                                <ul class="nav " id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">

                                        <button class="nav-link sm-title active" id="account-tab" data-bs-toggle="tab" data-bs-target="#account" type="button" role="tab" aria-controls="account" aria-selected="true"><div className="icon-box"><AccountBalanceWalletIcon /></div>Account Details</button>
                                    </li>
                                    <li class="nav-item" role="presentation">

                                        <button class="nav-link sm-title" id="address-tab" data-bs-toggle="tab" data-bs-target="#address" type="button" role="tab" aria-controls="address" aria-selected="false"><div className="icon-box"><ContactsIcon /></div>Addres Details</button>
                                    </li>
                                    <li class="nav-item" role="presentation">

                                        <button class="nav-link sm-title" id="mystuff-tab" data-bs-toggle="tab" data-bs-target="#mystuff" type="button" role="tab" aria-controls="my stuff" aria-selected="false"><div className="icon-box"><SettingsAccessibilityIcon /></div>My Stuff</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="col-12">
                                        <div className="account-scetion">
                                            <div className="account-section-content">
                                                <h3 className="account-title lg-title">Account Details</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade show" id="address" role="tabpanel" aria-labelledby="home-tab">
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
                                <div class="tab-pane fade show" id="mystuff" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="col-12">
                                        <div className="grid-scetion">
                                            <div className="grid-section-content">
                                                <h3 className="title">My Stuff</h3>
                                                <div className="content-section">
                                                    <div className="content-section-header">
                                                        <h2 className="sm-title">Recent Order</h2>
                                                        <a href='#' className='sm-title'>View All</a>
                                                    </div>
                                                    <div className="conatiner-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-2 col-md-3 col-sm-4">
                                                                <div className="card" title='product name'>

                                                                    <div className="img-box">
                                                                        <img src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s20/buy/S20-FE_Mint_SKUimage_MO_img.jpg" alt="" />
                                                                    </div>
                                                                    <div className="sm-title">Samsugn Galaxy s20</div>
                                                                    <div className="sm-para">49999.00</div>
                                                                    <div className="btn-group d-flex gap-1 mt-1">
                                                                        <a href='#' className="btns w-100 btn-md btn-yellow">Buy Again</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2 col-md-3 col-sm-4">
                                                                <div className="card">
                                                                    <div className="img-box">
                                                                        <img src="https://www.suryaelectronics.in/img/Product/Main/SamsungHomeappliancesFAFL.jpg" alt="" /></div>
                                                                    <div className="sm-title">Samsung Washing Machine</div>
                                                                    <div className="sm-para">24999.00</div>
                                                                    <div className="btn-group d-flex gap-1 mt-1">
                                                                        <a href='#' className="btns w-100 btn-md btn-yellow">Buy Again</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2 col-md-3 col-sm-4">
                                                                <div className="card">
                                                                    <div className="img-box">
                                                                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/c/m/b/m-lmsh002233-lee-original-imaggwusgty4zwbt.jpeg?q=90" alt="" /></div>
                                                                    <div className="sm-title">Lee Shirts</div>
                                                                    <div className="sm-para">1875.00</div>
                                                                    <div className="btn-group d-flex gap-1 mt-1">
                                                                        <a href='#' className="btns w-100 btn-md btn-yellow">Buy Again</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2 col-md-3 col-sm-4">
                                                                <div className="card">
                                                                    <div className="img-box">
                                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84fYaXKDCelEJ2ze0UcCf04qJ3r1wZBF33w&usqp=CAU" alt="" /></div>
                                                                    <div className="sm-title">Door Mate</div>
                                                                    <div className="sm-para">249.00</div>
                                                                    <div className="btn-group d-flex gap-1 mt-1">
                                                                        <a href='#' className="btns w-100 btn-md btn-yellow">Buy Again</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content-section mt-3">
                                                    <div className="content-section-header">
                                                        <h2 className="sm-title">Wishlist</h2>
                                                        <h2 className='sm-title'>View All</h2>
                                                    </div>
                                                    <div className="conatiner-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-2 col-md-3 col-sm-4">
                                                                <div className="card">
                                                                    <div className="img-box">
                                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHsohj3mz2pWVIpK9KdU_XnB03e496nv0dQ&usqp=CAU" alt="" /></div>
                                                                    <div className="sm-title">Oppo Reno 5 Tempered Glass</div>
                                                                    <div className="sm-para">269.00</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2 col-md-3 col-sm-4">
                                                                <div className="card">
                                                                    <div className="img-box">
                                                                        <img src="https://www.jiomart.com/images/product/original/rv2trrumms/set-of-4-different-mens-bracelet-cuff-leatherite-material-adjustable-in-different-colors-for-mens-boys-guys-gents-by-goldnera-product-images-rv2trrumms-0-202210271609.jpg?im=Resize=(500,630)" alt="" /></div>
                                                                    <div className="sm-title">Mens Bracelet</div>
                                                                    <div className="sm-para">499.00</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2 col-md-3 col-sm-4">
                                                                <div className="card">
                                                                    <div className="img-box">
                                                                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/g/r/p/32-wmjn007011-wrangler-original-imagsaz6u2pzzvkz.jpeg?q=90" alt="" /></div>
                                                                    <div className="sm-title">Wrangler Jeans</div>
                                                                    <div className="sm-para">2499.00</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-2 col-md-3 col-sm-4">
                                                                <div className="card">
                                                                    <div className="img-box">
                                                                        <img src="https://5.imimg.com/data5/VQ/OZ/JE/SELLER-38159922/original-mi-5000-mah-slim-power-bank-500x500.jpg" alt="" />
                                                                    </div>
                                                                    <div className="sm-title">Power Banks 5000 mh</div>
                                                                    <div className="sm-para">699.00</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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