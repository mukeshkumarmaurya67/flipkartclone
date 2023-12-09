import React from 'react';
import '../Scss/footer.scss';
import pm from'../Images/payment-method.svg';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () => {
    return (
        <footer className='footer-wrapper'>


                        <div className="footer-contents">
                            <div className="footer-content-top">
                                <div className="footer-content-t-l">
                                    <ul>
                                        <li className="footer-title">ABOUT</li>
                                        <li className="footer-para">Contact Us</li>
                                        <li className="footer-para">About Us</li>
                                        <li className="footer-para">Careers</li>
                                        <li className="footer-para">Dumikart Stories</li>
                                        <li className="footer-para">Press</li>
                                        <li className="footer-para">Dumikart Wholesale</li>
                                        <li className="footer-para">Cleartrip</li>
                                        <li className="footer-para">Corporate Information</li>
                                    </ul>

                                    <ul>
                                        <li className="footer-title">HELP</li>

                                        <li className="footer-para">Payments</li>
                                        <li className="footer-para">Shipping</li>
                                        <li className="footer-para">Cancellation & Returns</li>
                                        <li className="footer-para">FAQ</li>
                                        <li className="footer-para">Report Infringement</li>
                                    </ul>

                                    <ul>
                                        <li className="footer-title">CONSUMER POLICY</li>

                                        <li className="footer-para">Cancellation & Returns</li>
                                        <li className="footer-para">Terms Of Use</li>
                                        <li className="footer-para">Security</li>
                                        <li className="footer-para">Privacy</li>
                                        <li className="footer-para">Sitemap</li>
                                        <li className="footer-para">Grievance Redressal</li>
                                        <li className="footer-para">EPR Compliance</li>
                                    </ul>

                                    <ul>
                                        <li className="footer-title">SOCIAL</li>

                                        <li className="footer-para">Facebook</li>
                                        <li className="footer-para">Twitter</li>
                                        <li className="footer-para">YouTube</li>
                                        <li className="footer-para">INSTAGRAM</li>
                                    </ul>
                                </div>
                                <div className="footer-content-t-r">
                                    <ul className='footer-content-t-r-l'>
                                        <li className="footer-title">Mail Us:</li>

                                        <li className="footer-para">Dumikart Internet Private Limited, </li>
                                        <li className="footer-para"> Buildings Alyssa, Begonia & </li>
                                        <li className="footer-para">  Clove Embassy Tech Village,  </li>
                                        <li className="footer-para"> Outer Ring Road, Devarabeesanahalli Village, </li>
                                        <li className="footer-para">  Bengaluru, 560103,  </li>
                                        <li className="footer-para">  Karnataka, India</li>
                                    </ul>
                                    <ul>
                                        <li className="footer-title">Registered Office Address:</li>

                                        <li className="footer-para">Dumikart Internet Private Limited,  </li>
                                        <li className="footer-para"> Buildings Alyssa, Begonia & </li>
                                        <li className="footer-para"> Clove Embassy Tech Village, </li>
                                        <li className="footer-para"> Outer Ring Road, Devarabeesanahalli Village, </li>
                                        <li className="footer-para"> Bengaluru, 560103, </li>
                                        <li className="footer-para">  Karnataka, India </li>

                                        <li className="footer-para"> CIN : U51109KA2012PTC066107 </li>
                                        <li className="footer-para">   Telephone: <a href="tel:044-45614700">044-45614700</a> </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="footer-content-bottom">
                                <ul>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <AutoGraphIcon  style={{width: ' 14px',height:'14px'}}/>
                                        </div>
                                        <div className="fcb-title">Become a Seller</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <AutoFixHighIcon style={{width: ' 14px',height:'14px'}}/>
                                        </div>
                                        <div className="fcb-title">Advertise</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <CardGiftcardIcon style={{width: ' 14px',height:'14px'}}/>
                                        </div>
                                        <div className="fcb-title">Gift Cards</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <HelpOutlineIcon style={{width: ' 14px',height:'14px'}}/>
                                        </div>
                                        <div className="fcb-title">Help Center</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box"></div>
                                        <div className="fcb-title"><CopyrightIcon style={{width: ' 16px',height:'16px',color:'red'}}/> 2023-25 Dumikart.com</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <img src={pm} alt="Payment Method" />
                                        </div>
                                       
                                    </li>
                                </ul>
                            </div>

                        </div>


        </footer>
    )
}

export default Footer;