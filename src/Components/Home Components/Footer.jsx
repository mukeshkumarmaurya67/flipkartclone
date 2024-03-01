import React from "react";
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
        "BlinkBasket Stories",
        "Press",
        "BlinkBasket Wholesale",
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
      title: "Consumer Policy",
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
    // {
    //   title: "Social",
    //   list: ["Facebook", "Twitter", "YouTube", "Instagram"],
    // },
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

            <div className="social-media">
              <h3 className="text-light">Follow Us</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/share/3YTwywWfUFoKhk5z/?mibextid=hu50Ix" target="_blank">
                  <img src={require(`../Images/Icons/facebook.png`)} alt="facebook" title="Follow Us On Facebook" /></a>
                </li>
                <li>
                <a href="https://youtube.com/@mukeshkumarmaurya70?si=nH_h0V-XYLQ6byCJ" target="_blank">
                  <img src={require(`../Images/Icons/youtube.png`)} alt="youtube" title="Follow Us On Youtube" /></a>
                </li>
                <li>
                <a href="https://twitter.com/Mukeshkuma46545" target="_blank">
                  <img src={require(`../Images/Icons/twitter.png`)} alt="twitter" title="Follow Us On Twitter" /></a>
                </li>
                <li>
                <a href="https://www.instagram.com/mukeshkumar.maurya.96?igsh=azhydXBmbmpsODc1&utm_source=qr" target="_blank">
                  <img src={require(`../Images/Icons/instagram.png`)} alt="instagram" title="Follow Us On Instagram"/></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-content-t-r">
            <div className="footer-content-t-r-l">
              <li className="footer-title">Mail Us:</li>
              <li className="footer-para">
                BlinkBasket Internet Private Limited, Buildings Alyssa, Begonia
                & Clove Embassy Tech Village, Outer Ring Road,
                Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India
              </li>
            </div>
            <ul>
              <li className="footer-title">Registered Office Address:</li>

              <li className="footer-para">
                BlinkBasket Internet Private Limited, Buildings Alyssa, Begonia
                & Clove Embassy Tech Village, Outer Ring Road,
                Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India
                CIN : U51109KA2012PTC066107 Telephone:{" "}
                <a href="tel:+91-7019138442">044-45614700</a>{" "}
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
                2023-25 BlinkBasket.com
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
