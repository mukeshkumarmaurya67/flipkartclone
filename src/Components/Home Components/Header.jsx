import React from 'react';
import '../Scss/header.scss';
import '../Scss/button.scss';

import logo from '../Images/brand-logo.png';
import signinimg from '../Images/signin-bg.png';
import signupimg from '../Images/signup-bg.png';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


const Header = () => {


  let loginfun = () => {
    document.getElementById("signin").style.display = "flex";
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.transform = "translateX(0)";
    document.getElementById("signup").style.transform = "translateX(-100px)";

  }

  let signupfun = () => {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "flex";
    document.getElementById("signin").style.transform = "translateX(-100px)";
    document.getElementById("signup").style.transform = "translateX(0)";
  }
  let submitingLogin = () => {
    document.querySelector(".before-otp").style.display = "none";

  }

  let hideBeforeOtp = () => {
document.querySelector(".before-otp").style.display = "block";
document.querySelector(".after-otp").style.display = "none";

  }
  let hideAfterOtp = () => {
document.querySelector(".before-otp").style.display="none";
document.querySelector(".after-otp").style.display = "block";
  }

  return (
    <>



      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt='Brand Logo' />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input class="form-control" type="search" placeholder="Search for Products, Brand and More" aria-label="Search" />
              <span className='search-icon'>
                <SearchIcon style={{ color: '#fe6758' }} />
              </span>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#loginDropdown" data-bs-toggle="dropdown">
                  <div className="icon-box">
                    <AccountCircleIcon style={{ color: 'black' }} />
                  </div>
                  <span data-bs-target='#signup-signin-modal' role='button' data-bs-toggle="modal" onClick={loginfun}>Login</span></a>
                <ul className='dropdown-menu' aria-labelledby="loginDropdown">
                  <li className='dropdown-item'><span class="login-cstmr" onClick={loginfun}>Login</span>
                    <a href='#signup-signin-modal' role='button' data-bs-toggle="modal" onClick={signupfun} className='sgnp'>Signup</a></li>
                  <hr />
                  <li className='dropdown-item'><div className="icon-box"><ManageAccountsIcon /></div> My Profile</li>
                  <li className='dropdown-item'><div className="icon-box"><ProductionQuantityLimitsIcon /></div> Orders</li>
                  <li className='dropdown-item'><div className="icon-box"><FavoriteIcon /></div> Wishlist</li>
                  <li className='dropdown-item'><div className="icon-box"><EmojiEventsIcon /></div> Rewards</li>
                  <li className='dropdown-item'><div className="icon-box"><LocalOfferIcon /></div> Giftcards</li>
                  <li className='dropdown-item'><div className="icon-box"><LogoutIcon /></div> Logout</li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div className="icon-box">
                    <AddShoppingCartIcon style={{ color: 'black' }} />
                  </div>
                  <span>Cart</span>

                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link " href="#"  >
                  <div className="icon-box">
                    <CardGiftcardIcon style={{ color: 'black' }} />
                  </div>
                  <span>Become a Seller</span>
                </a>

              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><MoreVertIcon style={{ color: 'black' }} /></a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <div className='modal' id='signup-signin-modal'>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            {/* Login Content Start From Here */}
            <div className="modal-body" id='signin' >
              <div className="sign-wrapper">
                <div className="sign-content">
                  <div className="sign-content-l">
                    <div className="sign-content-l-desc">
                      <div className="sign-content-l-title">Login</div>
                      <div className="sign-content-l-para">Get access to your Orders, Wishlist and Recommendations</div>
                    </div>
                    <div className="sign-content-l-img">
                      <img src={signupimg} alt="Sign In" />
                    </div>
                  </div>
                  <div className="sign-content-r">
                    <div className="sign-content-r-content">

                      {/* Befrore Otp Request This Fiel Will Display  */}

                      <div className="before-otp">
                        <form action="" className="signform" onSubmit={submitingLogin}>

                          <div className="form-group">
                            <label htmlFor="" className="form-label">Enter Mobile Number</label>
                            <input type="tel" className='form-control' required maxLength={10} />
                          </div>
                          <div class="d-flex align-items-start">
                            <input type='checkbox' required />
                            <span className='tnc'>By continuing, you agree to Dumikart's <a href='#'> Terms of Use </a> and <a href='#'> Privacy Policy</a>.</span>
                          </div>
                          <input type='submit' href='#' className="continue-btn btn btn-red form-control" value="Continue" onClick={hideAfterOtp} />
                        </form>
                      </div>

                      {/* After Reciveing otp this field will display  */}
                      <div className="after-otp">
                        <form action="" >
                          <p>OTP send To 7019138442 <a href='#' onClick={hideBeforeOtp}> Inccorect ?</a></p>
                          <div className="input-grp form-group">
                            <input type="text" className='inpt' maxLength={1} required size={1} />
                            <input type="text" className='inpt' maxLength={1} required size={1} />
                            <input type="text" className='inpt' maxLength={1} required size={1} />
                            <input type="text" className='inpt' maxLength={1} required size={1} />
                            <input type="text" className='inpt' maxLength={1} required size={1} />
                            <input type="text" className='inpt' maxLength={1} required size={1} />
                          </div>
                          <input type='submit' href='#' className="continue-btn btn btn-red form-control" value="Verify " />
                          <p className='pt-4'>Not received OTP ? <a href='#'> Resend Now</a></p>
                        </form>
                      </div>

                      <a href="#" className="existing-cstmr" onClick={signupfun}>New to Dumikart? Create an account</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Logout Content Start From Here */}

            <div className="modal-body" id='signup'>
              <div className="sign-wrapper">
                <div className="sign-content">
                  <div className="sign-content-l">
                    <div className="sign-content-l-desc">
                      <div className="sign-content-l-title">Looks like you're new here!</div>
                      <div className="sign-content-l-para" >Sign up with your mobile number to get started</div>
                    </div>
                    <div className="sign-content-l-img">
                      <img src={signinimg} alt="Sign In" />
                    </div>
                  </div>
                  <div className="sign-content-r">
                    <div className="sign-content-r-content">
                      <form action="" className="signform mb-2">
                        <div className="form-group">
                          <label htmlFor="" className="form-label">Enter Mobile Number</label>
                          <input type="tel" className='form-control' maxLength={10} required />
                        </div>
                        <div class="d-flex align-items-start">
                          <input type='checkbox' required />
                          <span className='tnc'>By continuing, you agree to Dumikart's <a href='#'> Terms of Use </a> and <a href='#'> Privacy Policy</a>.</span>
                        </div>
                        <a href='#' className="continue-btn btn btn-red form-control">Request OTP</a>
                      </form>

                      <a href='#' className=" btn btn-white signup-contents b-0" onClick={loginfun}>Existing User? Log in</a>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div >


    </>
  )
}

export default Header