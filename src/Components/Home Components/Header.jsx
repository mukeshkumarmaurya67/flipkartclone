import React, { useContext, useEffect, useState } from "react";

import logo from "../Images/brand-logo.png";
import signinimg from "../Images/signin-bg.png";
import signupimg from "../Images/signup-bg.png";

import { globalContext } from "../../App";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BrandLogo from "./brandlogo";

const Header = ({ dkmode }) => {
  let [search, setSearch] = useState("");
  let data = useContext(globalContext);

  let loginfun = () => {
    document.getElementById("signin").style.display = "flex";
    document.getElementById("signup").style.display = "none";
    document.getElementById("signin").style.transform = "translateX(0)";
    document.getElementById("signup").style.transform = "translateX(-100px)";
  };

  let signupfun = () => {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "flex";
    document.getElementById("signin").style.transform = "translateX(-100px)";
    document.getElementById("signup").style.transform = "translateX(0)";
  };
  let submitingLogin = () => {
    document.querySelector(".before-otp").style.display = "none";
  };

  let hideBeforeOtp = () => {
    document.querySelector(".before-otp").style.display = "block";
    document.querySelector(".after-otp").style.display = "none";
  };
  let hideAfterOtp = () => {
    document.querySelector(".before-otp").style.display = "none";
    document.querySelector(".after-otp").style.display = "block";
  };

  let darkmodeToggle = () => {
    let x = document.querySelector("body");
    x.classList.toggle("dark-bg");

    dkmode();
  };

  let checkinptactive = () => {
    let xy = document.getElementById("searchbar");
    let showdrpdown = document.querySelector(".form-drpdwn");
    if (search != "") {
      showdrpdown.style.display = "block";
    } else {
      showdrpdown.style.display = "none";
    }
  };
  useEffect(() => {
    checkinptactive();
  }, [search]);

  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container">
          <Link class="navbar-brand" to="/">
            {/* <img src={logo} alt="Brand Logo" /> */}
            <BrandLogo/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input
                class="form-control"
                type="search"
                placeholder="Search for Products, Brand and More"
                aria-label="Search"
                id="searchbar"
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="search-icon">
                <SearchIcon style={{ color: "#fe6758" }} />
              </span>

              <div className="form-drpdwn">
                {data
                  .filter(
                    (s) =>
                      s.name.toLowerCase().includes(search.toLowerCase()) ||
                      // s.specification.color.toLowerCase().includes(search.toLowerCase()) ||
                      s.specification.brand
                        .toLowerCase()
                        .includes(search.toLowerCase())
                  )
                  .map((file, index) => {
                    return (
                      <Link className="products-link" to={`/product-details/${file.id}`}>
                      <div className="listed-products" key={index} onClick={()=>{setSearch("")}}>
                        <div className="img-box">
                          <img src={require(`../Images/Products/${file.image[0]}`)} alt="" />
                       
                        </div>
                        <p className="prdct-name">{file.name}</p>
                        <p className="prdct-price"><CurrencyRupeeIcon style={{fontSize:"12px"}} /> {file.price}</p>
                      </div>
                      </Link>
                    );
                  })}
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#loginDropdown"
                  data-bs-toggle="dropdown"
                >
                  <div className="icon-box">
                    <AccountCircleIcon style={{ color: "black" }} />
                  </div>
                  <span
                    data-bs-target="#signup-signin-modal"
                    role="button"
                    data-bs-toggle="modal"
                    onClick={loginfun}
                  >
                    Login
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="loginDropdown">
                  <li className="dropdown-item">
                    <span class="login-cstmr" onClick={loginfun}>
                      Login
                    </span>
                    <a
                      href="#signup-signin-modal"
                      role="button"
                      data-bs-toggle="modal"
                      onClick={signupfun}
                      className="sgnp"
                    >
                      Signup
                    </a>
                  </li>

                  <li className="dropdown-item">
                    <Link to="/profile">
                      <div className="icon-box">
                        <ManageAccountsIcon />
                      </div>{" "}
                      My Profile
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/product-details">
                      <div className="icon-box">
                        <ProductionQuantityLimitsIcon />
                      </div>{" "}
                      Products
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/">
                      <div className="icon-box">
                        <FavoriteIcon />
                      </div>{" "}
                      Wishlist
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/seprate-category">
                      <div className="icon-box">
                        <EmojiEventsIcon />
                      </div>{" "}
                      Rewards
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/">
                      <div className="icon-box">
                        <LocalOfferIcon />
                      </div>{" "}
                      Giftcards
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/contactus">
                      <div className="icon-box">
                        <ManageAccountsIcon />
                      </div>{" "}
                      Contact Us
                    </Link>
                  </li>

                  <li className="dropdown-item">
                    <Link to="/thankyou">
                      <div className="icon-box">
                        <LogoutIcon />
                      </div>{" "}
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/cart">
                  <div className="icon-box">
                    <AddShoppingCartIcon style={{ color: "black" }} />
                  </div>
                  <span>Cart</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link " href="#">
                  <div className="icon-box">
                    <CardGiftcardIcon style={{ color: "black" }} />
                  </div>
                  <span>Become a Seller</span>
                </a>
              </li>
              <li class="nav-item" id="darkmode">
                <button class="nav-link " onClick={darkmodeToggle}>
                  <DarkModeIcon style={{ color: "black" }} />
                </button>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/viewallpage">
                  <MoreVertIcon style={{ color: "black" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="modal" id="signup-signin-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Login Content Start From Here */}
            <div className="modal-body" id="signin">
              <div className="sign-wrapper">
                <div className="sign-content">
                  <div className="sign-content-l">
                    <div className="sign-content-l-desc">
                      <div className="sign-content-l-title">Login</div>
                      <div className="sign-content-l-para">
                        Get access to your Orders, Wishlist and Recommendations
                      </div>
                    </div>
                    <div className="sign-content-l-img">
                      <img src={signupimg} alt="Sign In" />
                    </div>
                  </div>
                  <div className="sign-content-r">
                    <div className="sign-content-r-content">
                      {/* Befrore Otp Request This Fiel Will Display  */}

                      <div className="before-otp">
                        <form
                          action=""
                          className="signform"
                          onSubmit={submitingLogin}
                        >
                          <div className="form-group">
                            <label htmlFor="" className="form-label">
                              Enter Mobile Number
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              required
                              maxLength={10}
                            />
                          </div>
                          <div class="d-flex align-items-start">
                            <input type="checkbox" required />
                            <span className="tnc">
                              By continuing, you agree to BlinkBasket's{" "}
                              <Link to="/"> Terms of Use </Link> and{" "}
                              <Link to="/"> Privacy Policy</Link>.
                            </span>
                          </div>
                          <input
                            type="submit"
                            href="#"
                            className="continue-btn btn btn-red form-control"
                            value="Continue"
                            onClick={hideAfterOtp}
                          />
                        </form>
                      </div>

                      {/* After Reciveing otp this field will display  */}
                      <div className="after-otp">
                        <form action="">
                          <p>
                            OTP send To 7019138442{" "}
                            <Link to="/" onClick={hideBeforeOtp}>
                              {" "}
                              Inccorect ?
                            </Link>
                          </p>
                          <div className="input-grp form-group">
                            <input
                              type="text"
                              className="inpt"
                              maxLength={1}
                              required
                              size={1}
                            />
                            <input
                              type="text"
                              className="inpt"
                              maxLength={1}
                              required
                              size={1}
                            />
                            <input
                              type="text"
                              className="inpt"
                              maxLength={1}
                              required
                              size={1}
                            />
                            <input
                              type="text"
                              className="inpt"
                              maxLength={1}
                              required
                              size={1}
                            />
                            <input
                              type="text"
                              className="inpt"
                              maxLength={1}
                              required
                              size={1}
                            />
                            <input
                              type="text"
                              className="inpt"
                              maxLength={1}
                              required
                              size={1}
                            />
                          </div>
                          <input
                            type="submit"
                            href="#"
                            className="continue-btn btn btn-red form-control"
                            value="Verify "
                          />
                          <p className="pt-4">
                            Not received OTP ? <Link to="/"> Resend Now</Link>
                          </p>
                        </form>
                      </div>

                      <a
                        href="#"
                        className="existing-cstmr"
                        onClick={signupfun}
                      >
                        New to BlinkBasket? Create an account
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Content Start From Here */}

            <div className="modal-body" id="signup">
              <div className="sign-wrapper">
                <div className="sign-content">
                  <div className="sign-content-l">
                    <div className="sign-content-l-desc">
                      <div className="sign-content-l-title">
                        Looks like you're new here!
                      </div>
                      <div className="sign-content-l-para">
                        Sign up with your mobile number to get started
                      </div>
                    </div>
                    <div className="sign-content-l-img">
                      <img src={signinimg} alt="Sign In" />
                    </div>
                  </div>
                  <div className="sign-content-r">
                    <div className="sign-content-r-content">
                      <form action="" className="signform mb-2">
                        <div className="form-group">
                          <label htmlFor="" className="form-label">
                            Enter Mobile Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            maxLength={10}
                            required
                          />
                        </div>
                        <div class="d-flex align-items-start">
                          <input type="checkbox" required />
                          <span className="tnc">
                            By continuing, you agree to BlinkBasket's{" "}
                            <Link to="/"> Terms of Use </Link> and{" "}
                            <Link to="/"> Privacy Policy</Link>.
                          </span>
                        </div>
                        <a
                          href="#"
                          className="continue-btn btn btn-red form-control"
                        >
                          Request OTP
                        </a>
                      </form>

                      <a
                        href="#"
                        className=" btn btn-white signup-contents b-0"
                        onClick={loginfun}
                      >
                        Existing User? Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
