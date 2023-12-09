import React from 'react';
import '../Scss/mobileFooterMenu.scss';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MobileFooterMenu = () => {
    return (
        <>
            <div className="mobile-footer-menu-wrapper">
                <div className="mfm-content-box">
                    <a href='#' className="mfm-content">
                        <div className="icon-box">
                            <HomeIcon />
                        </div>
                        <div className="mfm-title">Home</div>
                    </a>
                    <a href='#' className="mfm-content">
                        <div className="icon-box">
                            <ManageSearchIcon />
                        </div>
                        <div className="mfm-title">Categories</div>
                    </a>
                    <a href='#' className="mfm-content">
                        <div className="icon-box">
                            <NotificationsNoneIcon />
                        </div>
                        <div className="mfm-title">Notifications</div>
                    </a>
                    <a href='#' className="mfm-content">
                        <div className="icon-box">
                            <ManageAccountsIcon />
                        </div>
                        <div className="mfm-title">Account</div>
                    </a>
                    <a href='#' className="mfm-content">
                        <div className="icon-box">
                            <ShoppingCartIcon />
                        </div>
                        <div className="mfm-title">Cart</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default MobileFooterMenu