import React from "react";
import "../Scss/footer.scss";
import pm from "../Images/payment-method.svg";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
const footerData = [
    {
      title: "ABOUT",
      list: [
        "Contact Us",
        "About Us",
        "Careers",
        "Dumikart Stories",
        "Press",
        "Dumikart Wholesale",
        "Cleartrip",
        "Corporate Information",
      ],
    },
    {
      title: "Help",
      list: [
        "Payments",
        "Shipping",
        "Cancellation & Returns",
        "FAQ",
        "Report Infringement",
      ],
    },
    {
      title: "CONSUMER POLICY",
      list: [
        "Cancellation & Returns",
        "Terms Of Use",
        "Security",
        "Privacy",
        "Sitemap",
        "Grievance Redressal",
        "EPR Compliance",
      ],
    },
    {
      title: "SOCIAL",
      list: ["Facebook", "Twitter", "YouTube", "Instagram"],
    },
  ];

    return (
        <footer className="footer-wrapper">
                        <div className="footer-contents">
                            <div className="footer-content-top">
                                <div className="footer-content-t-l">
                                    {footerData.map((ele, index) => (
              <ul>
                <h3
                  className={
                    index === 3 ? "footer-title text-primary" : "footer-title"
                  }
                >
                  {ele.title}
                </h3>

                {ele.list.map((ele) => (
                  <li
                    className={
                      index === 3 ? "footer-para text-info" : "footer-para"
                    }
                  >
                    {ele}
                  </li>
                ))}
                                    </ul>
))}
                                </div>

                                <div className="footer-content-t-r">
                                    <div className="footer-content-t-r-l">
                                        <li className="footer-title">Mail Us:</li>
<li className="footer-para">
                Dumikart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India
              </li>
                                    </div>
                                    <ul>
                                        <li className="footer-title">Registered Office Address:</li>

                                        <li className="footer-para">
                Dumikart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India CIN :
                U51109KA2012PTC066107 Telephone:{" "}
                <a href="tel:044-45614700">044-45614700</a>{" "}
              </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-content-bottom">
                                <ul>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <AutoGraphIcon style={{ width: " 14px", height: "14px" }} />
                                        </div>
                                        <div className="fcb-title">Become a Seller</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <AutoFixHighIcon style={{ width: " 14px", height: "14px" }} />
                                        </div>
                                        <div className="fcb-title">Advertise</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <CardGiftcardIcon style={{ width: " 14px", height: "14px" }} />
                                        </div>
                                        <div className="fcb-title">Gift Cards</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box">
                                            <HelpOutlineIcon style={{ width: " 14px", height: "14px" }} />
                                        </div>
                                        <div className="fcb-title">Help Center</div>
                                    </li>
                                    <li className="fcb">
                                        <div className="icon-box"></div>
                                        <div className="fcb-title">
                <CopyrightIcon
                  style={{ width: " 16px", height: "16px", color: "red" }}
                />{" "}
                2023-25 Dumikart.com
              </div>
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
    );
};

export default Footer;
